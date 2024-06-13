import { World } from "../world";
import { elementLocator } from "./elements";
import { waitForElementToBeLocated } from "./progress";
import dragAndDropScript from "html-dnd";
let debugLog = require("debug")("navigate");

/**
 * Description: Navigates to a URL
 * @date 12/29/2022 - 12:32:34 PM
 *
 * @param {World} self - Cucumber World object
 * @param {string} url - URL to navigate to
 * @returns Promise<void>
 */
export async function navigateTo(self: World, url: string) {
  debugLog(`attempting to open ${url}`);
  await self.driver.get(url);
}

/**
 * Description: Navigates directionally (back or forward)
 * @date 12/29/2022 - 12:32:34 PM
 *
 * @param {World} self - Cucumber World object
 * @param {string} direction - direction to navigate (back or forward)
 * @returns Promise<void>
 */
export async function navigate(self: World, direction: "back" | "forward") {
  if (direction === "back") {
    debugLog("pressing back button");
    await self.driver.navigate().back();
  } else {
    debugLog("pressing forward button");
    await self.driver.navigate().forward();
  }
}

/**
 * Description: Shuts down the driver
 * @date 12/29/2022 - 12:32:34 PM
 *
 * @param {World} self - Cucumber World object
 * @returns Promise<void>
 */
export async function closeDriver(self: World) {
  debugLog("shutting down");
  self.driver.quit;
}

/**
 * Description: Refreshes the page
 * @date 12/29/2022 - 12:32:34 PM
 *
 * @param {World} self - Cucumber World object
 * @returns Promise<void>
 */
export async function refreshPage(self: World) {
  debugLog("refresh");
  await self.driver.navigate().refresh();
}

/**
 * Description: Gets the system modifier key (control or command)
 * @date 12/29/2022 - 12:32:34 PM
 *
 * @param {World} self - Cucumber World object
 * @returns string
 */
export async function getSystemModifierKey(self: World) {
  const os = (await self.driver.getCapabilities()).getPlatform().toUpperCase();
  if (os === "WINDOWS" || os === "LINUX") {
    return "control";
  } else if (os === "DARWIN") {
    return "command";
  } else {
    console.log(`Unknown OS type ${os}`);
    throw "failed to get system modifier key";
  }
}

/**
 * Description: Hover over an element
 * @date 12/29/2022 - 12:32:34 PM
 *
 * @param {World} self - Cucumber World object
 * @param {string} elementType - element type (id, name, xpath, class, css, link etc)
 * @param {string} typeValue - value of the element type
 * @returns Promise<void>
 */
export async function hoverOverElement(
  self: World,
  elementType: string,
  typeValue: string
) {
  try {
    await waitForElementToBeLocated(self, elementType, typeValue, 6);
    debugLog(`hovering over ${elementType} ${typeValue}`);
    const element = await self.driver.findElement(
      elementLocator(elementType, typeValue)
    );
    await self.driver
      .actions({ async: false, bridge: true })
      .move({ origin: element })
      .perform();
  } catch (error) {
    console.error(`Failed to hover over element ${elementType} ${typeValue}`);
    throw error;
  }
}

export async function setWindowSize(
  self: World,
  width: number,
  height: number
) {
  await self.driver
    .manage()
    .window()
    .setRect({ x: 0, y: 0, width: width, height: height });
}

export async function maximizeWindow(self: World) {
  await self.driver.manage().window().maximize();
}

export async function dragAndDrop(
  self: World,
  sourceType: string,
  sourceTypeValue: string,
  targetType: string,
  targetTypeValue: string
) {
  debugLog(
    `dragging ${sourceType} ${sourceTypeValue} to ${targetType} ${targetTypeValue}`
  );

  const sourceElement = await self.driver.findElement(
    elementLocator(sourceType, sourceTypeValue)
  );
  const targetElement = await self.driver.findElement(
    elementLocator(targetType, targetTypeValue)
  );

  // Create an Actions instance
  const actions = self.driver.actions({ async: false, bridge: true });

  // Perform the drag and drop
  //await actions.dragAndDrop(sourceElement, targetElement).perform();

  // html-dnd workaround
  await self.driver.executeScript(
    dragAndDropScript.code,
    sourceElement,
    targetElement
  );
}

/**
 * switch to the context of an iFrame in order to perform actions on elements within it.
 *
 * @export
 * @async
 * @param {World} self - Cucumber World object
 * @param {string} iframeType - iframe type (id, name, xpath, class, css, link etc)
 * @param {string} typeValue - value of the iframe type
 */
export async function switchToIframe(
  self: World,
  iframeType: string,
  typeValue: string
) {
  await self.driver
    .switchTo()
    .frame(
      await self.driver.findElement(elementLocator(iframeType, typeValue))
    );
}

/**
 * switch to the parent iFrame
 *
 * @export
 * @async
 * @param {World} self
 */
export async function switchToParentIframe(self: World) {
  await self.driver.switchTo().parentFrame();
}

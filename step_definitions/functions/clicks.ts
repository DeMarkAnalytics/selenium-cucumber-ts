import { World } from "../world";
import { elementLocator, SelectorType } from "./elements";
import { waitForElementToBeClickable, duration } from "./progress";
import createLogger from "./debugLogs";
import { WebElement } from "selenium-webdriver";
let debugLog = createLogger("clicks");

/**
 * Description: Clicks on an element
 * @date 12/29/2022 - 11:53:07 AM
 *
 * @param {World} self - Cucumber World object
 * @param {string} elementType - element type (id, name, xpath, etc)
 * @param {string} typeValue - value of the element type
 * @param {number|string} [waitSeconds=6] - time to wait for the element to be located
 * @returns <Promise<void>
 */
export async function click(
  self: World,
  elementType: string | SelectorType,
  typeValue: string,
  waitSeconds: number | string = "6",
) {
  const waitSecondsNum = parseInt(waitSeconds.toString());
  const startTime = Date.now();

  debugLog(
    self,
    `clicking on ${elementType} ${typeValue} after waiting up to ${waitSeconds} seconds for it to be clickable`,
  );
  await waitForElementToBeClickable(
    self,
    elementType,
    typeValue,
    waitSecondsNum,
  );

  try {
    // give a little time for the element to be located in case animations or other things are happening
    await self.driver
      .findElement(elementLocator(elementType, typeValue))
      .click();
  } catch (error) {
    error.message =
      error.message + `could not click on ${elementType} ${typeValue}`;
    throw error;
  }

  duration(self, "click", startTime, waitSecondsNum);
}

/**
 * Description: Clicks on an element if it exists within the given time. Don't error if it doesn't exist.
 * @date 12/29/2022 - 2:40:05 PM
 *
 * @export
 * @async
 * @param {World} self - Cucumber World object
 * @param {string|SelectorType} elementType - element type (id, name, xpath, etc)
 * @param {string} typeValue - value of the element type
 * @param {number|string} [waitSeconds="6"] - number of seconds to wait for the element to be located
 * @returns Promise<void>
 */
export async function clickIfExists(
  self: World,
  elementType: string | SelectorType,
  typeValue: string,
  waitSeconds: number | string = "6",
) {
  const startTime = Date.now();
  try {
    await waitForElementToBeClickable(
      self,
      elementType,
      typeValue,
      parseInt(waitSeconds.toString()),
    );

    debugLog(
      self,
      `looking for ${waitSeconds} seconds to click on ${elementType} ${typeValue}`,
    );
    await click(self, elementType as SelectorType, typeValue);
  } catch (error) {
    debugLog(self, `didn't find ${elementType} ${typeValue}`);
  }
  duration(self, "clickIfExists", startTime, parseInt(waitSeconds.toString()));
}

/**
 * Description: Double clicks on an element
 * @date 12/29/2022 - 11:54:12 AM
 *
 * @param {World} self - Cucumber World object
 * @param {string} elementType - element type (id, name, xpath, etc)
 * @param {string} typeValue - value of the element type
 * @param {number|string} [waitSeconds="6"] - number of seconds to wait for the element to be located
 * @returns <Promise<void>
 */
export async function doubleClick(
  self: World,
  elementType: string | SelectorType,
  typeValue: string,
  waitSeconds: number | string = "6",
) {
  const startTime = Date.now();
  try {
    await waitForElementToBeClickable(
      self,
      elementType,
      typeValue,
      parseInt(waitSeconds.toString()),
    );

    debugLog(self, `doubleClicking on ${elementType} ${typeValue}`);
    let doubleClickElement = await self.driver.findElement(
      elementLocator(elementType, typeValue),
    );
    await self.driver.actions().doubleClick(doubleClickElement).perform();
  } catch (error) {
    error.message = error.message`could not doubleClick on ${elementType} ${typeValue}`;
    throw error;
  }
  duration(self, "doubleClick", startTime, parseInt(waitSeconds.toString()));
}

/**
 * Description: Right clicks on an element
 * @date 12/29/2022 - 11:54:51 AM
 *
 * @param {World} self - Cucumber World object
 * @param {string} elementType - element type (id, name, xpath, etc)
 * @param {string} typeValue - value of the element type
 * @param {number|string} [waitSeconds="6"] - number of seconds to wait for the element to be located
 * @returns <Promise<void>
 */
export async function rightClick(
  self: World,
  elementType: string | SelectorType,
  typeValue: string,
  waitSeconds: number | string = "6",
) {
  const startTime = Date.now();
  try {
    await waitForElementToBeClickable(
      self,
      elementType,
      typeValue,
      parseInt(waitSeconds.toString()),
    );

    debugLog(self, `rightClicking on ${elementType} ${typeValue}`);
    let rightClickElement = await self.driver.findElement(
      elementLocator(elementType, typeValue),
    );
    await self.driver.actions().contextClick(rightClickElement).perform();
  } catch (error) {
    error.message =
      error.message + `could not rightClick on ${elementType} ${typeValue}`;
    throw error;
  }
  duration(self, "rightClick", startTime, parseInt(waitSeconds.toString()));
}

/**
 * Description: Clicks on an element forcefully
 * @date 12/29/2022 - 11:55:33 AM
 *
 * @param {World} self - Cucumber World object
 * @param {string|SelectorType} elementType - element type (id, name, xpath, etc)
 * @param {string} typeValue - value of the element type
 * @param {number|string} [waitSeconds="6"] - number of seconds to wait for the element to be located
 * @returns <Promise<void>
 */
export async function clickForcefully(
  self: World,
  elementType: string | SelectorType,
  typeValue: string,
  waitSeconds: number | string = "6",
) {
  const startTime = Date.now();
  try {
    await waitForElementToBeClickable(
      self,
      elementType,
      typeValue,
      parseInt(waitSeconds.toString()),
    );

    debugLog(self, `clicking forcefully on ${elementType} ${typeValue}`);
    let forceClickElement = await self.driver.findElement(
      elementLocator(elementType, typeValue),
    );
    await self.driver.executeScript("arguments[0]click();", forceClickElement);
  } catch (error) {
    error.message =
      error.message +
      `could not click forcefully on ${elementType} ${typeValue}`;
    throw error;
  }
  duration(
    self,
    "clickForcefully",
    startTime,
    parseInt(waitSeconds.toString()),
  );
}

/**
 * Description: Clicks on an element using javascript
 * @date 12/29/2022 - 11:59:50 AM
 *
 * @param {World} self - Cucumber World object
 * @param {string|SelectorType} elementType - element type (id, name, xpath, etc)
 * @param {string} typeValue - value of the element type
 * @param {number|string} [waitSeconds="6"] - number of seconds to wait for the element to be located
 * @returns <Promise<void>
 */
export async function submit(
  self: World,
  elementType: string | SelectorType,
  typeValue: string,
  waitSeconds: number | string = "6",
) {
  const startTime = Date.now();
  try {
    await waitForElementToBeClickable(
      self,
      elementType,
      typeValue,
      parseInt(waitSeconds.toString()),
    );

    debugLog(self, `submitting ${elementType} ${typeValue}`);
    await self.driver
      .findElement(elementLocator(elementType, typeValue))
      .submit();
  } catch (error) {
    error.message =
      error.message + `could not submit ${elementType} ${typeValue}`;
    throw error;
  }
  duration(self, "submit", startTime, parseInt(waitSeconds.toString()));
}

export async function mouseOver(self: World, element: WebElement) {
  const actions = self.driver.actions({ async: false, bridge: true });
  await actions.move({ origin: element }).perform();
}

export async function mouseOverAndClick(self: World, element: WebElement) {
  const actions = self.driver.actions({ async: false, bridge: true });
  await actions.move({ origin: element }).click().perform();
}

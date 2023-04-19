import { World } from "../world";
import { elementLocator } from "./elements";
import { waitForElementToBeLocated, waitForElementToDisplay } from "./progress";
let debugLog = require("debug")("clicks");

/**
 * Description: Clicks on an element
 * @date 12/29/2022 - 11:53:07 AM
 *
 * @param {World} self - Cucumber World object
 * @param {string} elementType - element type (id, name, xpath, etc)
 * @param {string} typeValue - value of the element type
 * @param {string} [waitSeconds=6] - time to wait for the element to be located
 * @returns <Promise<void>
 */
export async function click(self: World, elementType: string, typeValue: string, waitSeconds = "6") {
  await waitForElementToBeLocated(self, elementType, typeValue, parseInt(waitSeconds));
  await waitForElementToDisplay(self, elementType, typeValue, parseInt(waitSeconds));
  debugLog(`clicking on ${elementType} ${typeValue}`);
  try {
    // give a little time for the element to be located in case animations or other things are happening
    await self.driver.findElement(elementLocator(elementType, typeValue)).click();
  } catch (error) {
    console.error(`could not click on ${elementType} ${typeValue}`);
    throw error;
  }
}

/**
 * Description: Clicks on an element if it exists within the given time. Don't error if it doesn't exist.
 * @date 12/29/2022 - 2:40:05 PM
 *
 * @export
 * @async
 * @param {World} self - Cucumber World object
 * @param {string} elementType - element type (id, name, xpath, etc)
 * @param {string} typeValue - value of the element type
 * @param {string} [waitSeconds="6"] - number of seconds to wait for the element to be located
 * @returns Promise<void>
 */
export async function clickIfExists(self: World, elementType: string, typeValue: string, waitSeconds: string = "6") {
  try {
    await waitForElementToBeLocated(self, elementType, typeValue, parseInt(waitSeconds));
    await waitForElementToDisplay(self, elementType, typeValue, parseInt(waitSeconds));

    debugLog(`looking for ${waitSeconds} seconds to click on ${elementType} ${typeValue}`);
    await click(self, elementType, typeValue);
  } catch (error) {
    debugLog(`didn't find ${elementType} ${typeValue}`);
  }
}

/**
 * Description: Double clicks on an element
 * @date 12/29/2022 - 11:54:12 AM
 *
 * @param {World} self - Cucumber World object
 * @param {string} elementType - element type (id, name, xpath, etc)
 * @param {string} typeValue - value of the element type
 * @param {string} [waitSeconds="6"] - number of seconds to wait for the element to be located
 * @returns <Promise<void>
 */
export async function doubleClick(self: World, elementType: string, typeValue: string, waitSeconds = "6") {
  try {
    await waitForElementToBeLocated(self, elementType, typeValue, parseInt(waitSeconds));
    await waitForElementToDisplay(self, elementType, typeValue, parseInt(waitSeconds));

    debugLog(`doubleClicking on ${elementType} ${typeValue}`);
    let doubleClickElement = await self.driver.findElement(elementLocator(elementType, typeValue));
    await self.driver.actions().doubleClick(doubleClickElement).perform();
  } catch (error) {
    console.error(`could not doubleClick on ${elementType} ${typeValue}`);
    throw error;
  }
}

/**
 * Description: Right clicks on an element
 * @date 12/29/2022 - 11:54:51 AM
 *
 * @param {World} self - Cucumber World object
 * @param {string} elementType - element type (id, name, xpath, etc)
 * @param {string} typeValue - value of the element type
 * @param {string} [waitSeconds="6"] - number of seconds to wait for the element to be located
 * @returns <Promise<void>
 */
export async function rightClick(self: World, elementType: string, typeValue: string, waitSeconds = "6") {
  try {
    await waitForElementToBeLocated(self, elementType, typeValue, parseInt(waitSeconds));
    await waitForElementToDisplay(self, elementType, typeValue, parseInt(waitSeconds));

    debugLog(`rightClicking on ${elementType} ${typeValue}`);
    let rightClickElement = await self.driver.findElement(elementLocator(elementType, typeValue));
    await self.driver.actions().contextClick(rightClickElement).perform();
  } catch (error) {
    console.error(`could not rightClick on ${elementType} ${typeValue}`);
    throw error;
  }
}

/**
 * Description: Clicks on an element forcefully
 * @date 12/29/2022 - 11:55:33 AM
 *
 * @param {World} self - Cucumber World object
 * @param {string} elementType - element type (id, name, xpath, etc)
 * @param {string} typeValue - value of the element type
 * @param {string} [waitSeconds="6"] - number of seconds to wait for the element to be located
 * @returns <Promise<void>
 */
export async function clickForcefully(self: World, elementType: string, typeValue: string, waitSeconds = "6") {
  try {
    await waitForElementToBeLocated(self, elementType, typeValue, parseInt(waitSeconds));
    await waitForElementToDisplay(self, elementType, typeValue, parseInt(waitSeconds));

    debugLog(`clicking forcefully on ${elementType} ${typeValue}`);
    let forceClickElement = await self.driver.findElement(elementLocator(elementType, typeValue));
    await self.driver.executeScript("arguments[0]click();", forceClickElement);
  } catch (error) {
    console.error(`could not click forcefully on ${elementType} ${typeValue}`);
    throw error;
  }
}

/**
 * Description: Clicks on an element using javascript
 * @date 12/29/2022 - 11:59:50 AM
 *
 * @param {World} self - Cucumber World object
 * @param {string} elementType - element type (id, name, xpath, etc)
 * @param {string} typeValue - value of the element type
 * @param {string} [waitSeconds="6"] - number of seconds to wait for the element to be located
 * @returns <Promise<void>
 */
export async function submit(self: World, elementType: string, typeValue: string, waitSeconds = "6") {
  try {
    await waitForElementToBeLocated(self, elementType, typeValue, parseInt(waitSeconds));
    await waitForElementToDisplay(self, elementType, typeValue, parseInt(waitSeconds));

    debugLog(`submitting ${elementType} ${typeValue}`);
    await self.driver.findElement(elementLocator(elementType, typeValue)).submit();
  } catch (error) {
    console.error(`could not submit ${elementType} ${typeValue}`);
    throw error;
  }
}

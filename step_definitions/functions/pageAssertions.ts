import assert from "assert";
import { World } from "../world";
import * as image from "./images";
import { elementLocator, getElementAttribute, getElementText } from "./elements";
import { waitForElementToBeLocated } from "./progress";
let debugLog = require("debug")("assertions");

/**
 * Description: Gets the page title
 * @date 12/29/2022 - 1:02:16 PM
 *
 * @param {World} self
 * @returns Promise<string>
 */
export async function getPageTitle(self: World) {
  return await self.driver.getTitle();
}

/**
 * Description: Checks the page title against an expected value, throws an error if it does not match.
 * @date 12/29/2022 - 1:02:48 PM
 *
 * @param {World} self - Cucumber World object
 * @param {string} expected - expected page title
 * @param {(string | null)} [negate=null]
 * @returns Promise<void>
 */
export async function checkTitle(self: World, expected: string, negate: string | null = null) {
  const pageTitle = await getPageTitle(self);
  if (negate === "" || negate === null) {
    debugLog(`checking "${pageTitle}" is equal to "${expected}"`);
    assert.strictEqual(pageTitle, expected);
  } else {
    debugLog(`checking "${pageTitle}" is not equal to "${expected}"`);
    assert.doesNotMatch(pageTitle, new RegExp(`^${escapeRegExp(expected)}$`));
  }
}

/**
 * Description: Checks the page title against an expected value, throws an error if it does not match.
 * @date 12/29/2022 - 1:05:13 PM
 *
 * @param {World} self
 * @param {string} expected
 * @param {(string | null)} [negate=null]
 * @returns Promise<void>
 */
export async function checkPartialTitle(self: World, expected: string, negate: string | null = null) {
  const pageTitle = await getPageTitle(self);

  if (negate === "" || negate === null) {
    debugLog(`checking ${pageTitle} contains ${expected}`);
    assert.match(pageTitle, new RegExp(`.*${escapeRegExp(expected)}.*`));
  } else {
    debugLog(`checking ${pageTitle} does not contain ${expected}`);
    assert.doesNotMatch(pageTitle, new RegExp(`.*${escapeRegExp(expected)}.*`));
  }
}

/**
 * Description: Checks the element text to see if it equals an expected value, throws an error if it does not match.
 * @date 12/29/2022 - 1:08:55 PM
 *
 * @param {World} self - Cucumber World object
 * @param {string} elementType - element type (id, name, xpath, class, css, link etc)
 * @param {string} typeValue - element value
 * @param {string} expectedText - expected text
 * @param {(string | null)} [negate=null] - negate the check
 * @returns Promise<void>
 */
export async function checkElementText(self: World, elementType: string, typeValue: string, expectedText: string, negate: string | null = null) {
  await waitForElementToBeLocated(self, elementType, typeValue, 4);
  debugLog(`checking text of ${elementType} ${typeValue}, ${expectedText}`);
  const elementText = await getElementText(self, elementType, typeValue);

  if (negate === "" || negate === null) {
    assert.strictEqual(elementText, expectedText);
  } else {
    assert.doesNotMatch(elementText, new RegExp(`^${escapeRegExp(expectedText)}$`));
  }
}

/**
 * Description: Checks the element text to see if it contains an expected value, throws an error if it does not match.
 * @date 12/29/2022 - 1:08:55 PM
 *
 * @param {World} self - Cucumber World object
 * @param {string} elementType - element type (id, name, xpath, class, css, link etc)
 * @param {string} typeValue - element value
 * @param {string} expectedText - expected text
 * @param {(string | null)} [negate=null] - negate the check
 * @returns Promise<void>
 */
export async function checkElementPartialText(self: World, elementType: string, typeValue: string, expectedText: string, negate: string | null = null) {
  await waitForElementToBeLocated(self, elementType, typeValue, 4);
  debugLog(`checking text of ${elementType} ${typeValue}, ${expectedText}`);
  const elementText = await getElementText(self, elementType, typeValue);

  if (negate === "" || negate === null) {
    assert.match(elementText, new RegExp(`.*${escapeRegExp(expectedText)}.*`));
  } else {
    assert.doesNotMatch(elementText, new RegExp(`.*${escapeRegExp(expectedText)}.*`));
  }
}

/**
 * Description: Checks the element attribute to see if it equals an expected value, throws an error if it does not match.
 * @date 12/29/2022 - 1:11:56 PM
 *
 * @param {World} self - Cucumber World object
 * @param {string} elementType - element type (id, name, xpath, class, css, link etc)
 * @param {string} typeValue - element value
 * @param {string} hasType - element attribute type (id, name, xpath, class, css, link etc)
 * @param {string} hasTypeValue - element attribute value
 * @param {(string | null)} [negate=null] - negate the check
 * @returns Promise<void>
 */
export async function checkElementAttribute(
  self: World,
  elementType: string,
  typeValue: string,
  hasType: string,
  hasTypeValue: string,
  negate: string | null = null
) {
  await waitForElementToBeLocated(self, elementType, typeValue, 4);
  debugLog(`checking if ${elementType} ${typeValue} has element ${hasType} ${hasTypeValue} `);
  const attributeValue = await getElementAttribute(self, elementType, typeValue, hasType);

  if (negate === "" || negate === null) {
    assert.strictEqual(attributeValue, hasTypeValue);
  } else {
    assert.strictEqual(attributeValue, null);
  }
}

/**
 * Description: checks the element enabled status throws an error if it is not.
 * @date 12/29/2022 - 1:21:39 PM
 *
 * @export
 * @async
 * @param {World} self - Cucumber World object
 * @param {string} elementType - element type (id, name, xpath, class, css, link etc)
 * @param {string} typeValue - element value
 * @param {string} status - enabled or disabled
 * @param {(string | null)} [negate=null] - negate the check
 * @returns Promise<void>
 */
export async function checkElementEnable(self: World, elementType: string, typeValue: string, status: string, negate: string | null = null) {
  await waitForElementToBeLocated(self, elementType, typeValue, 4);
  debugLog(`checking element enabled status ${elementType} ${typeValue}`);
  const elementStatus = await self.driver.findElement(elementLocator(elementType, typeValue)).isEnabled();

  if (negate === "" || negate === null) {
    if (status === "enabled") {
      assert(elementStatus);
    } else if (status === "disabled") {
      assert(!elementStatus);
    }
  } else {
    if (status === "disabled") {
      assert(elementStatus);
    } else if (status === "enabled") {
      assert(!elementStatus);
    }
  }
}

/**
 * Description: checks the element displayed status and returns true/false.  Throws an
 * error if it finds more than one of the same element.
 * @date 12/29/2022 - 1:23:14 PM
 *
 * @export
 * @async
 * @param {World} self
 * @param {string} elementType
 * @param {string} typeValue
 * @returns boolean
 */
export async function isElementDisplayed(self: World, elementType: string, typeValue: string) {
  debugLog(`checking element displayed status ${elementType} ${typeValue}`);
  try {
    await waitForElementToBeLocated(self, elementType, typeValue, 4);
  } catch (err) {
    debugLog(`element ${elementType} ${typeValue} not found`);
    return false;
  }

  let elements = await self.driver.findElements(elementLocator(elementType, typeValue));
  if (elements.length === 1) {
    debugLog(`element ${elementType} ${typeValue} is displayed`);
    return elements[0].isDisplayed();
  } else if (elements.length === 0) {
    debugLog(`element ${elementType} ${typeValue} is not displayed`);
    return false;
  } else {
    throw new Error(`Found more than one element for ${elementType} ${typeValue}`);
  }
}

/**
 * Description: checks the element presence in the document throws an
 * error if it is not
 * @date 12/29/2022 - 1:23:14 PM
 *
 * @export
 * @async
 * @param {World} self
 * @param {string} elementType
 * @param {string} typeValue
 * @returns Promise<void>
 */
export async function checkElementPresence(self: World, elementType: string, typeValue: string, negate: string | null = null) {
  debugLog(`negate: "${negate}"`);
  if (negate === "" || negate === null) {
    debugLog(`checking if element is present: ${elementType} ${typeValue}`);
    assert(await isElementDisplayed(self, elementType, typeValue));
  } else {
    debugLog(`checking that element is not present: ${elementType} ${typeValue}`);
    // TODO: how to catch error here when elment doesn't exist
    assert(!(await isElementDisplayed(self, elementType, typeValue)));
  }
}

/**
 * Description: evaluates the checkbox state throws an error if it is not checked.
 * @date 12/29/2022 - 1:28:42 PM
 *
 * @param {World} self - Cucumber World object
 * @param {string} elementType - element type (id, name, xpath, class, css, link etc)
 * @param {string} typeValue - element value
 * @param {string} state - checked or unchecked
 * @returns Promise<void>
 */
export async function assertCheckboxChecked(self: World, elementType: string, typeValue: string, state: string) {
  await waitForElementToBeLocated(self, elementType, typeValue, 4);
  debugLog(`checking checkbox status ${elementType} ${typeValue}`);

  if (state === "checked") {
    assert(await (await self.driver.findElement(elementLocator(elementType, typeValue))).isSelected());
  } else if (state === "unchecked") {
    assert(!(await (await self.driver.findElement(elementLocator(elementType, typeValue))).isSelected()));
  }
}

/**
 * Description: evaluates the radiobutton state throws an error if it is not selected.
 * @date 12/29/2022 - 1:28:42 PM
 *
 * @param {World} self - Cucumber World object
 * @param {string} elementType - element type (id, name, xpath, class, css, link etc)
 * @param {string} typeValue - element value
 * @param {string} state - checked or unchecked
 * @returns Promise<void>
 */
export async function assertRadioButtonSelected(self: World, elementType: string, typeValue: string, state: string) {
  await waitForElementToBeLocated(self, elementType, typeValue, 4);
  debugLog(`checking radio button status ${elementType} ${typeValue}`);

  if (state === "selected") {
    assert(await self.driver.findElement(elementLocator(elementType, typeValue)).isSelected());
  } else if (state === "unselected") {
    assert(!(await self.driver.findElement(elementLocator(elementType, typeValue)).isSelected()));
  }
}

/**
 * Description: evaluates the dropdown option state throws an error if it is not selected.
 * @date 12/29/2022 - 1:28:42 PM
 *
 * @param {World} self - Cucumber World object
 * @param {string} elementType - element type (id, name, xpath, class, css, link etc)
 * @param {string} typeValue - element value
 * @param {string} state - checked or unchecked
 * @returns Promise<void>
 */
export async function assertOptionFromDropDownSelected(
  self: World,
  elementType: string,
  typeValue: string,
  option: string,
  optionAttribute: string,
  state: string
) {
  await waitForElementToBeLocated(self, elementType, typeValue, 4);
  debugLog(`checking option from dropdown status ${elementType} ${typeValue}`);

  if (state === "selected") {
    assert(await self.driver.findElement(elementLocator(elementType, typeValue)).isSelected());
  } else if (state === "unselected") {
    assert(!(await self.driver.findElement(elementLocator(elementType, typeValue)).isSelected()));
  }
}

/**
 * Description: evaluates the radiobutton option state throws an error if it is not selected.
 * @date 12/29/2022 - 1:28:42 PM
 *
 * @param {World} self - Cucumber World object
 * @param {string} elementType - element type (id, name, xpath, class, css, link etc)
 * @param {string} typeValue - element value
 * @param {string} option - the option to check
 * @param {string} optionAttribute - the attribute of the option to check
 * @param {string} state - checked or unchecked
 * @returns Promise<void>
 */
export async function assertOptionFromRadioButtonGroupSelected(
  self: World,
  elementType: string,
  typeValue: string,
  option: string,
  optionAttribute: string,
  state: string
) {
  await waitForElementToBeLocated(self, elementType, typeValue, 4);
  debugLog(`checking option from radio group status ${elementType} ${typeValue}`);
  //how to navigate radio buttons???
  return "pending";
}

export async function isImageSimilar(self: World, actualImageType: string, actualImageName: string, expectedImageType: string, expectedImageName: string) {
  debugLog("comparing images");
  await image.compare(self, actualImageType, actualImageName, expectedImageType, expectedImageName);
}

/**
 * Description: check if the alert text is the same as the expected text, throws an error if not
 * @date 12/29/2022 - 1:47:16 PM
 *
 * @param {World} self
 * @param {string} text
 * @returns Promise<void>
 */
export async function checkAlertText(self: World, text: string) {
  let actualText = await self.driver.switchTo().alert().getText();
  assert.strictEqual(actualText, text);
}

// this is to take a string with special characters and escape them so they are not interpreted by regex
function escapeRegExp(text: string) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

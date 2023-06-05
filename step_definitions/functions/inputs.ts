import { World } from "../world";
import { SelectorType, elementLocator } from "./elements";
import { Key } from "selenium-webdriver";
let debugLog = require("debug")("inputs");

/**
 * Description: Enters text into an element
 * @date 12/29/2022 - 12:20:18 PM
 *
 * @param {World} self - Cucumber World object
 * @param {string | SelectorType} elementType - element type (id, name, xpath, etc)
 * @param {string} typeValue - value of the element type
 * @param {string} text - text to enter into the element
 * @returns Promise<void>
 */
export async function enterText(
  self: World,
  elementType: string | SelectorType,
  typeValue: string,
  text: string
) {
  debugLog(`Entering text into ${elementType} ${typeValue}`);
  await (await self.driver)
    .findElement(elementLocator(elementType, typeValue))
    .sendKeys(text);
}

/**
 * Description: Clears text from an element
 * @date 12/29/2022 - 12:21:21 PM
 *
 * @param {World} self - Cucumber World object
 * @param {string | SelectorType} elementType - element type (id, name, xpath, etc)
 * @param {string} typeValue - value of the element type
 * @returns Promise<void>
 */
export async function clearText(
  self: World,
  elementType: string | SelectorType,
  typeValue: string
) {
  debugLog(`clearing text from ${elementType} ${typeValue}`);
  await self.driver.findElement(elementLocator(elementType, typeValue)).clear();
  // clear() doesn't work in all browsers
  // https://stackoverflow.com/questions/7732125/clear-text-from-textarea-with-selenium
  await self.driver
    .findElement(elementLocator(elementType, typeValue))
    .sendKeys(Key.CONTROL + "a");
  await self.driver
    .findElement(elementLocator(elementType, typeValue))
    .sendKeys(Key.DELETE);
}

/**
 * Description: Selects an option from a dropdown
 * @date 12/29/2022 - 12:21:53 PM
 *
 * @export
 * @async
 * @param {World} self
 * @param {string} elementType
 * @param {string | SelectorType} typeValue
 * @param {(string | number)} option
 * @param {string} [optionType="value"]
 * @returns promise<void>
 */
// by = index|text
export async function selectOptionFromDropdown(
  self: World,
  elementType: string | SelectorType,
  typeValue: string,
  option: string | number,
  optionType: string = "value"
) {
  debugLog(
    `selecting option ${option} from dropdown ${elementType} ${typeValue}`
  );
  const xpathOption =
    optionType !== "index" ? `@${optionType}=${option}` : option;
  let dropdown = await self.driver.findElement(
    elementLocator(elementType, typeValue)
  );
  await dropdown.click();
  let chosenOption = await self.driver.findElement(
    elementLocator(
      "xpath",
      `//select[@${elementType}=\'${typeValue}\']/option[${xpathOption}]`
    )
  );
  await chosenOption.click();
}

/**
 * unimplemented
 * Description: Selects all options from a multiselect dropdown
 * @date 12/29/2022 - 12:25:47 PM
 *
 * @param {World} self - Cucumber World object
 * @param {string | SelectorType} elementType - element type (id, name, xpath, etc)
 * @param {string} typeValue - value of the element type
 * @returns Promise<void>
 */
export async function selectAllOptionsFromMultiselectDropdown(
  self: World,
  elementType: string | SelectorType,
  typeValue: string
) {
  debugLog(`selecting all options from dropdown ${elementType} ${typeValue}`);
  let dropdown = await self.driver.findElement(
    elementLocator(elementType, typeValue)
  );
  //TODO: finish dropdown interaction
  return "pending";
}

/**
 * unimplemented
 * Description: Unselects all options from a multiselect dropdown
 * @date 12/29/2022 - 12:25:47 PM
 *
 * @param {World} self - Cucumber World object
 * @param {string} elementType - element type (id, name, xpath, etc)
 * @param {string} typeValue - value of the element type
 * @returns Promise<void>
 */
export async function unselectAllOptionsFromMultiselectDropdown(
  self: World,
  elementType: string | SelectorType,
  typeValue: string
) {
  debugLog(`unselecting all options from dropdown ${elementType} ${typeValue}`);
  let dropdown = await self.driver.findElement(
    elementLocator(elementType, typeValue)
  );
  //TODO: finish dropdown interaction
  return "pending";
}

/**
 * unimplemented
 * Description: Checks a checkbox
 * @date 12/29/2022 - 12:25:47 PM
 *
 * @param {World} self - Cucumber World object
 * @param {string | SelectorType} elementType - element type (id, name, xpath, etc)
 * @param {string} typeValue - value of the element type
 * @returns Promise<void>
 */
export async function checkCheckbox(
  self: World,
  elementType: string | SelectorType,
  typeValue: string
) {
  debugLog(`checking checkbox ${elementType} ${typeValue}`);
  let checkbox = await self.driver.findElement(
    elementLocator(elementType, typeValue)
  );
  if (!checkbox.isSelected()) {
    await checkbox.click();
  }
  //TODO: need checkbox checking test
  return "pending";
}

/**
 * unimplemented
 * Description: Unchecks a checkbox
 * @date 12/29/2022 - 12:25:47 PM
 *
 * @param {World} self - Cucumber World object
 * @param {string | SelectorType} elementType - element type (id, name, xpath, etc)
 * @param {string} typeValue - value of the element type
 * @returns Promise<void>
 */
export async function uncheckCheckbox(
  self: World,
  elementType: string | SelectorType,
  typeValue: string
) {
  debugLog(`unchecking checkbox ${elementType} ${typeValue}`);
  let checkbox = await self.driver.findElement(
    elementLocator(elementType, typeValue)
  );
  if (checkbox.isSelected()) {
    await checkbox.click();
  }
  //TODO: need checkbox checking test this may not work
  return "pending";
}

/**
 * unimplemented
 * Description: Toggles a checkbox
 * @date 12/29/2022 - 12:25:47 PM
 *
 * @param {World} self - Cucumber World object
 * @param {string | SelectorType} elementType - element type (id, name, xpath, etc)
 * @param {string} typeValue - value of the element type
 * @returns Promise<void>
 */
export async function toggleCheckbox(
  self: World,
  elementType: string | SelectorType,
  typeValue: string
) {
  debugLog(`toggle checkbox ${elementType} ${typeValue}`);
  let checkbox = await self.driver.findElement(
    elementLocator(elementType, typeValue)
  );
  await checkbox.click();
  //TODO: need checkbox checking test
  return "pending";
}

/**
 * unimplemented
 * Description: Selects a radio button
 * @date 12/29/2022 - 12:25:47 PM
 *
 * @param {World} self - Cucumber World object
 * @param {string | SelectorType} elementType - element type (id, name, xpath, etc)
 * @param {string} typeValue - value of the element type
 * @returns Promise<void>
 */
export async function selectRadioButton(
  self: World,
  elementType: string | SelectorType,
  typeValue: string
) {
  debugLog(`select Radio button ${elementType} ${typeValue}`);
  let radioButton = await self.driver.findElement(
    elementLocator(elementType, typeValue)
  );
  if (!radioButton.isSelected()) {
    await radioButton.click();
  }
  //TODO: need radioButton checking test this may not work
  return "pending";
}

/**
 * unimplemented
 * Description: Unselects a radio button
 * @date 12/29/2022 - 12:25:47 PM
 *
 * @param {World} self - Cucumber World object
 * @param {string | SelectorType} elementType - element type (id, name, xpath, etc)
 * @param {string} typeValue - value of the element type
 * @returns Promise<void>
 */
export async function unselectRadioButton(
  self: World,
  elementType: string | SelectorType,
  typeValue: string
) {
  debugLog(`unselect Radio button ${elementType} ${typeValue}`);
  let radioButton = await self.driver.findElement(
    elementLocator(elementType, typeValue)
  );
  if (radioButton.isSelected()) {
    await radioButton.click();
  }
  //TODO: need radioButton checking test this may not work
  return "pending";
}

/**
 * unimplemented
 * Description: Selects an option from a radio button group
 * @date 12/29/2022 - 12:25:47 PM
 *
 * @param {World} self - Cucumber World object
 * @param {string | SelectorType} elementType - element type (id, name, xpath, etc)
 * @param {string} typeValue - value of the element type
 * @param {string} option - option to select
 * @returns Promise<void>
 */
export async function selectOptionFromRadioButtonGroup(
  self: World,
  elementType: string | SelectorType,
  typeValue: string,
  option: string
) {
  debugLog(`select Radio button ${elementType} ${typeValue}`);
  let radioButtonGroup = await self.driver.findElement(
    elementLocator(elementType, typeValue)
  );
  //TODO: need radioButton interaction
  return "pending";
}

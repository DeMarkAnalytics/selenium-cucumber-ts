import { World } from "../world";
import { elementLocator } from "./elements";
import { Key } from "selenium-webdriver";
let debugLog = require("debug")("inputs");

export async function enterText(self: World, elementType: string, typeValue: string, text: string) {
  debugLog(`Entering text into ${elementType} ${typeValue}`);
  await (await self.driver).findElement(elementLocator(elementType, typeValue)).sendKeys(text);
}

export async function clearText(self: World, elementType: string, typeValue: string) {
  debugLog(`clearing text from ${elementType} ${typeValue}`);
  await self.driver.findElement(elementLocator(elementType, typeValue)).clear();
  // clear() doesn't work in all browsers
  // https://stackoverflow.com/questions/7732125/clear-text-from-textarea-with-selenium
  await self.driver.findElement(elementLocator(elementType, typeValue)).sendKeys(Key.CONTROL + "a");
  await self.driver.findElement(elementLocator(elementType, typeValue)).sendKeys(Key.DELETE);
}

// by = index|text
export async function selectOptionFromDropdown(self: World, elementType: string, typeValue: string, option: string | number, optionType: string = "value") {
  debugLog(`selecting option ${option} from dropdown ${elementType} ${typeValue}`);
  const xpathOption = optionType !== "index" ? `@${optionType}=${option}` : option;
  let dropdown = await self.driver.findElement(elementLocator(elementType, typeValue));
  dropdown.click();
  let chosenOption = await self.driver.findElement(elementLocator("xpath", `//select[@${elementType}=\'${typeValue}\']/option[${xpathOption}]`));
  chosenOption.click();
}

export async function selectAllOptionsFromMultiselectDropdown(self: World, elementType: string, typeValue: string) {
  debugLog(`selecting all options from dropdown ${elementType} ${typeValue}`);
  let dropdown = await self.driver.findElement(elementLocator(elementType, typeValue));
  //TODO: finish dropdown interaction
}

export async function unselectAllOptionsFromMultiselectDropdown(self: World, elementType: string, typeValue: string) {
  debugLog(`unselecting all options from dropdown ${elementType} ${typeValue}`);
  let dropdown = await self.driver.findElement(elementLocator(elementType, typeValue));
  //TODO: finish dropdown interaction
}

export async function checkCheckbox(self: World, elementType: string, typeValue: string) {
  debugLog(`checking checkbox ${elementType} ${typeValue}`);
  let checkbox = await self.driver.findElement(elementLocator(elementType, typeValue));
  if (!checkbox.isSelected()) {
    checkbox.click();
  }
  //TODO: need checkbox checking test
}

export async function uncheckCheckbox(self: World, elementType: string, typeValue: string) {
  debugLog(`unchecking checkbox ${elementType} ${typeValue}`);
  let checkbox = await self.driver.findElement(elementLocator(elementType, typeValue));
  if (checkbox.isSelected()) {
    checkbox.click();
  }
  //TODO: need checkbox checking test this may not work
}

export async function toggleCheckbox(self: World, elementType: string, typeValue: string) {
  debugLog(`toggle checkbox ${elementType} ${typeValue}`);
  let checkbox = await self.driver.findElement(elementLocator(elementType, typeValue));
  checkbox.click();
  //TODO: need checkbox checking test
}

export async function selectRadioButton(self: World, elementType: string, typeValue: string) {
  debugLog(`select Radio button ${elementType} ${typeValue}`);
  let radioButton = await self.driver.findElement(elementLocator(elementType, typeValue));
  if (!radioButton.isSelected()) {
    radioButton.click();
  }
  //TODO: need raidobutton checking test this may not work
}

export async function unselectRadioButton(self: World, elementType: string, typeValue: string) {
  debugLog(`unselect Radio button ${elementType} ${typeValue}`);
  let radioButton = await self.driver.findElement(elementLocator(elementType, typeValue));
  if (radioButton.isSelected()) {
    radioButton.click();
  }
  //TODO: need raidobutton checking test this may not work
}

export async function selectOptionFromRadioButtonGroup(self: World, elementType: string, typeValue: string, option: string) {
  debugLog(`select Radio button ${elementType} ${typeValue}`);
  let radioButtonGroup = await self.driver.findElement(elementLocator(elementType, typeValue));
  //TODO: need raidobutton interaction
  return "pending";
}

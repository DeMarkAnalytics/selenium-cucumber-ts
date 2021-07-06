import assert from "assert";
import { World } from "../world";
import * as image from "./images";
import { elementLocator } from "./elements";

export async function getPageTitle(self: World) {
  return await self.driver.getTitle();
}

export async function checkTitle(self: World, expected: string, negate: string) {
  const pageTitle = await getPageTitle(self);
  if (negate === null) {
    assert.strictEqual(pageTitle, expected);
  } else {
    assert.doesNotMatch(pageTitle, new RegExp(`^${escapeRegExp(expected)}$`));
  }
}

export async function checkPartialTitle(self: World, expected: string, negate: string) {
  const pageTitle = await getPageTitle(self);

  if (negate === null) {
    assert.match(pageTitle, new RegExp(`.*${escapeRegExp(expected)}.*`));
  } else {
    assert.doesNotMatch(pageTitle, new RegExp(`.*${escapeRegExp(expected)}.*`));
  }
}

export async function getElementText(self: World, elementType: string, typeValue: string) {
  return await self.driver.findElement(elementLocator(elementType, typeValue)).getText();
}

export async function checkElementText(self: World, elementType: string, typeValue: string, expectedText: string, negate: string) {
  const elementText = await getElementText(self, elementType, typeValue);

  if (negate === null) {
    assert.strictEqual(elementText, expectedText);
  } else {
    assert.doesNotMatch(elementText, new RegExp(`^${escapeRegExp(expectedText)}$`));
  }
}

export async function checkElementPartialText(self: World, elementType: string, typeValue: string, expectedText: string, negate: string) {
  const elementText = await getElementText(self, elementType, typeValue);

  if (negate === null) {
    assert.match(elementText, new RegExp(`.*${escapeRegExp(expectedText)}.*`));
  } else {
    assert.doesNotMatch(elementText, new RegExp(`.*${escapeRegExp(expectedText)}.*`));
  }
}

export async function checkElementAttribute(self: World, elementType: string, typeValue: string, hasType: string, hasTypeValue: string, negate: string) {
  const attributeValue = await getElementAttribute(self, elementType, typeValue, hasType);

  if (negate === null) {
    assert.strictEqual(attributeValue, hasTypeValue);
  } else {
    assert.strictEqual(attributeValue, null);
  }
}

export async function checkElementEnable(self: World, elementType: string, typeValue: string, status: string, negate: string) {
  const elementStatus = await self.driver.findElement(elementLocator(elementType, typeValue)).isEnabled();

  if (negate === null) {
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

export async function isElementDisplayed(self: World, elementType: string, typeValue: string) {
  return await self.driver.findElement(elementLocator(elementType, typeValue)).isDisplayed();
}

export async function checkElementPresence(self: World, elementType: string, typeValue: string, negate: string) {
  if (negate === null) {
    assert(await isElementDisplayed(self, elementType, typeValue));
  } else {
    // TODO: how to catch error here when elment doesn't exist
    assert(!(await isElementDisplayed(self, elementType, typeValue)));
  }
}

export function validateLocater(locator: string) {
  let validLocators = ["id", "class", "css", "name", "xpath"];
  if (validLocators.includes(locator)) {
    return true;
  } else {
    return false;
  }
}

export async function isCheckboxChecked(self: World, elementType: string, typeValue: string, state: string) {
  if (state === "checked") {
    assert(await (await self.driver.findElement(elementLocator(elementType, typeValue))).isSelected());
  } else if (state === "unchecked") {
    assert(!(await (await self.driver.findElement(elementLocator(elementType, typeValue))).isSelected()));
  }
}

export async function isRadioButtonSelected(self: World, elementType: string, typeValue: string, state: string) {
  if (state === "selected") {
    assert(await self.driver.findElement(elementLocator(elementType, typeValue)).isSelected());
  } else if (state === "unselected") {
    assert(!(await self.driver.findElement(elementLocator(elementType, typeValue)).isSelected()));
  }
}

export async function isOptionFromDropDownSelected(
  self: World,
  elementType: string,
  typeValue: string,
  option: string,
  optionAttribute: string,
  state: string
) {
  if (state === "selected") {
    assert(await self.driver.findElement(elementLocator(elementType, typeValue)).isSelected());
  } else if (state === "unselected") {
    assert(!(await self.driver.findElement(elementLocator(elementType, typeValue)).isSelected()));
  }
}
export async function isOptionFromRadioButtonGroupSelected(
  self: World,
  elementType: string,
  typeValue: string,
  option: string,
  optionAttribute: string,
  state: string
) {
  //how to navigate radio buttons???
  return "pending";
}

export async function getElementAttribute(self: World, elementType: string, typeValue: string, hasType: string) {
  return await self.driver.findElement(elementLocator(elementType, typeValue)).getAttribute(hasType);
}

export async function checkAlertText(self: World, text: string) {
  let actualText = await self.driver.switchTo().alert().getText();

  assert.strictEqual(actualText, text);
}

export async function isImageSimilar(self: World, actualImageType: string, actualImageName: string, expectedImageType: string, expectedImageName: string) {
  await image.compare(self, actualImageType, actualImageName, expectedImageType, expectedImageName);
}

// this is to take a string with special characters and escape them so they are not interpreted by regex
function escapeRegExp(text: string) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

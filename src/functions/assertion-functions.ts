import assert from "assert";
import { World } from "../../support/world";

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

export async function checkElementText(
  self: World,
  elementType: string,
  typeValue: string,
  expectedText: string,
  negate: string
) {
  const elementText = await getElementText(self, elementType, typeValue);

  if (negate === null) {
    assert.strictEqual(elementText, expectedText);
  } else {
    assert.doesNotMatch(elementText, new RegExp(`^${escapeRegExp(expectedText)}$`));
  }
}

export async function checkElementPartialText(
  self: World,
  elementType: string,
  typeValue: string,
  expectedText: string,
  negate: string
) {
  const elementText = await getElementText(self, elementType, typeValue);

  if (negate === null) {
    assert.match(elementText, new RegExp(`.*${escapeRegExp(expectedText)}.*`));
  } else {
    assert.doesNotMatch(elementText, new RegExp(`.*${escapeRegExp(expectedText)}.*`));
  }
}

export async function checkElementAttribute(
  self: World,
  elementType: string,
  typeValue: string,
  hasType: string,
  hasTypeValue: string,
  negate: string
) {
  const attributeValue = await getElementAttribute(self, elementType, typeValue, hasType);

  if (negate === null) {
    assert.strictEqual(attributeValue, hasTypeValue);
  } else {
    assert.strictEqual(attributeValue, null)
  }
}

export async function checkElementEnable(self: World, elementType: string, typeValue: string, status: string, negate: string) {
    const elementStatus = await self.driver.findElement(elementLocator(elementType, typeValue)).isEnabled()
    
    if (negate === null) {
        if (status === "enabled") {
          assert(elementStatus)
        } else if (status === "disabled") {
          assert(!elementStatus)
        }
    } else {
        if (status === "disabled") {
          assert(elementStatus)
        } else if (status === "enabled") {
          assert(!elementStatus)
        }
    }
}

export async function checkElementPresence(self: World, elementType: string, typeValue: string, negate: string) {
  let elementPresent = await isElementDisplayed(self, elementType, typeValue)
  
  if (negate === null) {
    assert(elementPresent)
  } else {
    assert(!(elementPresent))
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

async function isElementDisplayed(self: World, elementType: string, typeValue: string) {
    //console.log("here", await self.driver.findElement(elementLocator(elementType, typeValue)).isDisplayed() )
    return await self.driver.findElement(elementLocator(elementType, typeValue)).isDisplayed()
}

export async function isCheckboxChecked(self: World, elementType: string, typeValue: string, negate: string) {
    let checkbox = await self.driver.findElement(elementLocator(elementType, typeValue))
    console.log("This", checkbox)
}

async function getPageTitle(self: World) {
  return await self.driver.getTitle();
}

function elementLocator(elementType: string, typeValue: string) {
  let retValue = null;
  switch (elementType) {
    case "id":
      retValue = { id: typeValue };
      break;
    case "name":
      retValue = { name: typeValue };
      break;
    case "class":
      retValue = { className: typeValue };
      break;
    case "xpath":
      retValue = { xpath: typeValue };
      break;
    case "css":
      retValue = { css: typeValue };
      break;
  }
  return retValue;
}

async function getElementText(self: World, elementType: string, typeValue: string) {
  return await self.driver.findElement(elementLocator(elementType, typeValue)).getText();
}

async function getElementAttribute(self: World, elementType: string, typeValue: string, hasType: string) {
  return await self.driver.findElement(elementLocator(elementType, typeValue)).getAttribute(hasType);
}

// this is to take a string with special characters and escape them so they are not interpreted by regex
function escapeRegExp(text: string) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

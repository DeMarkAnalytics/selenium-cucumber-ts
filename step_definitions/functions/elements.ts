import { By } from "selenium-webdriver";
import { World } from "../world";
import { waitForElementToBeLocated } from "./progress";
let debugLog = require("debug")("elements");

export function validateLocater(locator: string) {
  let validLocators = ["id", "class", "css", "name", "xpath"];
  if (validLocators.includes(locator)) {
    return true;
  } else {
    return false;
  }
}

/**
 * Description: This function returns the locator for the element
 * @date 12/29/2022 - 12:06:10 PM
 *
 * @param {string} elementType - element type (id, name, xpath, class, css, link etc)
 * @param {string} typeValue - value of the element type
 * @returns By
 */
export function elementLocator(elementType: string, typeValue: string) {
  let retValue = null;
  switch (elementType) {
    case "id":
      retValue = By.id(typeValue);
      break;
    case "name":
      retValue = By.name(typeValue);
      break;
    case "class":
      retValue = By.className(typeValue);
      break;
    case "xpath":
      retValue = By.xpath(typeValue);
      break;
    case "css":
      retValue = By.css(typeValue);
      break;
    case "link":
      retValue = By.linkText(typeValue);
      break;
    case "partialLink":
      retValue = By.partialLinkText(typeValue);
      break;
  }
  return retValue;
}

/**
 * Description: This function returns the attribute for the element
 * @date 12/29/2022 - 1:39:35 PM
 *
 * @export
 * @async
 * @param {World} self
 * @param {string} elementType
 * @param {string} typeValue
 * @param {string} hasType
 * @returns Promise<string>
 */
export async function getElementAttribute(self: World, elementType: string, typeValue: string, hasType: string) {
  return await self.driver.findElement(elementLocator(elementType, typeValue)).getAttribute(hasType);
}

/**
 * Description: Gets the text of an element
 * @date 12/29/2022 - 1:05:51 PM
 *
 * @param {World} self
 * @param {string} elementType
 * @param {string} typeValue
 * @returns string
 */
export async function getElementText(self: World, elementType: string, typeValue: string) {
  await waitForElementToBeLocated(self, elementType, typeValue, 4);
  debugLog(`getting text of ${elementType} ${typeValue}`);
  return await self.driver.findElement(elementLocator(elementType, typeValue)).getText();
}

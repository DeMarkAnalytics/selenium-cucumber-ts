import { By } from "selenium-webdriver";
import { World } from "../world";
import { waitForElementToBeLocated } from "./progress";
let debugLog = require("debug")("elements");

export var elements = "element|button|link|menu item|selection|input";
export var elementIdentifiers = "id|name|class|xpath|css";

export function validateLocater(locator: string) {
  if (elementIdentifiers.includes(locator)) {
    return true;
  } else {
    return false;
  }
}

/**
 * Selector types for scanning the DOM
 * @date 5/19/2023 - 12:36:49 PM
 *
 * @export
 * @typedef {SelectorType}
 */
export type SelectorType =
  | "id" // Matches by element ID
  | "name" // Matches by element name
  | "xpath" // Matches using an XPath expression
  | "css" // Matches using a CSS selector
  | "class"; // Matches by class name

export function isSelectorType(locator: string): locator is SelectorType {
  return ["id", "class", "css", "name", "xpath"].includes(locator);
}

/**
 * Description: This function returns the locator for the element
 * @date 12/29/2022 - 12:06:10 PM
 *
 * @param {string} elementType - element type (id, name, xpath, class, css, etc)
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
export async function getElementAttribute(
  self: World,
  elementType: string,
  typeValue: string,
  attribute: string,
) {
  const element = await self.driver.findElement(
    elementLocator(elementType, typeValue),
  );
  const attributeValue = await element.getAttribute(attribute);
  debugLog(
    `Element ${elementType} ${typeValue} has attribute ${attribute} with value of ${attributeValue}`,
  );

  return attributeValue;
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
export async function getElementText(
  self: World,
  elementType: string,
  typeValue: string,
) {
  await waitForElementToBeLocated(self, elementType, typeValue, 4);
  debugLog(`getting text of ${elementType} ${typeValue}`);
  return await self.driver
    .findElement(elementLocator(elementType, typeValue))
    .getText();
}

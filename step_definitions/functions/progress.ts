import { World } from "../world";
import { elementLocator } from "./elements";
import { until } from "selenium-webdriver";
let debugLog = require('debug')('progress')

export async function wait(self: World, seconds: number) {
  debugLog(`waiting ${seconds}`)
  await self.driver.sleep(+seconds * 1000);
}

export async function waitForElementToDisplay(self: World, elementType: string, typeValue: string, seconds: number) {
  debugLog(`waiting ${seconds} for element ${elementType} ${typeValue} to display`)
  await self.driver.wait(until.elementIsVisible(await self.driver.findElement(elementLocator(elementType, typeValue))), +seconds * 1000);
}

export async function waitForElementToBeLocated(self: World, elementType: string, typeValue: string, seconds: number) {
  debugLog(`waiting ${seconds} for element ${elementType} ${typeValue} to be located`)
  await self.driver.wait(until.elementLocated(elementLocator(elementType, typeValue)), +seconds * 1000);
}

export async function waitForTitleToBe(self: World, titleMatch: string, seconds: number) {
  debugLog(`waiting ${seconds} for title to be ${titleMatch}`)
  await self.driver.wait(until.titleIs(titleMatch), +seconds * 1000);
}

import { World } from "../world";
import { elementLocator } from "./elements";
import { waitForElementToBeLocated } from "./progress";
let debugLog = require("debug")("clicks");

export async function click(self: World, elementType: string, typeValue: string) {
  debugLog(`trying to click on ${elementType} ${typeValue}`);
  for (var retry = 1; retry <= 2; retry++) {
    try {
      await waitForElementToBeLocated(self, elementType, typeValue, 60000);
      await self.driver.findElement(elementLocator(elementType, typeValue)).click();
      break;
    } catch (x) {
      debugLog(`retrying to click on ${elementType} ${typeValue}`);
      await self.driver.sleep(1000);
    }
  }
}

export async function doubleClick(self: World, elementType: string, typeValue: string) {
  debugLog(`trying to doubleClick on ${elementType} ${typeValue}`);
  for (var retry = 1; retry <= 2; retry++) {
    try {
      await waitForElementToBeLocated(self, elementType, typeValue, 60000);
      let doubleClickElement = await self.driver.findElement(elementLocator(elementType, typeValue));
      await self.driver.actions().doubleClick(doubleClickElement).perform();
      break;
    } catch (x) {
      debugLog(`retrying to doubleClick on ${elementType} ${typeValue}`);
      await self.driver.sleep(1000);
    }
  }
}

export async function rightClick(self: World, elementType: string, typeValue: string) {
  debugLog(`trying to rightClick on ${elementType} ${typeValue}`);
  for (var retry = 1; retry <= 2; retry++) {
    try {
      await waitForElementToBeLocated(self, elementType, typeValue, 60000);
      let rightClickElement = await self.driver.findElement(elementLocator(elementType, typeValue));
      await self.driver.actions().contextClick(rightClickElement).perform();
      break;
    } catch (x) {
      debugLog(`retrying to rightClick on ${elementType} ${typeValue}`);
      await self.driver.sleep(1000);
    }
  }
}

export async function clickForcefully(self: World, elementType: string, typeValue: string) {
  debugLog(`trying to clickForcefully on ${elementType} ${typeValue}`);
  for (var retry = 1; retry <= 2; retry++) {
    try {
      await waitForElementToBeLocated(self, elementType, typeValue, 60000);
      let forceClickElement = await self.driver.findElement(elementLocator(elementType, typeValue));
      await self.driver.executeScript("arguments[0]click();", forceClickElement);
      break;
    } catch (x) {
      debugLog(`retrying to clickForcefully on ${elementType} ${typeValue}`);
      await self.driver.sleep(1000);
    }
  }
}

export async function submit(self: World, elementType: string, typeValue: string) {
  debugLog(`trying to submit ${elementType} ${typeValue}`);
  for (var retry = 1; retry <= 2; retry++) {
    try {
      await waitForElementToBeLocated(self, elementType, typeValue, 60000);
      await self.driver.findElement(elementLocator(elementType, typeValue)).submit();
      break;
    } catch (x) {
      debugLog(`retrying to submit ${elementType} ${typeValue}`);
      await self.driver.sleep(1000);
    }
  }
}

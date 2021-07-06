import { World } from "../world";
import { Key } from "selenium-webdriver";
import { elementLocator } from "./elements";
import { waitForElementToBeLocated } from "./progress";

export async function backspace(self: World, elementType: string, typeValue: string) {
  await waitForElementToBeLocated(self, elementType, typeValue, 60000);
  for (var retry = 1; retry <= 2; retry++) {
    try {
      await self.driver.findElement(elementLocator(elementType, typeValue)).sendKeys(Key.BACK_SPACE);
      break;
    } catch (x) {
      await self.driver.sleep(1000);
    }
  }
}

export async function enter(self: World, elementType: string, typeValue: string) {
  await waitForElementToBeLocated(self, elementType, typeValue, 60000);
  for (var retry = 1; retry <= 2; retry++) {
    try {
      await self.driver.findElement(elementLocator(elementType, typeValue)).sendKeys(Key.ENTER);
      break;
    } catch (x) {
      await self.driver.sleep(1000);
    }
  }
}

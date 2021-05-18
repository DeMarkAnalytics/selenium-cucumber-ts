import { World } from "../world";
import { elementLocator } from "./pageAssertions";
import { waitForElementToBeLocated } from "./progress"

export async function click(self: World, elementType: string, typeValue: string) {
  for (var retry = 1; retry <= 10; retry++) {
    try {
      await waitForElementToBeLocated(self, elementType, typeValue, 60000)
      await self.driver.findElement(elementLocator(elementType, typeValue)).click()
      break;
    }
    catch (x) {
      await self.driver.sleep(1000)
    }
  }
}

export async function doubleClick(self: World, elementType: string, typeValue: string) {
  for (var retry = 1; retry <= 10; retry++) {
    try {
      await waitForElementToBeLocated(self, elementType, typeValue, 60000)
      let doubleClickElement = await self.driver.findElement(elementLocator(elementType, typeValue))
      self.driver.actions().doubleClick(doubleClickElement)
      break;
    }
    catch (x) {
      await self.driver.sleep(1000)
    }
  }
}

export async function rightClick(self: World, elementType: string, typeValue: string) {
  for (var retry = 1; retry <= 10; retry++) {
    try {
      await waitForElementToBeLocated(self, elementType, typeValue, 60000)
      let rightClickElement = await self.driver.findElement(elementLocator(elementType, typeValue))
      self.driver.actions().contextClick(rightClickElement)
      break;
    }
    catch (x) {
      await self.driver.sleep(1000)
    }
  }
}

export async function clickForcefully(self: World, elementType: string, typeValue: string) {
  for (var retry = 1; retry <= 10; retry++) {
    try {
      await waitForElementToBeLocated(self, elementType, typeValue, 60000)
      let forceClickElement = await self.driver.findElement(elementLocator(elementType, typeValue))
      self.driver.executeScript('arguments[0]click();', forceClickElement)
      break;
    }
    catch (x) {
      await self.driver.sleep(1000)
    }
  }
}

export async function submit(self: World, elementType: string, typeValue: string) {
  for (var retry = 1; retry <= 10; retry++) {
    try {
      await waitForElementToBeLocated(self, elementType, typeValue, 60000)
      await self.driver.findElement(elementLocator(elementType, typeValue)).submit()
      break;
    }
    catch (x) {
      await self.driver.sleep(1000)
    }
  }
}

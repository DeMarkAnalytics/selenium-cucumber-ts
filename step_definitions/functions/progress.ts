import { World } from "../world";
import { elementLocator } from "./pageAssertions";
import { until } from "selenium-webdriver"

export async function wait(self: World, seconds: number) {
  await self.driver.sleep(+seconds * 1000)
}

export async function waitForElementToDisplay(self: World, elementType: string, typeValue: string, seconds: number) {
  await self.driver.wait(until.elementIsVisible(
    await self.driver.findElement(elementLocator(elementType, typeValue))),
    +seconds
  )
}

export async function waitForElementToBeLocated(self: World, elementType: string, typeValue: string, seconds: number) {
  await self.driver.wait(until.elementLocated(elementLocator(elementType, typeValue)),
    +seconds
  )
}
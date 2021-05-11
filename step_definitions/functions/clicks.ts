import { World } from "../world";
import { elementLocator } from "./pageAssertions";
import { waitForElementToBeLocated } from "./progress"

export async function click(self: World, elementType: string, typeValue: string) {
   await waitForElementToBeLocated(self, elementType, typeValue, 60000)
   await self.driver.findElement(elementLocator(elementType, typeValue)).click()
}

export async function doubleClick(self: World, elementType: string, typeValue: string) {
   await waitForElementToBeLocated(self, elementType, typeValue, 60000)
   let doubleClickElement = await self.driver.findElement(elementLocator(elementType, typeValue))
   self.driver.actions().doubleClick(doubleClickElement)
 }

 export async function rightClick(self: World, elementType: string, typeValue: string) {
   await waitForElementToBeLocated(self, elementType, typeValue, 60000)
   let doubleClickElement = await self.driver.findElement(elementLocator(elementType, typeValue))
   self.driver.actions().contextClick(doubleClickElement)
 }

 export async function clickForcefully(self: World, elementType: string, typeValue: string) {
   await waitForElementToBeLocated(self, elementType, typeValue, 60000)
   let fouceClickElement = await self.driver.findElement(elementLocator(elementType, typeValue))
   self.driver.executeScript('arguments[0]click();', await self.driver.findElement(elementLocator(elementType, typeValue)))
 }
 
 export async function submit(self: World, elementType: string, typeValue: string) {
   await waitForElementToBeLocated(self, elementType, typeValue, 60000)
   await self.driver.findElement(elementLocator(elementType, typeValue)).submit()
 }
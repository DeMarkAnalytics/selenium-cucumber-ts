import { World } from "../../support/world";
import { elementLocator } from "./pageAssertions";

export async function click(self: World, elementType: string, typeValue: string) {
   await self.driver.findElement(elementLocator(elementType, typeValue)).click()
}

export async function doubleClick(self: World, elementType: string, typeValue: string) {
    let doubleClickElement = await self.driver.findElement(elementLocator(elementType, typeValue))
    self.driver.actions().doubleClick(doubleClickElement)
 }

 export async function rightClick(self: World, elementType: string, typeValue: string) {
   let doubleClickElement = await self.driver.findElement(elementLocator(elementType, typeValue))
   self.driver.actions().contextClick(doubleClickElement)
 }

 export async function clickForcefully(self: World, elementType: string, typeValue: string) {
    let fouceClickElement = await self.driver.findElement(elementLocator(elementType, typeValue))
    self.driver.executeScript('arguments[0]click();', await self.driver.findElement(elementLocator(elementType, typeValue)))
 }
 
 export async function submit(self: World, elementType: string, typeValue: string) {
     await self.driver.findElement(elementLocator(elementType, typeValue)).submit()
 }
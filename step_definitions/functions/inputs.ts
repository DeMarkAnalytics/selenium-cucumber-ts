import { World } from "../world";
import { elementLocator } from "./pageAssertions"

export async function enterText(self: World, elementType: string, typeValue: string, text: string) {
    await (await self.driver).findElement(elementLocator(elementType, typeValue)).sendKeys(text)
}

export async function clearText(self: World, elementType: string, typeValue: string) {
    await (await self.driver).findElement(elementLocator(elementType, typeValue)).clear()
}

// by = index|text
export async function selectOptionFromDropdown(self: World, elementType: string, typeValue: string, option: string|number) {
    let dropdown = await self.driver.findElement(elementLocator(elementType, typeValue))
    //TODO: finish dropdown interaction
}

export async function selectAllOptionsFromMultiselectDropdown(self: World, elementType: string, typeValue: string) {
    let dropdown = await self.driver.findElement(elementLocator(elementType, typeValue))
    //TODO: finish dropdown interaction
}

export async function unselectAllOptionsFromMultiselectDropdown(self: World, elementType: string, typeValue: string) {
    let dropdown = await self.driver.findElement(elementLocator(elementType, typeValue))
    //TODO: finish dropdown interaction
}

export async function checkCheckbox(self: World, elementType: string, typeValue: string) {
    let checkbox = await self.driver.findElement(elementLocator(elementType, typeValue))
    if (!(checkbox.isSelected())) {
        checkbox.click()
    }
    //TODO: need checkbox checking test
}

export async function uncheckCheckbox(self: World, elementType: string, typeValue: string) {
    let checkbox = await self.driver.findElement(elementLocator(elementType, typeValue))
    if (checkbox.isSelected()) {
        checkbox.click()
    }
    //TODO: need checkbox checking test this may not work
}


export async function selectRadioButton(self: World, elementType: string, typeValue: string) {
    let radioButton = await self.driver.findElement(elementLocator(elementType, typeValue))
    if (!(radioButton.isSelected())) {
        radioButton.click()
    }
    //TODO: need raidobutton checking test this may not work
}

export async function unselectRadioButton(self: World, elementType: string, typeValue: string) {
    let radioButton = await self.driver.findElement(elementLocator(elementType, typeValue))
    if (radioButton.isSelected()) {
        radioButton.click()
    }
    //TODO: need raidobutton checking test this may not work
}

export async function selectOptionFromRadioButtonGroup(self: World, elementType: string, typeValue: string, option: string) {
    let radioButtonGroup = await self.driver.findElement(elementLocator(elementType, typeValue))
    //TODO: need raidobutton interaction
    return 'pending'
}
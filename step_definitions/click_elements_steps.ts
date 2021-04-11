import { Given, When, Then } from "@cucumber/cucumber";
import { World } from "../support/world";
import { validateLocater } from "./functions/pageAssertions"
import * as mouse from "./functions/clicks"

//https://github.com/selenium-cucumber/selenium-cucumber-ruby/blob/1f21a470db8e8655746efd5466783d9e09955df1/lib/selenium-cucumber/click_elements_steps.rb

When(
  /^I click on element having (id|name|class|xpath|css) "(.*?)"(?: and text "(.*?)")?$/,
  async function (this: World, elementType: string, typeValue: string, text: string) {
    validateLocater(elementType)
    await mouse.click(this, elementType, typeValue)
  }
);

Then(
  /^I forcefully click on element having (.+) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    validateLocater(elementType)
    await mouse.clickForcefully(this, elementType, typeValue)
  }
);

Then(
  /^I right click on element having (.+) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    validateLocater(elementType)
    await mouse.rightClick(this, elementType, typeValue)
  }
);

Then(
  /^I double click on element having (.+) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    validateLocater(elementType)
    await mouse.doubleClick(this, elementType, typeValue)
  }
);

Then(/^I click on link having text "(.*?)"$/, async function (this: World, text: string) {
  await mouse.click(this, 'link', text)
});

Then(/^I click on link having partial text "(.*?)"$/, async function (this: World, text: string) {
  await mouse.click(this, 'partialLink', text)
});

When(/^I tap on element having (.+) "(.*?)"$/, async function (this: World, elementType: string, typeValue: string) {
  validateLocater(elementType)
  await mouse.click(this, elementType, typeValue)
});

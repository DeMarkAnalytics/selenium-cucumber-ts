import { Given, When, Then } from "@cucumber/cucumber";
import { World } from "./world";
import * as mouse from "./functions/clicks";
import { validateLocater } from "./functions/elements";

//TODO: add text parsing to this function
When(
  /^I click on (?:element|button|link) having (id|name|class|xpath|css) "(.*?)"(?: and text "(.*?)")?$/,
  async function (this: World, elementType: string, typeValue: string, text: string) {
    validateLocater(elementType);
    await mouse.click(this, elementType, typeValue);
  }
);

Then(
  /^I forcefully click on (?:element|button|link) having (id|name|class|xpath|css) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    validateLocater(elementType);
    await mouse.clickForcefully(this, elementType, typeValue);
  }
);

Then(
  /^I right click on (?:element|button|link) having (id|name|class|xpath|css) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    validateLocater(elementType);
    await mouse.rightClick(this, elementType, typeValue);
  }
);

Then(
  /^I double click on (?:element|button|link) having (id|name|class|xpath|css) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    validateLocater(elementType);
    await mouse.doubleClick(this, elementType, typeValue);
  }
);

Then(/^I click on link having text "(.*?)"$/, async function (this: World, text: string) {
  await mouse.click(this, "link", text);
});

Then(/^I click on link having partial text "(.*?)"$/, async function (this: World, text: string) {
  await mouse.click(this, "partialLink", text);
});

When(/^I tap on (?:element|button|link) having (id|name|class|xpath|css) "(.*?)"$/, async function (this: World, elementType: string, typeValue: string) {
  validateLocater(elementType);
  await mouse.click(this, elementType, typeValue);
});

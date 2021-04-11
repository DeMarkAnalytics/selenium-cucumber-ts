import { Then } from "@cucumber/cucumber";
import { World } from "../support/world";
//https://github.com/selenium-cucumber/selenium-cucumber-ruby/blob/1f21a470db8e8655746efd5466783d9e09955df1/lib/selenium-cucumber/mobile_steps.rb

Then(
  /^I swipe from element having (.+) "(.*?)" to element having (.+) "(.*?)"$/,
  async function (this: World, element1Type: string, type1Value: string, element2Type: string, type2Value: string) {
    return "pass";
  }
);

Then(
  /^I swipe from co\-ordinates "(.*?)","(.*?)" to co\-ordinates "(.*?)","(.*?)"$/,
  async function (this: World, xStart: string, yStart: string, xEnd: string, yEnd: String) {
    return "pass";
  }
);

Then(/^I swipe left$/, async function (this: World) {
  return "pass";
});

Then(/^I swipe right$/, async function (this: World) {
  return "pass";
});

Then(/^I swipe up$/, async function (this: World) {
  return "pass";
});

Then(/^I swipe down$/, async function (this: World) {
  return "pass";
});

Then(
  /^I swipe element having (.+) "(.*?)" to right$/,
  async function (this: World, elementType: string, typeValue: string) {
    return "pass";
  }
);

Then(
  /^I swipe element having (.+) "(.*?)" to left$/,
  async function (this: World, elementType: string, typeValue: string) {
    return "pass";
  }
);

Then(
  /^I swipe element having (.+) "(.*?)" to up$/,
  async function (this: World, elementType: string, typeValue: string) {
    return "pass";
  }
);

Then(
  /^I swipe element having (.+) "(.*?)" to down$/,
  async function (this: World, elementType: string, typeValue: string) {
    return "pass";
  }
);

Then(/^I swipe co\-ordinates "(.*?)","(.*?)" to left$/, async function (this: World, x: string, y: string) {
  return "pass";
});

Then(/^I swipe co\-ordinates "(.*?)","(.*?)" to right$/, async function (this: World, x: string, y: string) {
  return "pass";
});

Then(/^I swipe co\-ordinates "(.*?)","(.*?)" to up$/, async function (this: World, x: string, y: string) {
  return "pass";
});

Then(/^I swipe co\-ordinates "(.*?)","(.*?)" to down$/, async function (this: World, x: string, y: string) {
  return "pass";
});

Then(
  /^I long tap on element having (.+) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    return "pass";
  }
);

Then(
  /^I long tap on element having (.+) "(.*?)" for "(.*?)" sec$/,
  async function (this: World, elementType: string, typeValue: string, seconds: string) {
    return "pass";
  }
);

Then(/^I long tap on co\-ordinate "(.*?)","(.*?)"$/, async function (this: World, x: string, y: string) {
  return "pass";
});

Then(
  /^I long tap on co\-ordinate "(.*?)","(.*?)" for "(.*?)" sec$/,
  async function (this: World, x: string, y: string, seconds: string) {
    return "pass";
  }
);

Then(/^I close app$/, async function (this: World) {
  return "pass";
});

Then(/^I tap on back button of device$/, async function (this: World) {
  return "pass";
});

Then(/^I press back button of device$/, async function (this: World) {
  return "pass";
});

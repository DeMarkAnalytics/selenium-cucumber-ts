import { Then } from "@cucumber/cucumber";
import { World } from "./world";
import * as input from "./functions/inputs"
//https://github.com/selenium-cucumber/selenium-cucumber-ruby/blob/1f21a470db8e8655746efd5466783d9e09955df1/lib/selenium-cucumber/input_steps.rb

Then(
  /^I enter "([^\"]*)" into input field having (.+) "([^\"]*)"$/,
  async function (this: World, text: string, elementType: string, typeValue: string) {
    await input.enterText(this, elementType, typeValue, text)
  }
);

Then(
  /^I clear input field having (.+) "([^\"]*)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    await input.clearText(this, elementType, typeValue)
  }
);

Then(
  /^I select "(.*?)" option by (.+) from\s*((?:multiselect)?)\sdropdown having (.+) "(.*?)"$/,
  async function (this: World, option: string, elementType: string, typeValue: string) {
    await input.selectOptionFromDropdown(this, elementType, typeValue, option)
  }
);

Then(
  /^I select (\d+) option by index from\s*((?:multiselect)?)\sdropdown having (.+) "(.*?)"$/,
  async function (this: World, index: number, elementType: string, typeValue: string) {
    await input.selectOptionFromDropdown(this, elementType, typeValue, index)
  }
);

Then(
  /^I select all options from multiselect dropdown having (.+) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    return "pass";
  }
);

Then(
  /^I unselect all options from multiselect dropdown having (.+) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    return "pass";
  }
);

Then(
  /^I check the checkbox having (.+) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    return "pass";
  }
);

Then(
  /^I uncheck the checkbox having (.+) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    return "pass";
  }
);

Then(/^I toggle checkbox having (.+) "(.*?)"$/, async function (this: World, elementType: string, typeValue: string) {
  return "pass";
});

Then(
  /^I select radio button having (.+) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    return "pass";
  }
);

Then(/^I select "(.*?)" option by (.+) from radio button group having (.+) "(.*?)"$/, async function (this: World) {
  return "pass";
});

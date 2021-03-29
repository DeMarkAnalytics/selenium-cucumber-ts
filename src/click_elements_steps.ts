import { Given, When, Then } from "@cucumber/cucumber";
import assert from "assert";
import { By, until, Key } from "selenium-webdriver";
import { World } from "../support/world";
//https://github.com/selenium-cucumber/selenium-cucumber-ruby/blob/1f21a470db8e8655746efd5466783d9e09955df1/lib/selenium-cucumber/click_elements_steps.rb

When(
  /^I click on element having (id|name|class|xpath|css) "(.*?)"(?: and text "(.*?)")?$/,
  async function (this: World, elementType: string, typeValue: string, text: string) {
    return "pass";
  }
);

Then(
  /^I forcefully click on element having (.+) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    return "pass";
  }
);

Then(
  /^I double click on element having (.+) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    return "pass";
  }
);

Then(/^I click on link having text "(.*?)"$/, async function (this: World, text: string) {
  return "pass";
});

Then(/^I click on link having partial text "(.*?)"$/, async function (this: World, text: string) {
  return "pass";
});

When(/^I tap on element having (.+) "(.*?)"$/, async function (this: World, elementType: string, typeValue: string) {
  return "pass";
});

import { World } from "../support/world";
import { Given, When, Then } from "@cucumber/cucumber";
import { By, until, Key } from "selenium-webdriver";
import assert from "assert";
import * as page from "./functions/assertion-functions";
//https://github.com/selenium-cucumber/selenium-cucumber-ruby/blob/1f21a470db8e8655746efd5466783d9e09955df1/lib/selenium-cucumber/assertion_steps.rb

Then(
  /^I should\s*((?:not)?)\s+see (?:the\ )?page title as "(.*)"$/,
  async function (this: World, negate: string, title: string) {
    await page.checkTitle(this, title, negate);
  }
);

Then(
  /^I should\s*((?:not)?)\s+see (?:the\ )?page title having partial text as "(.*?)"$/,
  async function (this: World, negate: string, title: string) {
    await page.checkPartialTitle(this, title, negate);
  }
);

Then(
  /^element having (id|name|class|xpath|css) "([^\"]*)" should\s*((?:not)?)\s+have text as "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string, negate: string, textContent: string) {
    page.validateLocater(elementType); // may not need this due to regex being specific
    await page.checkElementText(this, elementType, typeValue, textContent, negate);
  }
);

Then(
  /^element having (id|name|class|xpath|css) "([^\"]*)" should\s*((?:not)?)\s+have partial text as "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string, negate: string, textContent: string) {
    page.validateLocater(elementType); // may not need this due to regex being specific
    await page.checkElementPartialText(this, elementType, typeValue, textContent, negate);
  }
);

Then(
  /^element having (id|name|class|xpath|css) "([^\"]*)" should\s*((?:not)?)\s+have attribute "(.*)" with value "(.*?)"$/,
  async function (
    this: World,
    elementType: string,
    typeValue: string,
    negate: string,
    hasType: string,
    hasTypeValue: string
  ) {
    page.validateLocater(elementType); // may not need this due to regex being specific
    await page.checkElementAttribute(this, elementType, typeValue, hasType, hasTypeValue, negate);
  }
);

Then(
  /^element having (id|name|class|xpath|css) "([^\"]*)" should\s*((?:not)?)\s+be (enabled|disabled)$/,
  async function (this: World, elementType: string, typeValue: string, negate: string, status: string) {
    page.validateLocater(elementType); // may not need this due to regex being specific
    await page.checkElementEnable(this, elementType, typeValue, status, negate);
  }
);

Then(
  /^element having (id|name|class|xpath|css) "(.*?)" should\s*((?:not)?)\s+be present$/,
  async function (this: World, elementType: string, typeValue: string, negate: string) {
    page.validateLocater(elementType); // may not need this due to regex being specific
    await page.checkElementPresence(this, elementType, typeValue, negate)
  }
);

Then(
  /^checkbox having (.+) "(.*?)" should be (checked|unchecked)$/,
  async function (this: World, type: string, access_name: string, negate: string, text: string) {
    return "pending";
  }
);

Then(
  /^radio button having (.+) "(.*?)" should be (selected|unselected)$/,
  async function (this: World, type: string, access_name: string, negate: string, text: string) {
    return "pending";
  }
);

Then(
  /^option "(.*?)" by (.+) from radio button group having (.+) "(.*?)" should be (selected|unselected)$/,
  async function (this: World, type: string, access_name: string, negate: string, text: string) {
    return "pending";
  }
);

Then(
  /^link having text "(.*?)" should\s*((?:not)?)\s+be present$/,
  async function (this: World, type: string, access_name: string, negate: string, text: string) {
    return "pending";
  }
);

Then(
  /^link having partial text "(.*?)" should\s*((?:not)?)\s+be present$/,
  async function (this: World, type: string, access_name: string, negate: string, text: string) {
    return "pending";
  }
);

Then(
  /^I should see alert text as "(.*?)"$/,
  async function (this: World, type: string, access_name: string, negate: string, text: string) {
    return "pending";
  }
);

Then(
  /^option "(.*?)" by (.+) from dropdown having (.+) "(.*?)" should be (selected|unselected)$/,
  async function (this: World, type: string, access_name: string, negate: string, text: string) {
    return "pending";
  }
);

Then(
  /^actual image having (.+) "(.*?)" and expected image having (.+) "(.*?)" should be similar$/,
  async function (this: World, type: string, access_name: string, negate: string, text: string) {
    return "pending";
  }
);

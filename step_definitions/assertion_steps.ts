import { World } from "./world";
import { Then } from "@cucumber/cucumber";
import * as page from "./functions/pageAssertions";
import { elementLocator } from "./functions/elements";
import { createLogger } from "./functions/debugLogs";
const debugLog = createLogger("assertion_steps");

Then(
  /^I should (not )?see (?:the )?page title as "(.*?)"$/,
  async function (this: World, negate: string, title: string) {
    negate = negate?.trim();
    await page.checkTitle(this, title, negate);
  },
);

Then(
  /^I should (not )?see (?:the )?page title having partial text as "(.*?)"$/,
  async function (this: World, negate: string, title: string) {
    negate = negate?.trim();
    await page.checkPartialTitle(this, title, negate);
  },
);

Then(
  /^(?:element|button|link|menu item|selection|input") having (id|name|class|xpath|css) "(.*?)" should (not )?have text as "(.*?)"$/,
  async function (
    this: World,
    elementType: string,
    typeValue: string,
    negate: string,
    textContent: string,
  ) {
    negate = negate?.trim();
    await page.checkElementText(
      this,
      elementType,
      typeValue,
      textContent,
      negate,
    );
  },
);

Then(
  /^(?:element|button|link|menu item|selection|input") having (id|name|class|xpath|css) "(.*?)" should (not )?have partial text as "(.*?)"$/,
  async function (
    this: World,
    elementType: string,
    typeValue: string,
    negate: string,
    textContent: string,
  ) {
    negate = negate?.trim();
    await page.checkElementPartialText(
      this,
      elementType,
      typeValue,
      textContent,
      negate,
    );
  },
);

Then(
  /^(?:element|button|link|menu item|selection|input") having (id|name|class|xpath|css) "(.*?)" should (not )?have attribute "(.*?)" with value "(.*?)"$/,
  async function (
    this: World,
    elementType: string,
    typeValue: string,
    negate: string,
    hasType: string,
    hasTypeValue: string,
  ) {
    negate = negate?.trim();
    await page.checkElementAttribute(
      this,
      elementType,
      typeValue,
      hasType,
      hasTypeValue,
      negate,
    );
  },
);

Then(
  /^(?:element|button|link|menu item|selection|input") having (id|name|class|xpath|css) "(.*?)" should (not )?be (enabled|disabled)$/,
  async function (
    this: World,
    elementType: string,
    typeValue: string,
    negate: string,
    status: string,
  ) {
    negate = negate?.trim();
    await page.checkElementEnable(this, elementType, typeValue, status, negate);
  },
);

Then(
  /^(?:element|button|link|menu item|selection|input") having (id|name|class|xpath|css) "(.*?)" should (not )?be present$/,
  async function (
    this: World,
    elementType: string,
    typeValue: string,
    negate: string,
  ) {
    negate = negate?.trim();
    await page.checkElementPresence(this, elementType, typeValue, negate);
  },
);

Then(
  /^I should see (?:element|button|link|menu item|selection|input}) having (id|name|class|xpath|css) "(.*?)" above (?:element|button|link|menu item|selection|input) having (id|name|class|xpath|css) "(.*?)"$/,
  async function (
    this: World,
    type1: string,
    type1Value: string,
    type2: string,
    type2Value,
  ) {
    let firstElement = await this.driver.findElement(
      elementLocator(type1, type1Value),
    );
    let firstElementRect = await firstElement.getRect();
    let secondElement = await this.driver.findElement(
      elementLocator(type2, type2Value),
    );
    let secondElementRect = await secondElement.getRect();
    debugLog(
      this,
      `first < second | ${firstElementRect.y} < ${secondElementRect.y}`,
    );
    if (firstElementRect.y < secondElementRect.y) {
      return;
    } else {
      throw new Error(
        `Element having ${type1} ${type1Value} is above element having ${type2} ${type2Value}`,
      );
    }
  },
);

Then(
  /^checkbox having (id|name|class|xpath|css) "(.*?)" should be (checked|unchecked)$/,
  async function (
    this: World,
    elementType: string,
    typeValue: string,
    state: string,
  ) {
    await page.assertCheckboxChecked(this, elementType, typeValue, state);
  },
);

Then(
  /^radio button having (id|name|class|xpath|css) "(.*?)" should be (selected|unselected)$/,
  async function (
    this: World,
    elementType: string,
    typeValue: string,
    state: string,
  ) {
    // TODO: test radio button selection this is untested
    await page.assertRadioButtonSelected(this, elementType, typeValue, state);
  },
);

Then(
  /^option "(.*?)" by (.*?) from radio button group having (id|name|class|xpath|css) "(.*?)" should be (selected|unselected)$/,
  async function (
    this: World,
    option: string,
    optionAttribute: string,
    elementType: string,
    typeValue: string,
    state: string,
  ) {
    await page.assertOptionFromRadioButtonGroupSelected(
      this,
      elementType,
      typeValue,
      option,
      optionAttribute,
      state,
    );
    return "pending";
  },
);

Then(
  /^link having text "(.*?)" should (not )?be present$/,
  async function (this: World, text: string, negate: string) {
    negate = negate?.trim();
    await page.checkElementPresence(this, "link", text, negate);
  },
);

Then(
  /^link having partial text "(.*?)" should (not )?be present$/,
  async function (this: World, text: string, negate: string) {
    negate = negate?.trim();
    await page.checkElementPresence(this, "partialLink", text, negate);
  },
);

Then(
  /^I should see alert text as "(.*?)"$/,
  async function (this: World, text: string) {
    await page.checkAlertText(this, text);
  },
);

Then(
  /^option "(.*?)" by (.*?) from dropdown having (id|name|class|xpath|css) "(.*?)" should be (selected|unselected)$/,
  async function (
    this: World,
    option: string,
    optionAttribute: string,
    elementType: string,
    typeValue: string,
    state: string,
  ) {
    return "pending";
    await page.assertOptionFromDropDownSelected(
      this,
      option,
      optionAttribute,
      state,
    );
  },
);

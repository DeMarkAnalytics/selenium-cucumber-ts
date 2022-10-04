import { World } from "./world";
import { Then } from "@cucumber/cucumber";
import * as page from "./functions/pageAssertions";

Then(
  /^I should (see|not see) (?:the page|page) title as "(.*?)"$/,
  async function (this: World, negate: string, title: string) {
    negate = negate === "not see" ? "not" : "";
    await page.checkTitle(this, title, negate);
  }
);

Then(
  /^I should (see|not see) (?:the page|page) title having partial text as "(.*?)"$/,
  async function (this: World, negate: string, title: string) {
    negate = negate === "not see" ? "not" : "";
    await page.checkPartialTitle(this, title, negate);
  }
);

Then(
  /^(?:element|button|link) having (id|name|class|xpath|css) "(.*?)" should (have|not have) text as "(.*?)"$/,
  async function (
    this: World,
    elementType: string,
    typeValue: string,
    negate: string,
    textContent: string
  ) {
    negate = negate === "not have" ? "not" : "";
    await page.checkElementText(
      this,
      elementType,
      typeValue,
      textContent,
      negate
    );
  }
);

Then(
  /^(?:element|button|link) having (id|name|class|xpath|css) "(.*?)" should (have|not have) partial text as "(.*?)"$/,
  async function (
    this: World,
    elementType: string,
    typeValue: string,
    negate: string,
    textContent: string
  ) {
    negate = negate === "not have" ? "not" : "";
    await page.checkElementPartialText(
      this,
      elementType,
      typeValue,
      textContent,
      negate
    );
  }
);

Then(
  /^(?:element|button|link) having (id|name|class|xpath|css) "(.*?)" should (have|not have) attribute "(.*?)" with value "(.*?)"$/,
  async function (
    this: World,
    elementType: string,
    typeValue: string,
    negate: string,
    hasType: string,
    hasTypeValue: string
  ) {
    negate = negate === "not have" ? "not" : "";
    await page.checkElementAttribute(
      this,
      elementType,
      typeValue,
      hasType,
      hasTypeValue,
      negate
    );
  }
);

Then(
  /^(?:element|button|link) having (id|name|class|xpath|css) "([^\"]*)" should (be|not be) (enabled|disabled)$/,
  async function (
    this: World,
    elementType: string,
    typeValue: string,
    negate: string,
    status: string
  ) {
    negate = negate === "not be" ? "not" : "";
    await page.checkElementEnable(this, elementType, typeValue, status, negate);
  }
);

Then(
  /^(?:element|button|link) having (id|name|class|xpath|css) "(.*?)" should (be|not be) present$/,
  async function (
    this: World,
    elementType: string,
    typeValue: string,
    negate: string
  ) {
    negate = negate === "not be" ? "not" : "";
    await page.checkElementPresence(this, elementType, typeValue, negate);
  }
);

Then(
  /^checkbox having (id|name|class|xpath|css) "(.*?)" should be (checked|unchecked)$/,
  async function (
    this: World,
    elementType: string,
    typeValue: string,
    state: string
  ) {
    await page.assertCheckboxChecked(this, elementType, typeValue, state);
  }
);

Then(
  /^radio button having (id|name|class|xpath|css) "(.*?)" should be (selected|unselected)$/,
  async function (
    this: World,
    elementType: string,
    typeValue: string,
    state: string
  ) {
    // TODO: test radio button selection this is untested
    await page.assertRadioButtonSelected(this, elementType, typeValue, state);
  }
);

Then(
  /^option "(.*?)" by (.*?) from radio button group having (id|name|class|xpath|css) "(.*?)" should be (selected|unselected)$/,
  async function (
    this: World,
    option: string,
    optionAttribute: string,
    elementType: string,
    typeValue: string,
    state: string
  ) {
    await page.assertOptionFromRadioButtonGroupSelected(
      this,
      elementType,
      typeValue,
      option,
      optionAttribute,
      state
    );
    //TODO: I don't know how to navigate radio button groups
    return "pending";
  }
);

Then(
  /^link having text "(.*?)" should (be|not be) present$/,
  async function (this: World, text: string, negate: string) {
    negate = negate === "not be" ? "not" : "";
    await page.checkElementPresence(this, "link", text, negate);
  }
);

Then(
  /^link having partial text "(.*?)" should (be|not be) present$/,
  async function (this: World, text: string, negate: string) {
    negate = negate === "not be" ? "not" : "";
    await page.checkElementPresence(this, "partialLink", text, negate);
  }
);

Then(
  /^I should see alert text as "(.*?)"$/,
  async function (this: World, text: string) {
    await page.checkAlertText(this, text);
  }
);

Then(
  /^option "(.*?)" by (.*?) from dropdown having (id|name|class|xpath|css) "(.*?)" should be (selected|unselected)$/,
  async function (
    this: World,
    option: string,
    optionAttribute: string,
    elementType: string,
    typeValue: string,
    state: string
  ) {
    await page.assertOptionFromDropDownSelected(
      this,
      option,
      optionAttribute,
      state
    );
    return "pending";
  }
);

Then(
  /^actual image having (.+) "(.*?)" and expected image having (id|name|class|xpath|css) "(.*?)" should be similar$/,
  async function (
    this: World,
    actualImageType: string,
    actualImageName: string,
    expectedImageType: string,
    expectedImageName: string
  ) {
    await page.isImageSimilar(
      this,
      actualImageType,
      actualImageName,
      expectedImageType,
      expectedImageName
    );
    // TODO
    return "pending";
  }
);

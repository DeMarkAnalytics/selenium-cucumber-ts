import { World } from "./world";
import { Then } from "@cucumber/cucumber";
import * as page from "./functions/pageAssertions";
import { elements, elementIdentifiers } from "./functions/elements";

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
  new RegExp(
    `^(?:${elements}) having (${elementIdentifiers}) "(.*?)" should (not )?have text as "(.*?)"$`,
  ),
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
  new RegExp(
    `^(?:${elements}) having (${elementIdentifiers}) "(.*?)" should (not )?have partial text as "(.*?)"$`,
  ),
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
  new RegExp(
    `^(?:${elements}) having (${elementIdentifiers}) "(.*?)" should (not )?have attribute "(.*?)" with value "(.*?)"$`,
  ),
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
  new RegExp(
    `^(?:${elements}) having (${elementIdentifiers}) "(.*?)" should (not )?be (enabled|disabled)$`,
  ),
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
  new RegExp(
    `^(?:${elements}) having (${elementIdentifiers}) "(.*?)" should (not )?be present$`,
  ),
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
  new RegExp(
    `^checkbox having (${elementIdentifiers}) "(.*?)" should be (checked|unchecked)$`,
  ),
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
  new RegExp(
    `^radio button having (${elementIdentifiers}) "(.*?)" should be (selected|unselected)$`,
  ),
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
  new RegExp(
    `^option "(.*?)" by (.*?) from radio button group having (${elementIdentifiers}) "(.*?)" should be (selected|unselected)$`,
  ),
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
  new RegExp(
    `^option "(.*?)" by (.*?) from dropdown having (${elementIdentifiers}) "(.*?)" should be (selected|unselected)$`,
  ),
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

Then(
  new RegExp(
    `^actual image having (.+?) "(.*?)" and expected image having (${elementIdentifiers}) "(.*?)" should be similar$`,
  ),
  async function (
    this: World,
    actualImageType: string,
    actualImageName: string,
    expectedImageType: string,
    expectedImageName: string,
  ) {
    await page.isImageSimilar(
      this,
      actualImageType,
      actualImageName,
      expectedImageType,
      expectedImageName,
    );
    // TODO
    return "pending";
  },
);

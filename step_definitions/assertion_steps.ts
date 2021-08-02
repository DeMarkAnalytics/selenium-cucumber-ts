import { World } from "./world";
import { Then } from "@cucumber/cucumber";
import * as page from "./functions/pageAssertions";

Then(/^I should\s*((?:not)?)\s+see (?:the\ )?page title as "(.*)"$/, async function (this: World, negate: string, title: string) {
  await page.checkTitle(this, title, negate);
});

Then(/^I should\s*((?:not)?)\s+see (?:the\ )?page title having partial text as "(.*?)"$/, async function (this: World, negate: string, title: string) {
  await page.checkPartialTitle(this, title, negate);
});

Then(
  /^(?:element|button|link) having (id|name|class|xpath|css) "([^\"]*)" should\s*((?:not)?)\s+have text as "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string, negate: string, textContent: string) {
    page.validateLocater(elementType); // may not need this due to regex being specific
    await page.checkElementText(this, elementType, typeValue, textContent, negate);
  }
);

Then(
  /^(?:element|button|link) having (id|name|class|xpath|css) "([^\"]*)" should\s*((?:not)?)\s+have partial text as "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string, negate: string, textContent: string) {
    page.validateLocater(elementType); // may not need this due to regex being specific
    await page.checkElementPartialText(this, elementType, typeValue, textContent, negate);
  }
);

Then(
  /^(?:element|button|link) having (id|name|class|xpath|css) "([^\"]*)" should\s*((?:not)?)\s+have attribute "(.*)" with value "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string, negate: string, hasType: string, hasTypeValue: string) {
    page.validateLocater(elementType); // may not need this due to regex being specific
    await page.checkElementAttribute(this, elementType, typeValue, hasType, hasTypeValue, negate);
  }
);

Then(
  /^(?:element|button|link) having (id|name|class|xpath|css) "([^\"]*)" should\s*((?:not)?)\s+be (enabled|disabled)$/,
  async function (this: World, elementType: string, typeValue: string, negate: string, status: string) {
    page.validateLocater(elementType); // may not need this due to regex being specific
    await page.checkElementEnable(this, elementType, typeValue, status, negate);
  }
);

Then(
  /^(?:element|button|link) having (id|name|class|xpath|css) "(.*?)" should\s*((?:not)?)\s+be present$/,
  async function (this: World, elementType: string, typeValue: string, negate: string) {
    page.validateLocater(elementType); // may not need this due to regex being specific
    await page.checkElementPresence(this, elementType, typeValue, negate);
  }
);

Then(
  /^checkbox having (id|name|class|xpath|css) "(.*?)" should be (checked|unchecked)$/,
  async function (this: World, elementType: string, typeValue: string, state: string) {
    page.validateLocater(elementType); // may not need this due to regex being specific
    await page.isCheckboxChecked(this, elementType, typeValue, state);
  }
);

Then(
  /^radio button having (id|name|class|xpath|css) "(.*?)" should be (selected|unselected)$/,
  async function (this: World, elementType: string, typeValue: string, state: string) {
    // TODO: test radio button selection this is untested
    page.validateLocater(elementType); // may not need this due to regex being specific
    await page.isRadioButtonSelected(this, elementType, typeValue, state);
  }
);

Then(
  /^option "(.*?)" by (.+) from radio button group having (.+) "(.*?)" should be (selected|unselected)$/,
  async function (this: World, option: string, optionAttribute: string, elementType: string, typeValue: string, state: string) {
    page.validateLocater(elementType); // may not need this due to regex being specific
    await page.isOptionFromRadioButtonGroupSelected(this, elementType, typeValue, option, optionAttribute, state);
    return "pending"; //TODO: I don't know how to navigate radio button groups
  }
);

Then(/^link having text "(.*?)" should\s*((?:not)?)\s+be present$/, async function (this: World, text: string, negate: string) {
  await page.checkElementPresence(this, "link", text, negate);
});

Then(/^link having partial text "(.*?)" should\s*((?:not)?)\s+be present$/, async function (this: World, text: string, negate: string) {
  await page.checkElementPresence(this, "partialLink", text, negate);
});

Then(/^I should see alert text as "(.*?)"$/, async function (this: World, text: string) {
  await page.checkAlertText(this, text);
});

Then(
  /^option "(.*?)" by (.+) from dropdown having (.+) "(.*?)" should be (selected|unselected)$/,
  async function (this: World, option: string, optionAttribute: string, elementType: string, typeValue: string, state: string) {
    page.validateLocater(elementType); // may not need this due to regex being specific
    await page.isOptionFromDropDownSelected(this, elementType, typeValue, option, optionAttribute, state);
  }
);

Then(
  /^actual image having (.+) "(.*?)" and expected image having (.+) "(.*?)" should be similar$/,
  async function (this: World, actualImageType: string, actualImageName: string, expectedImageType: string, expectedImageName: string) {
    await page.isImageSimilar(this, actualImageType, actualImageName, expectedImageType, expectedImageName);
    // TODO
    return "pending";
  }
);

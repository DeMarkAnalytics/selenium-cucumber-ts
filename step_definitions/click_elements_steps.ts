import { Then } from "@cucumber/cucumber";
import { World } from "./world";
import * as mouse from "./functions/clicks";
import {
  isSelectorType,
  SelectorType,
  validateLocater,
} from "./functions/elements";
import { dragAndDrop } from "./functions/navigate";
import { clickIfExists } from "./functions/clicks";

Then(
  /^I click on (?:element|button|link|menu item|selection|input) having (id|name|class|xpath|css) "(.*?)" and text "(.*?)"$/,
  async function (
    this: World,
    elementType: string,
    typeValue: string,
    text: string | undefined,
  ) {
    await mouse.click(
      this,
      "xpath",
      `//*[text()='${text}' and @${elementType}='${typeValue}']`,
    );
  },
);

Then(
  /^I click on (?:element|button|link|menu item|selection|input) having (id|name|class|xpath|css) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    await mouse.click(this, elementType as SelectorType, typeValue);
  },
);

Then(
  /^I click on element having (id|name|class|xpath|css) "(.*?)" if it exists?$/,
  async function (this: World, elementType: string, typeValue: string) {
    validateLocater(elementType);
    await clickIfExists(this, elementType, typeValue, "3");
  },
);

Then(
  /^I forcefully click on (?:element|button|link|menu item|selection|input) having (id|name|class|xpath|css) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    isSelectorType(elementType);
    await mouse.clickForcefully(this, elementType, typeValue);
  },
);

Then(
  /^I right click on (?:element|button|link|menu item|selection|input) having (id|name|class|xpath|css) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    isSelectorType(elementType);
    await mouse.rightClick(this, elementType, typeValue);
  },
);

Then(
  /^I double click on (?:element|button|link|menu item|selection|input) having (id|name|class|xpath|css) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    isSelectorType(elementType);
    await mouse.doubleClick(this, elementType, typeValue);
  },
);

Then(
  /^I click on link having text "(.*?)"$/,
  async function (this: World, text: string) {
    await mouse.click(this, "xpath", `//a[text()="${text}"]`);
  },
);

Then(
  /^I click on link having partial text "(.*?)"$/,
  async function (this: World, text: string) {
    await mouse.click(this, "xpath", `//a/[contains(text(), "${text}")]`);
  },
);

Then(
  /^I tap on (?:element|button|link|menu item|selection|input) having (id|name|class|xpath|css) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    isSelectorType(elementType);
    await mouse.click(this, elementType as SelectorType, typeValue);
  },
);

Then(
  /^I drag element having (id|name|class|xpath|css) "(.*?)" and drop it on element having (id|name|class|xpath|css) "(.*?)"$/,
  async function (
    this: World,
    sourceType: string,
    sourceTypeValue: string,
    targetType: string,
    targetTypeValue: string,
  ) {
    await dragAndDrop(
      this,
      sourceType,
      sourceTypeValue,
      targetType,
      targetTypeValue,
    );
  },
);

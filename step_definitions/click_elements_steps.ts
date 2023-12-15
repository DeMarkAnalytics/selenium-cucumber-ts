import { When } from "@cucumber/cucumber";
import { World } from "./world";
import * as mouse from "./functions/clicks";
import {
  elementIdentifiers,
  isSelectorType,
  SelectorType,
} from "./functions/elements";
import { dragAndDrop } from "./functions/navigate";

When(
  /^I click on (?:element|button|link|menu item|selection|input") having (id|name|class|xpath|css) "(.*?)" and text "(.*?)"$/,
  async function (
    this: World,
    elementType: string,
    typeValue: string,
    text: string | undefined
  ) {
    await mouse.click(
      this,
      "xpath",
      `//*[text()='${text}' and @${elementType}='${typeValue}']`
    );
  }
);

When(
  /^I click on (?:element|button|link|menu item|selection|input") having (id|name|class|xpath|css) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    await mouse.click(this, elementType as SelectorType, typeValue);
  }
);

When(
  /^I forcefully click on (?:element|button|link|menu item|selection|input") having (id|name|class|xpath|css) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    isSelectorType(elementType);
    await mouse.clickForcefully(this, elementType, typeValue);
  }
);

When(
  /^I right click on (?:element|button|link|menu item|selection|input") having (id|name|class|xpath|css) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    isSelectorType(elementType);
    await mouse.rightClick(this, elementType, typeValue);
  }
);

When(
  /^I double click on (?:element|button|link|menu item|selection|input") having (id|name|class|xpath|css) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    isSelectorType(elementType);
    await mouse.doubleClick(this, elementType, typeValue);
  }
);

When(
  /^I click on link having text "(.*?)"$/,
  async function (this: World, text: string) {
    await mouse.click(this, "xpath", `//a[text()="${text}"]`);
  }
);

When(
  /^I click on link having partial text "(.*?)"$/,
  async function (this: World, text: string) {
    await mouse.click(this, "xpath", `//a/[contains(text(), "${text}")]`);
  }
);

When(
  /^I tap on (?:element|button|link|menu item|selection|input") having (id|name|class|xpath|css) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    isSelectorType(elementType);
    await mouse.click(this, elementType as SelectorType, typeValue);
  }
);

When(
  /^I drag element having (id|name|class|xpath|css) "(.*?)" and drop it on element having (id|name|class|xpath|css) "(.*?)"$/,
  async function (
    this: World,
    sourceType: string,
    sourceTypeValue: string,
    targetType: string,
    targetTypeValue: string
  ) {
    await dragAndDrop(
      this,
      sourceType,
      sourceTypeValue,
      targetType,
      targetTypeValue
    );
  }
);

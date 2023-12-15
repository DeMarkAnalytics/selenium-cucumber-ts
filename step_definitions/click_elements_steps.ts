import { When } from "@cucumber/cucumber";
import { World } from "./world";
import * as mouse from "./functions/clicks";
import {
  elements,
  elementIdentifiers,
  isSelectorType,
  SelectorType,
} from "./functions/elements";
import { dragAndDrop } from "./functions/navigate";

When(
  new RegExp(
    `^I click on (?:${elements}) having (${elementIdentifiers}) "(.*?)" and text "(.*?)"$`,
  ),
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

When(
  new RegExp(
    `^I click on (?:${elements}) having (${elementIdentifiers}) "(.*?)"$`,
  ),
  async function (this: World, elementType: string, typeValue: string) {
    await mouse.click(this, elementType as SelectorType, typeValue);
  },
);

When(
  new RegExp(
    `^I forcefully click on (?:${elements}) having (${elementIdentifiers}) "(.*?)"$`,
  ),
  async function (this: World, elementType: string, typeValue: string) {
    isSelectorType(elementType);
    await mouse.clickForcefully(this, elementType, typeValue);
  },
);

When(
  new RegExp(
    `^I right click on (?:${elements}) having (${elementIdentifiers}) "(.*?)"$`,
  ),
  async function (this: World, elementType: string, typeValue: string) {
    isSelectorType(elementType);
    await mouse.rightClick(this, elementType, typeValue);
  },
);

When(
  new RegExp(
    `^I double click on (?:${elements}) having (${elementIdentifiers}) "(.*?)"$`,
  ),
  async function (this: World, elementType: string, typeValue: string) {
    isSelectorType(elementType);
    await mouse.doubleClick(this, elementType, typeValue);
  },
);

When(
  /^I click on link having text "(.*?)"$/,
  async function (this: World, text: string) {
    await mouse.click(this, "xpath", `//a[text()="${text}"]`);
  },
);

When(
  /^I click on link having partial text "(.*?)"$/,
  async function (this: World, text: string) {
    await mouse.click(this, "xpath", `//a/[contains(text(), "${text}")]`);
  },
);

When(
  new RegExp(
    `^I tap on (?:${elements}) having (${elementIdentifiers}) "(.*?)"$`,
  ),
  async function (this: World, elementType: string, typeValue: string) {
    isSelectorType(elementType);
    await mouse.click(this, elementType as SelectorType, typeValue);
  },
);

When(
  new RegExp(
    `^I drag element having (${elementIdentifiers}) "(.*?)" and drop it on element having (${elementIdentifiers}) "(.*?)"$`,
  ),
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

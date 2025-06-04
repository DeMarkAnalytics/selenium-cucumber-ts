import { Then } from "@cucumber/cucumber";
import { World } from "./world";
import * as input from "./functions/inputs";
import * as press from "./functions/keys";
import { SelectorType, isSelectorType } from "./functions/elements";

Then(
  /^I enter "(.*?)" into input field having (id|name|class|xpath|css) "(.*?)"$/,
  async function (
    this: World,
    text: string,
    elementType: string | SelectorType,
    typeValue: string,
  ) {
    if (!isSelectorType(elementType)) throw new Error("Invalid selector type");
    await input.enterText(this, elementType, typeValue, text);
  },
);

Then(
  /^I clear input field having (id|name|class|xpath|css) "(.*?)"$/,
  async function (
    this: World,
    elementType: string | SelectorType,
    typeValue: string,
  ) {
    if (!isSelectorType(elementType)) throw new Error("Invalid selector type");
    await input.clearText(this, elementType, typeValue);
  },
);

Then(
  /^I select (.*?) option by (.*?) from dropdown having (id|name|class|xpath|css) "(.*?)"$/,
  async function (
    this: World,
    option: string,
    optionType: string,
    elementType: string | SelectorType,
    typeValue: string,
  ) {
    if (!isSelectorType(elementType)) throw new Error("Invalid selector type");
    await input.selectOptionFromDropdown(
      this,
      elementType,
      typeValue,
      option,
      optionType,
    );
  },
);

Then(
  /^I select all options from multiselect dropdown having (id|name|class|xpath|css) "(.*?)"$/,
  async function (
    this: World,
    elementType: string | SelectorType,
    typeValue: string,
  ) {
    if (!isSelectorType(elementType)) throw new Error("Invalid selector type");
    await input.selectAllOptionsFromMultiselectDropdown(
      this,
      elementType,
      typeValue,
    );
  },
);

Then(
  /^I unselect all options from multiselect dropdown having (id|name|class|xpath|css) "(.*?)"$/,
  async function (
    this: World,
    elementType: string | SelectorType,
    typeValue: string,
  ) {
    if (!isSelectorType(elementType)) throw new Error("Invalid selector type");
    await input.unselectAllOptionsFromMultiselectDropdown(
      this,
      elementType,
      typeValue,
    );
  },
);

//  /^I check the checkbox having (id|name|class|xpath|css) "(.*?)"$/,
Then(
  /^I check the checkbox having (id|name|class|xpath|css) "(.*?)"$/,
  async function (
    this: World,
    elementType: string | SelectorType,
    typeValue: string,
  ) {
    if (!isSelectorType(elementType)) throw new Error("Invalid selector type");
    await input.checkCheckbox(this, elementType, typeValue);
  },
);

Then(
  /^I uncheck the checkbox having (id|name|class|xpath|css) "(.*?)"$/,
  async function (
    this: World,
    elementType: string | SelectorType,
    typeValue: string,
  ) {
    if (!isSelectorType(elementType)) throw new Error("Invalid selector type");
    await input.uncheckCheckbox(this, elementType, typeValue);
  },
);

Then(
  /^I toggle checkbox having (id|name|class|xpath|css) "(.*?)"$/,
  async function (
    this: World,
    elementType: string | SelectorType,
    typeValue: string,
  ) {
    if (!isSelectorType(elementType)) throw new Error("Invalid selector type");
    await input.toggleCheckbox(this, elementType, typeValue);
  },
);

Then(
  /^I select radio button having (id|name|class|xpath|css) "(.*?)"$/,
  async function (
    this: World,
    elementType: string | SelectorType | SelectorType,
    typeValue: string,
  ) {
    if (!isSelectorType(elementType)) throw new Error("Invalid selector type");
    await input.selectRadioButton(this, elementType, typeValue);
  },
);

Then(
  /^I select "(.*?)" option by (.*?) from radio button group having (id|name|class|xpath|css) "(.*?)"$/,
  async function (
    this: World,
    elementType: string | SelectorType,
    typeValue: string,
    option: string,
  ) {
    if (!isSelectorType(elementType)) throw new Error("Invalid selector type");
    await input.selectOptionFromRadioButtonGroup(
      this,
      elementType,
      typeValue,
      option,
    );
  },
);

Then(
  /^I send the key (enter|backspace) to the element having (id|name|class|xpath|css) "(.*?)"$/,
  async function (
    this: World,
    key: string,
    elementType: string | SelectorType,
    typeValue: string,
  ) {
    if (!isSelectorType(elementType)) throw new Error("Invalid selector type");

    switch (key) {
      case "backspace":
        await press.backspace(this, elementType, typeValue);
        break;
      case "enter":
        await press.enter(this, elementType, typeValue);
        break;
    }
  },
);

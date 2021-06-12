import { Then } from "@cucumber/cucumber";
import { World } from "./world";
import * as input from "./functions/inputs"
import { backspace, enter } from "./functions/keys";
//https://github.com/selenium-cucumber/selenium-cucumber-ruby/blob/1f21a470db8e8655746efd5466783d9e09955df1/lib/selenium-cucumber/input_steps.rb

Then(
  /^I enter "([^\"]*)" into input field having (.+) "([^\"]*)"$/,
  async function (this: World, text: string, elementType: string, typeValue: string) {
    await input.enterText(this, elementType, typeValue, text)
  }
);

Then(
  /^I clear input field having (.+) "([^\"]*)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    await input.clearText(this, elementType, typeValue)
  }
);


Then(
  /^I select (.*?) option by (.+) from dropdown having (.+) "(.*?)"$/,
  async function (this: World, option: string, optionType: string, elementType: string, typeValue: string) {
    await input.selectOptionFromDropdown(this, elementType, typeValue, option, optionType)
  }
);


Then(
  /^I select all options from multiselect dropdown having (.+) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    await input.selectAllOptionsFromMultiselectDropdown(this, elementType, typeValue);
  }
);

Then(
  /^I unselect all options from multiselect dropdown having (.+) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    await input.unselectAllOptionsFromMultiselectDropdown(this, elementType, typeValue);
  }
);

Then(
  /^I check the checkbox having (.+) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    await input.checkCheckbox(this, elementType, typeValue);
  }
);

Then(
  /^I uncheck the checkbox having (.+) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    await input.uncheckCheckbox(this, elementType, typeValue);
  }
);

Then(/^I toggle checkbox having (.+) "(.*?)"$/, async function (this: World, elementType: string, typeValue: string) {
  await input.toggleCheckbox(this, elementType, typeValue);
});

Then(
  /^I select radio button having (.+) "(.*?)"$/,
  async function (this: World, elementType: string, typeValue: string) {
    await input.selectRadioButton(this, elementType, typeValue);
  }
);

Then(/^I select "(.*?)" option by (.+) from radio button group having (.+) "(.*?)"$/, async function (this: World, elementType: string, typeValue: string, option: string) {
  await input.selectOptionFromRadioButtonGroup(this, elementType, typeValue, option);
});

Then(/^I send the key (enter|backspace) to the element having (.+) "(.+)"$/,
  async function (this: World, key: string, elementType: string, typeValue: string) {
    switch(key) {
      case 'backspace':
        backspace(this, elementType, typeValue)
        break;
      case 'enter':
        enter(this, elementType, typeValue)
        break;
    }
  })
import { Then } from "@cucumber/cucumber";
import { World } from "./world";
import * as progress from "./functions/progress";

//https://github.com/selenium-cucumber/selenium-cucumber-ruby/blob/1f21a470db8e8655746efd5466783d9e09955df1/lib/selenium-cucumber/progress_steps.rb

Then(/^I (?:should\ )?wait for (\d+) sec(?:onds?)?$/, async function (this: World, seconds: string) {
  progress.wait(this, +seconds * 1000)
});

Then(
  /^I (?:should\ )?wait (\d+) seconds for element having (.+) "(.*?)" to display$/,
  async function (this: World, seconds: string, elementType: string, typeValue: string) {
    progress.waitForElementToDisplay(this, elementType, typeValue, +seconds)
  }
);

Then(
  /^I (?:should\ )?wait (\d+) seconds for element having (.+) "(.*?)" to enable$/,
  async function (this: World, seconds: string, elementType: string, typeValue: string) {
  }
);
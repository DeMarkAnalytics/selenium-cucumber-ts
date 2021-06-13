import { Then } from "@cucumber/cucumber";
import { World } from "./world";
import * as configuration from "./functions/configurations";
//https://github.com/selenium-cucumber/selenium-cucumber-ruby/blob/1f21a470db8e8655746efd5466783d9e09955df1/lib/selenium-cucumber/configuration_steps.rb

Then(/^I print configuration$/, async function (this: World) {
  await configuration.printConfiguration(this);
});

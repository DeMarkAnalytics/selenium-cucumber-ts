import { Then } from "@cucumber/cucumber";
import { World } from "./world";
//https://github.com/selenium-cucumber/selenium-cucumber-ruby/blob/1f21a470db8e8655746efd5466783d9e09955df1/lib/selenium-cucumber/javascript_handling_steps.rb

Then(/^I accept alert$/, async function (this: World) {
  return "pass";
});

Then(/^I dismiss alert$/, async function (this: World) {
  return "pass";
});

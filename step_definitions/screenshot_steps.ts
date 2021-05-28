import { Then } from "@cucumber/cucumber";
import { World } from "./world";
import fs from "fs"
//https://github.com/selenium-cucumber/selenium-cucumber-ruby/blob/1f21a470db8e8655746efd5466783d9e09955df1/lib/selenium-cucumber/screenshot_steps.rb

Then(/^I take a screenshot$/, async function (this: World) {
  const screenshot = await this.driver.takeScreenshot()
  fs.appendFile(
    'screnshots/test.png',
    screenshot,
    function (err) {
      if (err) throw err;
    }
  )
});

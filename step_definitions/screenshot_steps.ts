import { Then } from "@cucumber/cucumber";
import { World } from "./world";
import fs from "fs";

Then(/^I take a screenshot$/, async function (this: World) {
  const screenshot = await this.driver.takeScreenshot();
  fs.appendFile("screnshots/test.png", screenshot, function (err) {
    if (err) throw err;
  });
});

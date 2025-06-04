import { Then } from "@cucumber/cucumber";
import { World } from "./world";
import fs from "fs";

Then(/^I take a screenshot$/, async function (this: World) {
  const screenshot = await this.driver.takeScreenshot();
  this.attach(screenshot, "image/png");
  fs.appendFile("screnshots/test.png", screenshot, function (err) {
    if (err) throw err;
  });
});

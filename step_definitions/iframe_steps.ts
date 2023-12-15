import { Then } from "@cucumber/cucumber";
import { World } from "./world";
import { validateLocater, elementLocator } from "./functions/elements";

// add to selenium-cucumber-ts
Then(
  /^I enter iframe with (id|name|class|xpath|css) "(.*?)"$/,
  async function (this: World, iframeType: string, typeValue: string) {
    validateLocater(iframeType);
    await this.driver.switchTo().frame(await this.driver.findElement(elementLocator(iframeType, typeValue)));
  }
)

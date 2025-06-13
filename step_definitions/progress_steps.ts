import { Then } from "@cucumber/cucumber";
import { World } from "./world";
import * as progress from "./functions/progress";
import { createLogger } from "./functions/debugLogs";
const debugLog = createLogger("progress_steps");

Then(
  /^I (?:should wait|wait) for "(.*)" seconds$/,
  async function (this: World, seconds: string) {
    await this.driver.sleep(parseInt(seconds) * 1000);
  },
);

Then(
  /^I (?:should wait|wait) (\d+) seconds for element having (.+) "(.*?)" to display$/,
  async function (
    this: World,
    seconds: string,
    elementType: string,
    typeValue: string,
  ) {
    await progress.waitForElementToDisplay(
      this,
      elementType,
      typeValue,
      +seconds,
    );
  },
);

Then(
  /^I (?:should wait|wait) (\d+) seconds for element having (.+) "(.*?)" to be located/,
  async function (
    this: World,
    seconds: string,
    elementType: string,
    typeValue: string,
  ) {
    await progress.waitForElementToBeLocated(
      this,
      elementType,
      typeValue,
      +seconds,
    );
  },
);

Then(
  /^I (?:should wait|wait) (\d+) seconds for the page title to be "(.*?)"$/,
  async function (this: World, seconds: string, titleMatch: string) {
    await progress.waitForTitleToBe(this, titleMatch, +seconds);
  },
);

Then(
  /^I set status as pending(?: "(.+?)")?$/,
  async function (this: World, message: string) {
    debugLog(this, "Explicity setting status to pending");
    if (message) console.log("Test is pending", message);
    return "pending";
  },
);

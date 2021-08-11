import { Then } from "@cucumber/cucumber";
import { World } from "./world";
import * as configuration from "./functions/configurations";

Then(/^I print configuration$/, async function (this: World) {
  await configuration.printConfiguration(this);
});

import { After, AfterStep, Before } from "@cucumber/cucumber";
import { World } from "./world";

Before(function (this: World, scenario) {});

AfterStep(async function (this: World) {
  this.attach(this.debugLog);
  this.debugLog = "";
});

After(function (this: World) {
  return this.driver.quit();
});

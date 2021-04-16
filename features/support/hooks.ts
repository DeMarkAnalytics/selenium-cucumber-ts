import { After, Before } from "@cucumber/cucumber";
import { World } from "./world";

Before(function (this: World, scenario) {
});

After(function (this: World) {
  return this.driver.quit();
});

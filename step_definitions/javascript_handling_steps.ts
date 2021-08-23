import { Then } from "@cucumber/cucumber";
import { World } from "./world";

Then(/^I accept alert$/, async function (this: World) {
  return "pending";
});

Then(/^I dismiss alert$/, async function (this: World) {
  return "pending";
});

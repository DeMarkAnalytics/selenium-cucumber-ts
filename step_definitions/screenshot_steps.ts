import { Then } from "@cucumber/cucumber";
import { World } from "./world";
import { takeAndAttachScreenshot } from "./functions/screenshots";

Then(/^I take a screenshot$/, async function (this: World) {
  await takeAndAttachScreenshot(this, "screenshot");
});

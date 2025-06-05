import { Then } from "@cucumber/cucumber";
import { World } from "./world";
import {
  takeAndAttachScreenshot,
  takeAndSaveScreenshot,
} from "./functions/screenshots";

Then(/^I take a screenshot$/, async function (this: World) {
  await takeAndAttachScreenshot(this);
});

Then(
  /^I take a screenshot and save it to "(a file|.+?)"$/,
  async function (this: World, path: string) {
    await takeAndSaveScreenshot(this, path);
  },
);

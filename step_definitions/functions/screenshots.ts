import { World } from "../world";
import createLogger from "./debugLogs";
import fs from "fs";
let debugLog = createLogger("screenshots");

export const takeAndAttachScreenshot = async (self: World): Promise<void> => {
  debugLog(self, `Taking a screenshot and attaching to report`);
  const screenshot = await self.driver.takeScreenshot();
  self.attach(screenshot, "image/png");
};

export const takeAndSaveScreenshot = async (
  self: World,
  path?: string
): Promise<void> => {
  if (!path) {
    path = `screenshots/screenshots/snapshot-${new Date().toString()}.png`;
  }
  const image = await self.driver.takeScreenshot();

  debugLog(self, `Taking screenshot and saving to ${path}`);
  fs.writeFile(path, image, "base64", function (err) {
    if (err) throw err;
  });
};

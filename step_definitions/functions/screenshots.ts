import { World } from "../world";
import createLogger from "./debugLogs";
let debugLog = createLogger("screenshots");

export const takeAndAttachScreenshot = async (
  self: World,
  name: string
): Promise<void> => {
  debugLog(self, `Taking screenshot: ${name}`);
  const screenshot = await self.driver.takeScreenshot();
  self.attach(screenshot, "image/png");
};

import { World } from "../world";
import { debugLog } from "./debug";

export async function printConfiguration(self: World) {
  debugLog("Printing configuration")
  const date = new Date();
  const capibilities = await self.driver.getCapabilities();
  console.info("");
  console.info(`Date: ${date.toUTCString()}`);
  switch (capibilities.getPlatform()) {
    case "ios":
    case "android":
      printMobileConfig(self);
      break;
    default:
      printDesktopConfig(self);
      break;
  }
}

async function printDesktopConfig(self: World) {
  debugLog("printing desktop config")
  console.info(`Platform : ${(await self.driver.getCapabilities()).getPlatform()}`);
  console.info(`Browser  : ${(await self.driver.getCapabilities()).getBrowserName()}`);
  console.info("");
}

// TODO: implement mobile platform items
// https://github.com/selenium-cucumber/selenium-cucumber-ruby/blob/1f21a470db8e8655746efd5466783d9e09955df1/lib/selenium-cucumber/methods/configuration_methods.rb#L4
async function printMobileConfig(self: World) {
  console.info("");
}

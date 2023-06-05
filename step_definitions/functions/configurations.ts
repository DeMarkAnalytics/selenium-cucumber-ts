import { World } from "../world";
let debugLog = require("debug")("configurations");

export async function printConfiguration(self: World) {
  debugLog("Printing configuration");
  const date = new Date();
  const capabilities = await self.driver.getCapabilities();
  console.info("");
  console.info(`Date: ${date.toUTCString()}`);
  switch (capabilities.getPlatform()) {
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
  debugLog("printing desktop config");
  console.info(
    `Platform : ${(await self.driver.getCapabilities()).getPlatform()}`
  );
  console.info(
    `Browser  : ${(await self.driver.getCapabilities()).getBrowserName()}`
  );
  console.info("");
}

// TODO: implement mobile platform items
async function printMobileConfig(self: World) {
  debugLog("printing mobil config");
  console.info(
    `Platform : ${(await self.driver.getCapabilities()).getPlatform()}`
  );
  console.info(
    `Browser  : ${(await self.driver.getCapabilities()).getBrowserName()}`
  );
  console.info("");
}

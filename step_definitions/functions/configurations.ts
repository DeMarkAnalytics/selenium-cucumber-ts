import { World } from "../world";
import createLogger from "./debugLogs";
let debugLog = createLogger("configurations");

export async function printConfiguration(self: World) {
  debugLog(self, "Printing configuration");
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
  debugLog(self, "printing desktop config");
  console.info(
    `Platform : ${(await self.driver.getCapabilities()).getPlatform()}`,
  );
  console.info(
    `Browser  : ${(await self.driver.getCapabilities()).getBrowserName()}`,
  );
  console.info("");
}

// TODO: implement mobile platform items
async function printMobileConfig(self: World) {
  debugLog(self, "printing mobil config");
  console.info(
    `Platform : ${(await self.driver.getCapabilities()).getPlatform()}`,
  );
  console.info(
    `Browser  : ${(await self.driver.getCapabilities()).getBrowserName()}`,
  );
  console.info("");
}

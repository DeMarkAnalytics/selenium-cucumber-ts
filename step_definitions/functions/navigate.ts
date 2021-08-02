import { World } from "../world";
import { elementLocator } from "./elements";
import { waitForElementToBeLocated } from "./progress";
let debugLog = require('debug')('navigate')

export async function navigateTo(self: World, url: string) {
  await self.driver.get(url);
}

export async function navigate(self: World, direction: string) {
  if (direction === "back") {
    debugLog('pressing back button')
    await self.driver.navigate().back();
  } else {
    debugLog('pressing forward button')
    await self.driver.navigate().forward();
  }
}

export async function closeDriver(self: World) {
  debugLog('shutting down')
  self.driver.quit;
}

export async function refreshPage(self: World) {
  debugLog('refresh')
  await self.driver.navigate().refresh();
}

export async function getSystemModifierKey(self: World) {
  const os = await (await self.driver.getCapabilities()).getPlatform().toUpperCase();
  if (os === "WINDOWS" || os === "LINUX") {
    return "control";
  } else if (os === "DARWIN") {
    return "command";
  } else {
    console.log(`Unknown OS type ${os}`);
    process.exit;
    return "fail";
  }
}

export async function hoverOverElement(self: World, elementType: string, typeValue: string) {
  debugLog(`hovering over ${elementType} ${typeValue}`)
  for (var retry = 1; retry <= 2; retry++) {
    try {
      await waitForElementToBeLocated(self, elementType, typeValue, 60000);
      const element = await self.driver.findElement(elementLocator(elementType, typeValue));
      //await self.driver.actions().mouseMove(element).perform();
      await self.driver.actions().move({origin: element}).perform();
      break;
    } catch (x) {
      await self.driver.sleep(1000);
    }
  }
}

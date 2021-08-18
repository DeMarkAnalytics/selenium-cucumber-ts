import { World } from "../world";
let debugLog = require("debug")("javascript");

export async function acceptAlert(self: World, elementType: string, elementValue: string) {
  debugLog("Accepting Alert");
  const alert = await self.driver.switchTo().alert();
  alert.accept();
}

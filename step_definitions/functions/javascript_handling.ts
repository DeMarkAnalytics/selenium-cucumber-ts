import { World } from "../world";
import { debugLog } from "./debug";

export async function acceptAlert(self: World, elementType: string, elementValue: string) {
  debugLog("Accepting Alert")
  const alert = await self.driver.switchTo().alert();
  alert.accept();
}

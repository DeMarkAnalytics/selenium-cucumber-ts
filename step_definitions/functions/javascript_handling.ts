import { World } from "../world";
import createLogger from "./debugLogs";
let debugLog = createLogger("javascript");

export async function acceptAlert(self: World) {
  debugLog(self, "Accepting Alert");
  const alert = await self.driver.switchTo().alert();
  alert.accept();
}

import { World } from "../world";
import createLogger from "./debugLogs";
let debugLog = createLogger("images");

export async function compare(
  self: World,
  actualImageType: string,
  actualImageName: string,
  expectedImageType: string,
  expectedImageName: string,
) {
  debugLog(self, "Pending");
  return "pending";
}

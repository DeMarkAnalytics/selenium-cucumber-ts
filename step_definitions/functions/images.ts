import { World } from "../world";
let debugLog = require("debug")("images");

export async function compare(self: World, actualImageType: string, actualImageName: string, expectedImageType: string, expectedImageName: string) {
  debugLog("Pending");
  return "pending";
}

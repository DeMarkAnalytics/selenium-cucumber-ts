import assert from "assert";
import { By } from "selenium-webdriver";
import { World } from "../world";
import * as page from "./pageAssertions";
let debugLog = require("debug")("images");

export async function compare(self: World, actualImageType: string, actualImageName: string, expectedImageType: string, expectedImageName: string) {
  return "pending";
}

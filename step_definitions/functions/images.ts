import assert from "assert";
import { By } from "selenium-webdriver";
import { World } from "../world";
import * as page from "./pageAssertions";

export async function compare(self: World, actualImageType: string, actualImageName: string, expectedImageType: string, expectedImageName: string) {
  //TODO: https://github.com/selenium-cucumber/selenium-cucumber-ruby/blob/1f21a470db8e8655746efd5466783d9e09955df1/lib/selenium-cucumber/methods/assertion_methods.rb#L202
}

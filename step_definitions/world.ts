import { ThenableWebDriver } from "selenium-webdriver";
import { World as CucumberWorld } from "@cucumber/cucumber";

export class World extends CucumberWorld {
  driver: ThenableWebDriver;
  debugLog: string = "";
}

import { setWorldConstructor, setDefaultTimeout } from "@cucumber/cucumber";
import { Builder } from "selenium-webdriver";
//import firefox from 'selenium-webdriver/firefox'
import chrome from "selenium-webdriver/chrome";
//import { World as restWorld } from "@symbolik/selenium-cucumber-ts/step_definitions/world"
import { World as SeleniumCucumberWorld } from "../../step_definitions/world";

import {
  ICreateAttachment,
  ICreateLog,
} from "@cucumber/cucumber/lib/runtime/attachment_manager";

var chromeOptions = new chrome.Options();

chromeOptions.addArguments("--ignore-certificate-errors");
chromeOptions.addArguments("--allow-running-insecure-content");
chromeOptions.addArguments("--disable-extensions");
chromeOptions.addArguments("--start-maximized");
chromeOptions.addArguments("--headless");

//export class World implements selcucWorld implements restWorld {
export class World implements SeleniumCucumberWorld {
  attach: ICreateAttachment;
  log: ICreateLog;
  parameters: any;
  public driver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .usingServer(process.env.SELENIUM_GRID)
    .build();
}

setWorldConstructor(World);
// timeout set to 15 minutes
setDefaultTimeout(15 * 60 * 1000);

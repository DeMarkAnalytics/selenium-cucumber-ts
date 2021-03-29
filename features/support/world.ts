import { setWorldConstructor, setDefaultTimeout } from "@cucumber/cucumber";
import { Builder } from "selenium-webdriver";
//import firefox from 'selenium-webdriver/firefox'
import chrome from "selenium-webdriver/chrome";

var chromeOptions = new chrome.Options();

chromeOptions.addArguments("--ignore-certificate-errors");
chromeOptions.addArguments("--allow-running-insecure-content");
chromeOptions.addArguments("--disable-extensions");
chromeOptions.addArguments("--start-maximized");

export class World {
  public username: string = "";
  public password: string = "";
  public url: string = "";

  public driver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .usingServer(process.env.SELENIUM_GRID)
    .build();
}

setWorldConstructor(World);
// timeout set to 15 minutes
setDefaultTimeout(15 * 60 * 1000);

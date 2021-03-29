import { After, Before } from "@cucumber/cucumber";
import { World } from "./world";
import * as envLoader from "../fixtures/environments.json";
const envUrls = envLoader as { [key: string]: string };

Before(function (this: World, scenario) {
  //console.log(scenario.gherkinDocument.feature.tags)
  if (!("BDD_ENVIRONMENT" in process.env)) {
    console.log("BDD_ENVIRONMENT env var not set.  see README.md");
    process.exit();
  } else if (!(process.env.BDD_ENVIRONMENT in envLoader)) {
    console.log(`unknown BDD_ENVIRONMENT.  '${process.env.BDD_ENVIRONMENT}'`);
    process.exit();
  } else {
    this.url = envUrls[process.env.BDD_ENVIRONMENT];
  }
});

After(function (this: World) {
  // should delete all test users and their data here
  return this.driver.quit();
});

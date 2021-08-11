import { Then } from "@cucumber/cucumber";
import { World } from "./world";
import * as navigate from "./functions/navigate";

Then(/^I navigate to "(.*)"$/, async function (this: World, url: string) {
  await navigate.navigateTo(this, url);
});

Then(/^I navigate forward"$/, async function (this: World) {
  await navigate.navigate(this, "forward");
});

Then(/^I navigate back"$/, async function (this: World) {
  await navigate.navigate(this, "back");
});

Then(/^I close browser$/, async function (this: World) {
  await navigate.closeDriver(this);
});

Then(/^I resize browser window size to width (\d+) and height (\d+)$/, async function (this: World, width: number, height: number) {
  await this.driver.manage().window().setSize(width, height);
});

Then(/^I maximize browser window$/, async function (this: World) {
  await this.driver.manage().window().maximize();
});

Then(/^I refresh page$/, async function (this: World) {
  await navigate.refreshPage(this);
});

Then(/^I switch to a new window$/, async function (this: World) {
  return "pending";
});

Then(/^I switch to a previous window$/, async function (this: World) {
  return "pending";
});

Then(/^I switch to a main window$/, async function (this: World) {
  return "pending";
});

Then(/^I switch to window having title "(.*?)"$/, async function (this: World, title: string) {
  return "pending";
});

Then(/^I switch to window having url "(.*?)"$/, async function (this: World, url: string) {
  return "pending";
});

Then(/^I close new window$/, async function (this: World) {
  return "pending";
});

Then(/^I switch to main content$/, async function (this: World) {
  return "pending";
});

Then(/^I switch to frame "(.*?)"$/, async function (this: World, frame: string) {
  return "pending";
});

Then(/^I scroll to element having "(.*?)"$/, async function (this: World, content: string) {
  return "pending";
});

Then(/^I scroll to (top|end) of page$/, async function (this: World, location: string) {
  return "pending";
});

Then(/^I hover over element having (.*) "(.*?)"$/, async function (this: World, type: string, element: string) {
  await navigate.hoverOverElement(this, type, element);
});

Then(/^I zoom in page$/, async function (this: World) {
  return "pending";
});

Then(/^I zoom in page$/, async function (this: World) {
  return "pending";
});

Then(/^I zoom out page untill I see element having (.+) "(.*?)"$/, async function (this: World, type: string, element: string) {
  return "pending";
});

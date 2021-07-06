import { By } from "selenium-webdriver";

export function elementLocator(elementType: string, typeValue: string) {
  let retValue = null;
  switch (elementType) {
    case "id":
      retValue = { id: typeValue };
      break;
    case "name":
      retValue = { name: typeValue };
      break;
    case "class":
      retValue = { className: typeValue };
      break;
    case "xpath":
      retValue = { xpath: typeValue };
      break;
    case "css":
      retValue = { css: typeValue };
      break;
    case "link":
      retValue = By.linkText(typeValue);
      break;
    case "partialLink":
      retValue = By.partialLinkText(typeValue);
      break;
  }
  return retValue;
}

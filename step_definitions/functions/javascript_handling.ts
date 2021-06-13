import { World } from "../world";
import { elementLocator } from "./elements";

export async function acceptAlert(self: World, elementType: string, elementValue: string) {
  const alert = await self.driver.switchTo().alert();
  alert.accept();
}

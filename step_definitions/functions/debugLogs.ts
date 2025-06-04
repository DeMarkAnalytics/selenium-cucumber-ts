import { World } from "../world";
import debug from "debug";

export type Logger = (self: World, message: string) => void;

const createLogger = (namespace: string): Logger => {
  const debugLog = debug(namespace);

  return (self: World, message: string) => {
    debugLog(message);
    if (self?.attach) {
      self.attach(message);
    }
  };
};

export default createLogger;

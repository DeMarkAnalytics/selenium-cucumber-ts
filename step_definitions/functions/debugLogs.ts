import { World } from "../world";
import debug from "debug";

export type Logger = (self: World, message: string) => void;

export const createLogger = (namespace: string): Logger => {
  const debugLog = debug(namespace);

  return (self: World, message: string) => {
    debugLog(message);
    self.debugLog = `${self.debugLog}\n${namespace} ${message}`;
  };
};

export default createLogger;

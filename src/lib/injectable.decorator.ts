import {IocContainer} from "./ioc-container";

/**
 * Decorator that register the current class into the ioc container
 * Ensures that the class will be a singleton
 * @param target
 * @constructor
 */
export const Injectable = (target) => {
  const instance = new target();
  const name = instance.constructor.name.toLowerCase();
  IocContainer.INSTANCES[name] = instance;
}

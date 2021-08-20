/**
 * Inversion Of Control container to store class singletons
 */
export class IocContainer {
  static INSTANCES: {name: string, instance}[] = [];
  static findByName(name: string) {
    return IocContainer.INSTANCES[name];
  };
}

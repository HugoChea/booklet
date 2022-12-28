export function throwIfAlreadyLoaded(moduleName: string) {
    throw new Error(
      `${moduleName} has already been loaded. Import ${moduleName} modules in the AppModule only.`
    );
  }
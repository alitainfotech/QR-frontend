export default {
  install: (app, options) => {
    const requireComponent = import.meta.glob("@/components/core/*.vue", {
      eager: true,
    });
    for (const path in requireComponent) {
      const componentName = path.split("/").at(-1).split(".")[0];
      console.log(componentName);
      app.component(componentName, requireComponent[path].default);
    }
  },
};

export default {
  install: (app, options) => {
    const requireComponent = import.meta.glob(
      "@/components/phase_2/core/*.vue",
      {
        eager: true,
      }
    );
    for (const path in requireComponent) {
      const componentName = path.split("/").at(-1).split(".")[0];

      app.component(componentName, requireComponent[path].default);
    }
    const requireCommonComponent = import.meta.glob(
      "@/components/phase_2/common/*.vue",
      {
        eager: true,
      }
    );
    for (const path in requireCommonComponent) {
      const componentName = path.split("/").at(-1).split(".")[0];

      app.component(componentName, requireCommonComponent[path].default);
    }
  },
};

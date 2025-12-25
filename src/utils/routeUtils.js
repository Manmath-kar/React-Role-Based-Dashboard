export const getEnabledPaths = permissions =>
  permissions.flatMap(menu =>
    menu.children.filter(c => c.enabled).map(c => c.path)
  );

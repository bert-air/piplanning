export default {
  routes: [
    { method: 'GET', path: '/global-config', handler: 'global-config.find' },
    { method: 'PUT', path: '/global-config', handler: 'global-config.update' },
    { method: 'DELETE', path: '/global-config', handler: 'global-config.delete' },
  ],
};

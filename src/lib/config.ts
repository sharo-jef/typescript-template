import type { ConfigType } from '../config/type';
import defaultConfig from '../config/default';
import prodConfig from '../config/prod';
import stgConfig from '../config/stg';
import testConfig from '../config/test';

export const config: ConfigType = (() => {
  if (defaultConfig.ENV_NODE_ENV === 'staging') {
    return { ...defaultConfig, ...stgConfig };
  }
  if (defaultConfig.ENV_NODE_ENV === 'production') {
    return { ...defaultConfig, ...prodConfig };
  }
  if (defaultConfig.ENV_NODE_ENV === 'test') {
    return { ...defaultConfig, ...testConfig };
  }
  return defaultConfig;
})();

//////////////////////////////////////////////////////////
//  WebPack config with composition (webpack.academy)
//      This is webpack config framework intended to
//      choose between dev, prod configs and including
//      addons in the configs
//////////////////////////////////////////////////////////
//  author: Jose Quinto - https://blog.josequinto.com
//////////////////////////////////////////////////////////

const errorConstants = require("./error-constants");
const createCommonConfig = require("./webpack.common");
const webpackMerge = require("webpack-merge"); // Similar to Object.assign but with specific order which benefits webpack

const addons = ( /* string | string[] */ addonsArg) => {
  let addons = [...[addonsArg]] // Normalize array of addons (flatten)
    .filter(Boolean); // If addons is undefined, filter it out

  return addons.map((addonName) => require(`./addons/webpack.${addonName}.js`));
};

module.exports = opts => env => {
  console.log('CONFIG', {
    env,
    opts
  });
  if (!env) {
    throw new Error(errorConstants.ERR_NO_ENV_FLAG);
  }
  const commonConfig = createCommonConfig(opts)

  const envConfig = require(`./webpack.${env.env}.js`);

  console.log({
    envConfig
  });
  const mergedConfig = webpackMerge(commonConfig, envConfig, ...addons(env.addons));
  return mergedConfig;
}

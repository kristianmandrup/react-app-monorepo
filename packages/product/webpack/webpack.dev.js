const createConfig = require('./create-config')
const config = createConfig();
console.log(JSON.stringify(config, null, 2));
module.exports = config

const createConfig = require('./create-config')
const config = createConfig('dev')

console.log(JSON.stringify(config, null, 2))
module.exports = config

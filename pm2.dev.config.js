const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || ''

module.exports = {
  apps: [{
    name: require('./package.json').name + (port ? '_' + port : ''),
    script: './build/server.js',
    ignore_watch: [
      '.git',
      '.idea',
      'node_modules',
      'src',
      'var',
      'newrelic_agent.log'
    ],
    watch: ['build', 'src/views', '.env', 'fe_3pie/dist'],
  }],
};

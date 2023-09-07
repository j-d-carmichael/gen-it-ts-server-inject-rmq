module.exports = {
  apps: [{
    name: require('./package.json').name,
    script: './build/server.js',
    instances: 2,
    exec_mode: 'cluster'
  }],
}
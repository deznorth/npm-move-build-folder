
const config = {};

config.isDev = process.env.NODE_ENV != 'production';
config.PORT = this.isDev ? process.env.PORT : 5000;

module.exports = config;
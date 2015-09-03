'use strict';
const Koa = require('koa');
let app = new Koa();

// TODO: read from config/server.json file
const path = require('path');
app.domain = ['localhost', '3000'].join(':');
app.rootPath = path.resolve(path.join(__dirname, '../'));
global.appRoot = app.rootPath;

const server = require('./server');
server.mount(app);
server.routers(app);
server.middleware(app);

// Export composable app
module.exports = app;

// git init 
// .gitignore
// yarn init

const express = require('express');
const helmet = require('helmet')
const logger = require('morgan')
const customMW = require('./customMiddleware')
const supplierRouter = require('./routers/supplier_router')
const itemRouter = require('./routers/item_router')

const server = express();

const PORT = 4000;

server.use(express.json());
server.use(helmet());
server.use(logger('dev'));
// server.use(customMW.gatekeeper);

server.use('/api/suppliers', supplierRouter)
server.use('/api/items', itemRouter)

// 2 resources: suppliers, items



server.listen(PORT, () => {
    console.log('server is running')
})
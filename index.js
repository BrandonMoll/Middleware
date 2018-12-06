// git init 
// .gitignore
// yarn init

const express = require('express');
const helmet = require('helmet')
const logger = require('morgan')
const customMW = require('./customMiddleware')
const supplierRouter = require('./routers/supplier_router')
const itemRouter = require('./routers/item_router')

process.env

const server = express();
const PORT = process.env.PORT || 4000;

server.use(express.json());
server.use(helmet());
server.use(logger('dev'));
// server.use(customMW.gatekeeper);

server.use('/api/suppliers', supplierRouter)
server.use('/api/items', itemRouter)

// 2 resources: suppliers, items
server.get('/', (req, res) => {
    res.send('we are live')
})


server.listen(PORT, () => {
    console.log('server is running')
})
const express = require('express')

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
    res.json({ suppliers: [
        {name: 'coffee roaster', id: 1},
        'food vendor',
        'tea disributor'
    ]})
 });

router.post('/', (req, res) => {
    const supplier = req.body;
    res.status(201).json({ created: supplier })
 });

 router.delete('/:id', (req, res) => {
    const {id} = req.params
    res.json({ deleted: id })
 });



 module.exports = router;
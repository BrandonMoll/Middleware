const express = require('express');

const router = express.Router();

router.use(express.json());


    
router.get('/', (req, res) => {
    res.json({ items: [
        { name: 'coffee beans', s_id: 1},
        { name: 'more beans', s_id: 2},
        { name: 'teas', s_id: 3}
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
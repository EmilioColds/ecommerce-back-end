const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

router.get('/', async (req, res) => {
  
});

router.get('/:id', async (req, res) => {
  
});

router.post('/', async (req, res) => {
  // create a new tag
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;

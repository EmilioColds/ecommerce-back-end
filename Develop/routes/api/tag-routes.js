const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const prodData = await Product.findAll({
      include: [{ model: Category }, { model: Tag }],
    });
    res.status(200).json(prodData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const prodData = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag }],
    });
    if (!prodData) {
      res.status(404).json({ message: "There's no ID for that product." });
      return;
    }
    res.status(200).json(prodData);
  } catch (err) {
    res.status(500).json(err);
  }
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

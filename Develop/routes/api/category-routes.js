const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const categData = await Category.findAll({
      include: [{ model: Product }],
    });

    res.status(200).json(categData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!categData) {
      res.status(404).json({ message: "There's no ID for that category." });
      return;
    }
    res.status(200).json(categData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;

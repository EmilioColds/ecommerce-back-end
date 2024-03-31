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

router.post('/', async (req, res) => {
  try {
    const categData = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(categData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const categData = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    if (!categData) {
      res.status(404).json({ message: "There's no ID for that category."});
      return;
    }
    res.status(200).json(categData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const categData = await Category.destroy({
      where: { id: req.params.id },
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

module.exports = router;

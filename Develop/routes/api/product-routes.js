const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
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

// get one product
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

// create new product
router.post('/', async (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */

  try {
    const prod = await Product.create(req.body);
    if (req.body.tagIds.length) {
      const productTagIdArr = req.body.tagIds.map((tag_id) => {
        return {
          product_id: product.id,
          tag_id,
        };
      });
      await ProductTag.bulkCreate(productTagIdArr);
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update product
router.put('/:id', async (req, res) => {
  try {
    await Product.update(req.body, {
      where: { id: req.params.id },
    });

    const prodTags = await ProductTag.findAll({
      where: { product_id: req.params.id }
    });
    const prodTagsId = prodTags.map(({ tag_id }) => tag_id);
    const newProdTags = req.body.tagIds
    .filter((tag_id) => !prodTagsId.includes(tag_id))
    .map((tag_id) => {
      return {
        product_id: req.params.id,
        tag_id,
      };
    });
    const prodTagsRemove = prodTags
    .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
    .map(({ id }) => id);

    await ProductTag.destroy({ 
      where: { id: prodTagsRemove }
    });
    await ProductTag.bulkCreate(newProdTags);

    res.status(200).json({ message: "The product has been updated." });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const prodData = await Product.destroy({
      where: { id: req.params.id },
    });
    if (!prodData) {
      res.status(404).json({ message: "There's no product for that ID." });
      return;
    }
    res.status(200).json(prodData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

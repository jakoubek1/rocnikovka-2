const express = require('express');
const router = express.Router();

const itemsRouter = require("../controllers/item")

router.get('/', itemsRouter.getAllItems);

router.get('/:id', itemsRouter.getItemById);

router.post('/', itemsRouter.createItem);

router.put('/:id', itemsRouter.updateItem);

router.delete('/:id', itemsRouter.deleteItem);

module.exports = router;

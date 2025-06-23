const Item = require("../models/item");

exports.getAllItems = async (req, res, next) => {
  try {
    let queryName = req.query.name;
    console.log(queryName);
    let data;
    if (queryName)
      data = await Item.find({ name: { $regex: queryName, $options: 'i' } });
    else
      data = await Item.find();

    if (data && data.length !== 0) {
      return res.status(200).send({
        message: "Items found",
        payload: data,
      });
    }
    res.status(404).send({ message: "Items not found" });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getItemById = async (req, res, next) => {
  try {
    const data = await Item.findById(req.params.id);
    if (data) {
      return res.status(200).send({
        message: "Item found",
        payload: data,
      });
    }
    res.status(404).send({ message: "Item not found" });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createItem = async (req, res, next) => {
  try {
    const data = new Item({
      name: req.body.name,
      material: req.body.material,
      gram: req.body.gram,
      delivery: req.body.delivery,
      color: req.body.color,
      price: req.body.price,
      image: req.body.image,
    });

    const result = await data.save();
    if (result) {
      return res.status(201).send({
        message: "Item created",
        payload: result,
      });
    }
    res.status(500).send({ message: "Item not created" });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateItem = async (req, res, next) => {
  try {
    const data = {
      name: req.body.name,
      material: req.body.material,
      gram: req.body.gram,
      delivery: req.body.delivery,
      color: req.body.color,
      price: req.body.price,
      image: req.body.image,
    };

    const result = await Item.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        message: "Item updated",
        payload: result,
      });
    }
    res.status(500).send({ message: "Item not updated" });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    const result = await Item.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        message: "Item deleted",
        payload: result,
      });
    }
    res.status(500).send({ message: "Item not deleted" });
  } catch (err) {
    res.status(500).send(err);
  }
};

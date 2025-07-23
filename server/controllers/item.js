const Item = require("../models/item");

exports.getAllItems = async (req, res, next) => {
  try {
    const data = await Item.find();
    if (data && data.length !== 0) {
      return res.status(200).json({
        message: "Items found",
        payload: data,
      });
    }
    return res.status(404).json({
      message: "Items not found",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.getItemById = async (req, res, next) => {
  try {
    const data = await Item.findById(req.params.id);
    if (data) {
      return res.status(200).json({
        message: "Item found",
        payload: data,
      });
    }
    return res.status(404).json({
      message: "Item not found",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.createItem = async (req, res, next) => {
  try {
    const data = new Item({
      name: req.body.name,
      brand: req.body.brand,
      color: req.body.color,
      price: req.body.price,
      image: req.body.image,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).json({
        message: "Item created",
        payload: result,
      });
    }
    return res.status(500).json({
      message: "Item creation failed",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.updateItem = async (req, res, next) => {
  try {
    const data = {
      name: req.body.name,
      brand: req.body.brand,
      color: req.body.color,
      price: req.body.price,
      image: req.body.image,
    };
    const result = await Item.findByIdAndUpdate(req.params.id, data, { new: true });
    if (result) {
      return res.status(200).json({
        message: "Item updated",
        payload: result,
      });
    }
    return res.status(404).json({
      message: "Item not found to update",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    const result = await Item.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).json({
        message: "Item deleted",
        payload: result,
      });
    }
    return res.status(404).json({
      message: "Item not found to delete",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};

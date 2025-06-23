const mongoose = require("mongoose");
 
const schema = mongoose.Schema({
    name: {type: String, required: true},
    material: {type: String, required: true},
    gram: {type: String, required: true},
    delivery: {type: Number, required: true},
    color: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
});
 
module.exports = mongoose.model("Item", schema);
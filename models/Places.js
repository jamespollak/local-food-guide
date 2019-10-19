const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placesSchema = new Schema({
  name: String,
  rating: Number,
  lat: Number,
  lng: Number
});

const Places = mongoose.model("Places", placesSchema);

module.exports = Places;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: { type: String, required: true },
  email: String,
  //user can have many posts - one to many relationship
  places: [{ type: Schema.Types.ObjectId, ref: "places" }],
  profileImg: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;

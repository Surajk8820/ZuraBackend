const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String },
  email: { type: String },
  smartWallet: { type: String },
  personalWallet: { type: String },
  hasHouse: { type: Boolean },
  hasHash: { type: Boolean },
  profileImg: { type: String },
  coverImg: { type: String },
  karmabalancea: { type: Number },
  treesPlanted: { type: Number },
  carbonOffset: { type: Number },
  accCreated: { type: String },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = {
  UserModel,
};

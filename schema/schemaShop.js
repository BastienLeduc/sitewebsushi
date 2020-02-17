const mongoose = require("mongoose");
const jwt = require("jwt-simple");
const config = require("../config/config");

const shopSchema = mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true
    },
    num: {
      type: String,
      required: true,
      unique: true
    },
    contenu: [],
    prix: {
      type: Number,
      defaut: "To define"
    },
    datecollecte: Timestamp
  },
  {
    timestamps: {
      createdAt: "created_at"
    }
  }
);

shopSchema.methods = {
  getToken: function () {
    return jwt.encode(this, config.secret);
  }

};

module.exports = mongoose.model("commandes", shopSchema);
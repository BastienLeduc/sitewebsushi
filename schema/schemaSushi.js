const mongoose = require("mongoose");
const jwt = require("jwt-simple");
const config = require("../config/config");

const sushiSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      defaut: "To define"
    },
    nom: {
      type: String,
      trim: true,
      unique: true,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    ingredient1: {
      type: String
    },
    ingredient2: {
      type: String
    },
    ingredient3: {
      type: String
    },
    ingredient4: {
      type: String
    },
    ingredient5: {
      type: String
    },
    prix: {
      type: Number,
      defaut: "To define"
    },
    img: {
      type: String
    },
    quantity: {
      type: Number,
      defaut: "0"
    }
  },
  {
    timestamps: {
      createdAt: "created_at"
    }
  }
);

sushiSchema.methods = {

  getToken: function () {
    return jwt.encode(this, config.secret);
  }

};

module.exports = mongoose.model("sushis", sushiSchema);
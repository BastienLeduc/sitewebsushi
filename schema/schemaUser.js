
const mongoose = require("mongoose");
const passwordHash = require("password-hash");
const jwt = require("jwt-simple");
const config = require("../config/config");

const userSchema = mongoose.Schema(
  {
    id: {
      type: String
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    nom: {
      type: String
    },
    prenom: {
      type: String
    },
    adress: {
      type: String
    },
    codepostal: {
      type: String
    },
    ville: {
      type: String
    },
    numtel: {
      type: String
    }
  },
  { timestamps: { createdAt: "created_at" } }
);

userSchema.methods = {
  authenticate: function(password) {
    return passwordHash.verify(password, this.password);
  },
  getToken: function() {
    return jwt.encode(this, config.secret);
  }
};

module.exports = mongoose.model("User", userSchema);
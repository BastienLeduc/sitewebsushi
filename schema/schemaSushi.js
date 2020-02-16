const mongoose = require("mongoose");
const jwt = require("jwt-simple");
const config = require("../config/config");

const sushiSchema = mongoose.Schema(
  {
    nom: {
      type: String,
      trim: true,
      unique: true,
      required: true
    },
    type:{
      type:String,
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
      type:Number,
      defaut : "To define"
    },
    nombre : {
      type: Number,
      defaut : "2"
    }
  },
  { 
      timestamps: { 
          createdAt: "created_at" 
        } 
    }
);

sushiSchema.methods = {
  getSushiByNom: function(nomsushi) {
    return this.model('sushis').find({ nom: this.nom }, nomsushi);
  },
  getSushiByType: function(typesushi) {
    return this.model('sushis').find({ type: this.type }, typesushi);
  },
  getToken: function() {
    return jwt.encode(this, config.secret);
  }
  
};

module.exports = mongoose.model("sushis", sushiSchema);
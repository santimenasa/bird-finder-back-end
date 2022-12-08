const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const birdSchema = new Schema(
  {
    species: {
      type: String,
      require: true
    },
    gender: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    dateOfCatch: {
      type: Date,
      require: true
    },
    catchYourSelf: {
      type: Boolean
    },
    image: {
      type: String,
      require: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bird",birdSchema ); 

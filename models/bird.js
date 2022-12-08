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
      type: Number,
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

module.exports = mongoose.model("Book", bookSchema); // se va a guardar como books

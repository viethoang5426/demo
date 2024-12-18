const mongoose = require("mongoose");

const schools = new mongoose.Schema(
  {
    schoolName: {
      type: String,
      required: true,
    },
    schoolAddress: {
      type: String,
      required: true,
    },
    schoolEmail: {
      type: String,
      required: true,
    },
    schoolPhone: {
      type: String,
      required: true,
    },
    schoolPrincipal: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("schools", schools);

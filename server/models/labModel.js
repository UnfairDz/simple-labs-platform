const mongoose = require("mongoose");

const labModelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please tell us the lab name"],
    },
    description: {
      type: String,
      required: [true, "Please tell us the lab description"],
    },
    technology: {
      type: String,
      required: [true, "Please tell us the lab technology"],
    },
    startDate: {
      type: Date,
      required: [true, "Please tell us the start date of the lab"],
    },
    endDate: {
      type: Date,
      required: [true, "Please tell us the end date of the lab"],
    },
    capacity: {
      type: Number,
      required: [true, "Please tell us how many peapole can enroll in this lab"],
    }
  },
  {timestamps:true}
);


const Lab = mongoose.model("Lab", labModelSchema);

module.exports = Lab;

const mongoose = require("mongoose");

const labModelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    technology: {
      type: String,
      required: [true, "Please tell us the lab technology"],
    },
    labCreationDate: {
      type: Date,
      default: Date.now(),
    },
    startDate: {
      type: Date,
      required: [true, "Please tell us the start date of the lab"],
    },
    endDate: {
      type: Date,
      required: [true, "Please tell us the end date of the lab"],
    },
  },
);


const Lab = mongoose.model("Lab", labModelSchema);

module.exports = Lab;

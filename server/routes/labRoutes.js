const express = require("express");
const LabController = require("../controllers/labController");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(LabController.getAllLab)
  .post(
    LabController.createLab
  );

router
  .route("/:id")
  .get(LabController.getLab)
  .put(
    LabController.updateLab
  )
  .delete(
    LabController.deleteLab
  );

module.exports = router;

const Lab = require("../models/labModel");
const factory = require("./handlerFactory");
// const catchAsync = require('./../utils/catchAsync');

exports.getAllLab = factory.getAll(Lab);
exports.getLab = factory.getOne(Lab);
exports.createLab = factory.createOne(Lab);
exports.updateLab = factory.updateOne(Lab);
exports.deleteLab = factory.deleteOne(Lab);

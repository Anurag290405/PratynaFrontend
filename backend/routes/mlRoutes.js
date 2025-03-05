const express = require("express");
const { classifyComplaint } = require("../controllers/mlController");

const router = express.Router();

router.post("/classify", classifyComplaint);

module.exports = router;

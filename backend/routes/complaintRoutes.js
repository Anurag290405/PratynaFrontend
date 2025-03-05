const express = require("express");
const router = express.Router();
const { createComplaint } = require("../controllers/complaintController");
const { protect } = require("../middleware/authMiddleware");

router.post("/submit", protect, createComplaint);  // Submit a complaint

module.exports = router;

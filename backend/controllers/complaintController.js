const createComplaint = require("../models/Complaint");
const sendEmail = require("../utils/sendEmail");
const { classifyComplaint } = require("../controllers/mlController");

// Function to map categories to authority emails
// const getAuthorityEmail = (category) => {
//     const emailMap = {
//         "Road Issue": "road@authority.com",
//         "Water Supply": "water@authority.com",
//         "Electricity": "electricity@authority.com",
//         "Garbage": "garbage@authority.com",
//         "Other": "other@authority.com"
//     };
//     return emailMap[category] || "default@authority.com";
// };

// 📌 Create Complaint API
// const createComplaint = async (req, res) => {
//     try {
//         const { description } = req.body;
//         const userId = req.user.id; // Get user from JWT

//         // Classify complaint category using ML Model
//         const category = await classifyComplaint(description);

       
//         // Save complaint in Database
//         const complaint = await Complaint.create({
//             user: userId,
//             description,
//             category,
//             sentimentScore
//         });

//         // 📧 Send Email Notification to the correct authority
//         const authorityEmail = getAuthorityEmail(category);
//         await sendEmail(authorityEmail, "New Complaint Received", `Complaint: ${description}`);

//         res.status(201).json({
//             success: true,
//             message: "Complaint submitted successfully",
//             complaint
//         });

//     } catch (error) {
//         console.error("Error in createComplaint:", error);
//         res.status(500).json({
//             success: false,
//             message: "Server Error",
//             error: error.message
//         });
//     }
// };

module.exports = { createComplaint };

const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["Road Issue", "Water Supply", "Electricity", "Garbage", "Other"]  // Example categories
    },
    sentimentScore: {
        type: Number,  // Stores sentiment analysis score
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Resolved"],
        default: "Pending"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Complaint = mongoose.model("Complaint", complaintSchema);
module.exports = Complaint;

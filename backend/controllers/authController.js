const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// Secret key from .env file

const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
  expiresIn: "1h", // Set an expiry time
});

console.log("Generated Token:", token);

  

// Register User
exports.register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        user = new User({ name, email, password: hashedPassword, role });
        await user.save();

        // Generate JWT Token
        const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
            expiresIn: "1h",
        });

        res.status(201).json({ message: "User registered successfully", token, user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Login User
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Generate JWT Token
        const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
            expiresIn: "1h",
        });

        res.json({ message: "Login successful", token, user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

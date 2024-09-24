const User = require("../db/models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const { name, email, password, profile, publicId } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const securePassword = await bcrypt.hash(password, 10);
    user = await User.create({
      name,
      email,
      password: securePassword,
      profile,
      publicId,
    });

    await user.save();
    return res
      .status(200)
      .json({ success: true, message: "User created successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "internal Server error" });
  }
};









module.exports = { signup };

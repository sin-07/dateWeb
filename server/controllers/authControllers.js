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

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET,{
      expiresIn: "1h",
    });

    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        profile: user.profile,
        publicId: user.publicId,
        favourites: user.favourites,
        disliked: user.dislikes,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "internal Server error" });
  }
};



const checkAuth = async (req, res) => {
  const reqId = req.id;
  try {
    const user = await User.findById(reqId).select("-password");
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};




module.exports = { signup, login, checkAuth };

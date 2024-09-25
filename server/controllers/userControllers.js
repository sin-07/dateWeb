const  User  = require("../db/models/user");

const getUsers = async (req, res) => {
  try {
    let users = await User.find({});
    if (!users) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }
    return res.status(200).json({ success: true, data: users });
    
    
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};



module.exports =  {getUsers} ;
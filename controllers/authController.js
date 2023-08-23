const bcrypt = require('bcryptjs');
const User = require('../models/User');
const authMiddleware = require('../middlewares/authMiddleware');
//signup
exports.signup = async (req, res) => {
  const { name, email, phoneNumber, password, emergencyContacts, customMessages } = req.body;
  try {
    //check if user exists
    const existingUser = await User.findOne({email});

    if (existingUser) {
      return res.status(400).send('User with this email already exists. Please Sign In.')
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //new user object
    const newUser = new User({
      name,
      email,
      phoneNumber,
      password: hashedPassword,
      emergencyContacts,
      customMessages
    });

    //save
    await newUser.save();
    res.status(201).send('New User Registered Successfully');

    //send email confirmation
    authMiddleware.signupSuccess(email);
    
    } catch (err) {
    res.status(500).send('Problem with signup');
    console.error(err.message);
  }
}
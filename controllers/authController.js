const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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
    authMiddleware.signupSuccess(name, email);
    
    } catch (err) {
    res.status(500).send('Problem with signup');
    console.error(err.message);
  }
}

//signin
exports.signin = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({email});

    if(!user) {
      return res.status(404).send('User not found. Check your email')
    }

    //compare password
    const isPasswordValid = await bcrypt.compare(password.trim(), user.password)

    if (!isPasswordValid) {
      return res.status(404).send('Password is wrong');
    }

    const token = jwt.sign({userId: user._id}, 'secret', {expiresIn: '1h'});

    return res.status(200).json({token, user: {name: user.name, email: user.email}});
    
  } catch (err) {
    res.status(500).send('Problem with signin. Try again');
    console.error(err.message);
  }
}
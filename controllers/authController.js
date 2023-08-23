const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const transporter = require('../middlewares/emailMiddleware');

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
    const mailOptions = {
    from: '"Cycle Safe" <' + process.env.email + '>',
    to: email,
    subject: "Account Created Successfully",
    text: `Hi ${name}. Welcome to Cycle Safe. Lets empower you with SOS and Peace of Mind.`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
    
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

    const token = jwt.sign({_id: user._id}, 'secret');

    return res.status(200).json({token, user: {name: user.name, email: user.email}});
    
  } catch (err) {
    res.status(500).send('Problem with signin. Try again');
    console.error(err.message);
  }
}


const User = require('../models/User');
const transporter = require('../middlewares/emailMiddleware');

exports.imsafe = async (req, res) => {
    const userId = req.user._id;
    const relationship = req.params.relationship;
  try {
    //find user by id
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send('User not found');
    }

    // Get the custom message for the specified relationship
    const customMessage = user.customMessages.find(msg => msg.relationship === relationship.toLowerCase());

    if (!customMessage) {
      return res.status(404).json({ message: 'Custom message not found for this relationship' });
    }

    // mail logic
    const mailOptions = {
      from: '"Cycle Safe" <' + process.env.email + '>',
      to: customMessage.email, 
      subject: 'I\'m Safe!',
      text: `Hi ${customMessage.name},\nI just wanted to let you know that I'm safe and sound. ${customMessage.content}\n\nBy,\n${user.name} \n\n\nSend with care from Cycle Safe App.`
    };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email: ", error);
    } else {
      console.log(`Email sent to ${customMessage.name}. `, info.response);
    }
  });

  res.status(200).json({message: "Email send successfully"});

  } catch (err) {
    res.status(500).send('error sending imsafe message')
    consol.error(err.message);
  }
}
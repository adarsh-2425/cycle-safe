const twilio = require('twilio');
const User = require('../models/User');

exports.sos = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send('User not found');
    }

    const userLocation = {
      latitude: 10.1632,
      longitude: 76.6413
    }

    const helpMessage = `SOS! I'm ${user.name}. I need help at: Latitude ${userLocation.latitude}, Longitude ${userLocation.longitude}.`;

    const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

    // Loop through user's emergency contacts and send SOS message
    for (const contact of user.emergencyContacts) {
      twilioClient.messages.create({
        to: contact.phoneNumber,
        from: process.env.TWILIO_PHONE_NUMBER,
        body: helpMessage
      });
    }

    res.status(200).json({ message: 'SOS messages sent successfully' });
    
  } catch (err) {
    res.status(500).send('Problem with sos code. Let me send sos to chatGPT');
    console.error(err.message);
  }
}
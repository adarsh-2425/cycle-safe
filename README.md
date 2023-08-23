# Cycling SOS App Documentation

## Overview

The Cycling SOS App is designed to provide safety features for cyclists, allowing them to send SOS messages and mark themselves as safe. The backend of the app is built using Node.js, Express, MongoDB, and Twilio for SMS functionality.

## Features

1. Send SOS with predefined message as text message using Twilio.
2. "I'm Safe" button to mark the user as safe and send custom emails.
3. User authentication and authorization using JWT.
4. User registration and login with bcrypt for password hashing.
5. Ability to update user information and manage custom messages.

## Routes

### Authentication Routes

- `POST /api/signup`: Register a new user.
- `POST /api/login`: Authenticate user and generate JWT token.

### User Routes

- `GET /api/users/id/:userid`: Retrieve user information by ID.
- `GET /api/users`: Retrieve a list of all users.
- `PUT /api/users/:userid`: Update user information by ID.
- `DELETE /api/users/:userid`: Delete user by ID.
- `POST /api/users/imsafe/:relationship`: Mark user as safe and send custom email.

### SOS Routes

- `POST /api/sos`: Send SOS messages to emergency contacts.

### Custom Messages Routes

- `POST /api/custom-messages`: Add a new custom message.
- `PUT /api/custom-messages/:messageid`: Update custom message by ID.
- `DELETE /api/custom-messages/:messageid`: Delete custom message by ID.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/cycling-sos-app.git`
2. Install dependencies: `npm install`
3. Set environment variables: Create a `.env` file with necessary configurations.

## Usage

1. Start the server: `npm start`
2. Access the API via `http://localhost:3000/api/`

## Contributing

Contributions are welcome! Feel free to fork the repository, make changes, and submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

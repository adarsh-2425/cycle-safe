# Cycling Safe SOS App Documentation

## Overview

The Cycling Safe SOS App is designed to provide safety features for cyclists, allowing them to send SOS messages and mark themselves as safe. The backend of the app is built using Node.js, Express, MongoDB, Twilio for SMS functionality and NodeMailer for email functionality.

## Features

1. Send SOS with predefined message as text message using Twilio.
2. "I'm Safe" api to send handcrafted emails to your favorite people.
3. User authentication and authorization using JWT.
4. User registration and login with bcrypt for password hashing.
5. Ability to update user information and manage custom messages.

## Routes

### Authentication Routes

- `POST /api/signup`: Register a new user.
- `POST /api/signin`: Authenticate user and generate JWT token.

### User Routes

- `GET /api/users/id/:id`: Retrieve user information by ID.
- `GET /api/users`: Retrieve a list of all users.
- `PUT /api/users//update/:id`: Update user information by ID.
- `DELETE /api/users/delete/:id`: Delete user by ID.


### SOS Routes

- `POST /api/sos`: Send SOS messages to emergency contacts.

### Custom Messages Routes

- `POST /api/imsafe:/relationship`: Send a custom email to your favorite people while cycling.

## Installation

1. Clone the repository: `git clone https://github.com/adarsh-2425/cycling-safe.git`
2. Install dependencies: `npm install`
3. Set environment variables: Create a `.env` file with necessary configurations.

## Usage

1. Start the server: `npm start`
2. Access the API via `http://localhost:3000/api/`

## Contributing

Contributions are welcome! Feel free to fork the repository, make changes, and submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

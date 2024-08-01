# Project Description: Auth Application (Server)

## Overview

The Auth Application project is a server-side application designed to handle user authentication and management. It includes features for user registration, email activation, login, logout, password reset, and profile management. The application is built using Express.js and integrates various libraries for enhanced functionality and security.

## Technologies Used

The Auth Application utilizes modern web technologies to provide a secure and efficient authentication system. Key technologies and libraries incorporated into the project include:

- **Express.js:** Used for building the server-side application and handling routing.
- **Sequelize:** An ORM for managing the database, including user data and authentication tokens.
- **PostgreSQL:** The relational database used to store user information.
- **bcrypt:** Used for hashing passwords to enhance security.
- **jsonwebtoken:** Used for generating and verifying JSON Web Tokens (JWT) for user authentication.
- **nodemailer:** Used for sending activation and password reset emails.
- **uuid:** Generates unique identifiers for users and tokens.
- **dotenv:** Manages environment variables.
- **nodemon:** Automatically restarts the server during development when code changes are detected.
- **moment:** Manages date and time formatting.
- **cookie-parser:** Parses cookies sent by clients.
- **cors:** Enables Cross-Origin Resource Sharing.

## Technologies Used

Features

1. **User Registration:**
   Allows users to register with name, email, and password, enforcing password rules and sending an activation email.
2. **Email Activation:**
   Users can activate their account via an email link, redirecting to their profile page upon successful activation.
3. **Login:**
   Users can log in with valid credentials. If the user is not active, they are prompted to activate their email.
4. **Logout:**
   Authenticated users can log out, and are redirected to the login page.
5. **Password Reset:**
   Users can request a password reset, receive an email with instructions, and reset their password via a confirmation page.
6. **Profile Management:**
   Authenticated users can change their name, password, and email (with notification to the old email).

## Error Handling

A 404 page is displayed for all other routes.

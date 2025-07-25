# Full-Stack-Authentication-System-with-Spring-Boot-React-

## Frontend – ReactJS Setup

This project uses ReactJS for the frontend with routing, context-based state management, Bootstrap styling, and user feedback using react-toastify.

### Key Technologies and Libraries Used
 - React Router DOM	
 - Bootstrap	
 - Bootstrap Icons	
 - React Toastify	
 - React axios

### Pages and Routes
 - Public or protected landing page after login
  - Route : /
  - Component : Home.jsx
 - User authentication with form
  - Route : /login
  - Component : Login.jsx	
 - Password reset using email OTP
  - Route : /reset-password
  - Component : ResetPassword.jsx	
 - OTP verification for email confirmation 
  - Route : /email-verify
  - Component : EmailVerify.jsx

						
## Backend - Spring Boot Setup

This project uses ReactJS for the frontend with routing, context-based state management, Bootstrap styling, and user feedback using react-toastify.This Spring Boot backend provides secure authentication using JWT, with support for login, logout, registration, password reset via OTP, and email verification. Below is a summary of key features implemented in the AuthController and ProfileController.

### Features
 - User Registration
   - Registers new users via /register.
   - Sends a welcome email on successful signup.

 - User Login
   - Authenticates user credentials via /login.
   - Returns a JWT token and sets it in an HTTP-only cookie for secure session handling.

 - JWT-based Authentication
   - Protected routes check for valid JWT in cookies.
   - /is-authenticated endpoint checks if a user is currently logged in.

 - Logout
   - Clears the JWT cookie via /logout endpoint.

 - Email OTP Verification
  - /send-otp: Sends OTP to user email for account verification.
  - /verify-email: Verifies the OTP sent to the registered email.

 - Password Reset via OTP
  - /send-reset-otp: Sends OTP to registered email for password reset.
  - /reset-password: Resets the password after verifying OTP.

### Controllers Used
 - AuthController
  - POST /login – Authenticates user and sets JWT cookie.
  - GET /is-authenticated – Checks if user is authenticated.
  - POST /send-reset-otp – Sends OTP for password reset.
  - POST /reset-password – Verifies OTP and resets password.
  - POST /send-otp – Sends OTP for email verification.
  - POST /verify-email – Verifies OTP for email confirmation.
  - POST /logout – Logs the user out by clearing JWT cookie.

 - ProfileController
  - POST /register – Handles user registration and sends welcome email.
  - GET /profile – Returns profile data for the currently logged-in user.

### Security
 - Uses Spring Security with AuthenticationManager and UserDetailsService.
 - JWT Tokens are securely stored in HTTP-only cookies with SameSite=Strict policy.
 - Account disabling and bad credentials are gracefully handled with clear error responses.

 
## Author
### Aditya Kunwar
Full Stack Developer | Passionate about building scalable and intelligent web apps
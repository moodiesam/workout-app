# Workout Tracker App

## Description
The Workout Tracker App is a full-stack application designed to help users create accounts, build custom workout routines, and browse and save routines created by other users. It provides a comprehensive platform for fitness enthusiasts to manage and share their workout plans.

## Features
- User authentication and account management
- Create and customize workout routines
- Browse and save routines created by other users
- Responsive design for optimal use on any device

## Installation

### Prerequisites
- Node.js
- MongoDB

### Backend
1. Clone the repository:
    ```bash
    git clone https://github.com/moodiesam/workout-tracker-app.git
    cd workout-tracker-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the `backend` directory with the following variables:
    ```plaintext
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Start the backend server:
    ```bash
    npm run serverstart
    ```

### Frontend
1. Navigate to the frontend directory and install dependencies:
    ```bash
    cd frontend
    npm install
    ```

2. Start the frontend development server:
    ```bash
    cd ..
    npm run client
    ```

## Usage
1. Visit the hosted application at [Workout Tracker App](https://sam-workout-app.adaptable.app/).
2. Create an account or log in if you already have one.
3. Start building your custom workout routines or browse routines created by other users.
4. Save routines to your account for easy access.

## Technologies Used
- **MongoDB:** Database for storing user data and workout routines.
- **Express.js:** Backend framework for building the REST API.
- **React:** Frontend library for building the user interface.
- **Node.js:** JavaScript runtime for the backend server.

## Contributing
1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## Contact
For any questions or feedback, feel free to contact me through github.

---

Thank you for using the Workout Tracker App! Happy exercising!

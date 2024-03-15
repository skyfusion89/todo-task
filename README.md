# To-Do Task Application

This To-Do Task pplication is built using Node.js, Express, MongoDB, and JWT for authentication. It allows users to manage their todo lists with operations including creating, reading, updating, and deleting tasks.

## Installation

### Prerequisites

- Node.js (Preferably the latest LTS version)
- MongoDB (Local installation or MongoDB Atlas account)
- Git (Optional, for cloning the repository)

### Steps

1. **Clone the repository (optional):**
   
   If you have Git installed, you can clone the repository using the following command:
    ```
    git clone https://your-repository-url-here.git
    ```
    Alternatively, you can download the source code directly from the repository page.

2. **Install dependencies:**

    Navigate to the project directory and install the required dependencies:
    ```
    cd todo-task
    npm install
    ```
3. **Set up environment variables:**

    Create a `.env` file in the root of your project directory. Add the following variables:
    ```
    PORT=3000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```
    Replace `your_mongodb_connection_string` with your actual MongoDB connection string and `your_jwt_secret` with a secret string for JWT signing.

4. **Start the application:**

    Run the following command to start the application:
    ```
    npm start
    ```
## Testing the Application

To run tests, ensure you have set `NODE_ENV=test` in your `.env` file or modify the test script in `package.json` to set the environment variable temporarily. Use the following command to run tests:
```
npm test
```
Make sure your MongoDB service is running before executing tests.

## Using the Application

### User Registration and Authentication

- **Register a User:**

  Send a POST request to `/api/auth/register` with a JSON body containing `email` and `password`.

- **Login:**

  Send a POST request to `/api/auth/login` with the same `email` and `password` used for registration.

### Managing Tasks

Use the token received upon login for authentication by including it in the Authorization header as `Bearer <token>`.

- **Create a Task:**

  Send a POST request to `/api/tasks` with a JSON body containing `title`, `description`, `dueDate`, and `status`. Include the Authorization header.

- **List All Tasks:**

  Send a GET request to `/api/tasks`. Include the Authorization header.

- **View a Single Task:**

  Send a GET request to `/api/tasks/:id`, replacing `:id` with the task's ID. Include the Authorization header.

- **Update a Task:**

  Send a PUT request to `/api/tasks/:id` with a JSON body containing any fields you wish to update. Include the Authorization header.

- **Delete a Task:**

  Send a DELETE request to `/api/tasks/:id`, replacing `:id` with the task's ID. Include the Authorization header.

## Contributing

Contributions to this project are welcome. Please feel free to fork the repository, make your changes, and submit a pull request.
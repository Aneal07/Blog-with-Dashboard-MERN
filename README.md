# Blog with Dashboard (MERN Stack)

## Overview

This is a full-stack blogging application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It includes a user-friendly dashboard for managing blog posts, users, and other content.

## Features

- User authentication (JWT-based)
- Create, edit, and delete blog posts
- User roles (admin and regular users)
- Dashboard for content management
- Responsive UI
- Commenting system
- Rich text editor for blog content
- SEO-friendly URLs
- API routes for CRUD operations

## Technologies Used

- **Frontend:** React.js, Redux, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Token)
- **State Management:** Redux Toolkit

## Installation

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Steps

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Aneal07/Blog-with-Dashboard-MERN.git
   cd Blog-with-Dashboard-MERN
   ```
2. **Install dependencies:**
   ```sh
   npm install
   cd client
   npm install
   ```
3. **Configure environment variables:**
   - Create a `.env` file in the root directory and add the following:
     ```sh
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     PORT=5000
     ```
4. **Run the application:**
   - Start the backend server:
     ```sh
     npm run server
     ```
   - Start the frontend:
     ```sh
     cd client
     npm start
     ```

## it doesn't look nice 



## Contributing

Feel free to submit issues and pull requests to improve the project.

## License

This project is licensed under the MIT License.


Blog with Dashboard (MERN Stack)

Overview

This full-stack blogging application is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It includes a user-friendly dashboard for managing blog posts, users, and other content.

Features

User authentication (JWT-based)

Create, edit, and delete blog posts

User roles (admin and regular users)

Dashboard for content management

Responsive UI

Commenting system

Rich text editor for blog content

SEO-friendly URLs

API routes for CRUD operations

Technologies Used

Frontend: React.js, Redux, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB with Mongoose

Authentication: JWT (JSON Web Token)

State Management: Redux Toolkit

Installation

Prerequisites

Node.js installed

MongoDB installed and running

Steps

Clone the repository:

git clone https://github.com/Aneal07/Blog-with-Dashboard-MERN.git
cd Blog-with-Dashboard-MERN

Install dependencies:

npm install
cd client
npm install

Configure environment variables:

Create a .env file in the root directory and add the following:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

Run the application:

Start the backend server:

npm run server

Start the frontend:

cd client
npm start

API Endpoints

Method

Endpoint

Description

POST

/api/auth/login

User login

POST

/api/auth/signup

User registration

GET

/api/posts

Get all blog posts

POST

/api/posts

Create a blog post

PUT

/api/posts/:id

Update a blog post

DELETE

/api/posts/:id

Delete a blog post

Contributing

Feel free to submit issues and pull requests to improve the project.

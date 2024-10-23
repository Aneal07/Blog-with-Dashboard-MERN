Blog Application (MERN Stack)

Overview:

This is a full-stack blog application built with the MERN stack (MongoDB, Express, React, Node.js). 
It allows users to create, view, edit, and delete blog posts. The project demonstrates CRUD operations, authentication, and dynamic content rendering.

Features

User authentication (login/register)
Create, read, update, and delete blog posts
Responsive design
RESTful API

Tech Stack
Frontend: React, Tailwind Css

Backend: Node.js, Express

Database: MongoDB (Mongoose)

Authentication: JWT (JSON Web Token)

#Setup Instructions
Prerequisites
Node.js installed
MongoDB running locally or via cloud (e.g., MongoDB Atlas)

#Installation
Clone the repository:
git clone https://github.com/Aneal07/blog-using-MERN.git

Navigate to the project folder:
cd blog-using-MERN

Backend Setup
Install server-side dependencies:

cd backend
npm install

Create a .env file in the backend folder and add the following:
makefile
MONGO_URI=your-mongo-uri

JWT_SECRET=your-jwt-secret

PORT=5000

Start the backend server:
npm start

Frontend Setup
Install client-side dependencies:
cd frontend
npm install

Start the frontend:
npm start

Usage
Open your browser and go to http://localhost:3000 to view the app.
Register or log in to create a blog post.

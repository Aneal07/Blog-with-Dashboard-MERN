# 🚀 Blog with Dashboard (MERN Stack)

## 🌟 Overview
A full-stack blogging application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It includes a user-friendly dashboard for managing blog posts, users, and content.

## 🎯 Features
- 🔑 **JWT-based authentication**
- ✍️ **Create, edit, and delete blog posts**
- 👥 **User roles (Admin & Regular users)**
- 📊 **Dashboard for content management**
- 📱 **Responsive UI**
- 💬 **Commenting system**
- 📝 **Rich text editor**
- 🔗 **SEO-friendly URLs**
- 🔄 **API routes for CRUD operations**

## 🛠 Technologies Used
- **Frontend:** React.js, Redux, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Token)
- **State Management:** Redux Toolkit

---

## ⚡ Installation Guide

### ✅ Prerequisites
- Install **Node.js**
- Install & run **MongoDB**

### 📌 Steps to Set Up
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
   - Create a `.env` file in the root directory and add:
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

---

## 🔌 API Endpoints
| Method | Endpoint          | Description          |
|--------|------------------|----------------------|
| POST   | /api/auth/login  | User login          |
| POST   | /api/auth/signup | User registration   |
| GET    | /api/posts       | Get all blog posts  |
| POST   | /api/posts       | Create a blog post  |
| PUT    | /api/posts/:id   | Update a blog post  |
| DELETE | /api/posts/:id   | Delete a blog post  |

---

## 🤝 Contributing
Feel free to submit **issues** and **pull requests** to improve the project. Suggestions are always welcome!

## 📜 License
This project is licensed under the **MIT License**.

---

💡 **Happy Coding!** 🚀


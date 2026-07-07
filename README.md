# 🍔 OrderIt - Food Delivery App

A full-stack food delivery web application built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js).

---

## 🚀 Features

- 🏪 **Browse Restaurants** — View all restaurants with ratings and reviews
- 🔍 **Search & Filter** — Search by name, filter by Pure Veg, sort by ratings/reviews
- 🍽️ **Menu & Food Items** — Browse categorized menus for each restaurant
- 🛒 **Cart Management** — Add, update, remove items from cart
- 👤 **User Authentication** — Signup, Login, Logout, Update Profile
- 💳 **Stripe Payment** — Secure checkout with Stripe payment gateway
- 📦 **Order Tracking** — View order history and order details
- 🤖 **AI Review Analysis** — AI-powered restaurant review summarization using Groq

---

## 🛠️ Tech Stack

### Backend
- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **JWT** Authentication
- **Stripe** Payment Integration
- **Cloudinary** Image Upload
- **Groq AI** (LLaMA model) for review analysis
- **Nodemailer** for email notifications

### Frontend
- **React.js** + **Vite**
- **Redux Toolkit** for state management
- **Axios** for API calls
- **React Router DOM** for navigation
- **React Toastify** for notifications

---

## 📁 Project Structure

```
food-project-app/
├── backend/
│   ├── config/          # Database & Cloudinary config
│   ├── controllers/     # Route controllers
│   ├── middlewares/     # Auth & error middlewares
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   ├── services/        # AI services
│   └── utils/           # Helper utilities
└── frontend/
    └── src/
        ├── Components/  # React components
        └── redux/       # Redux store, slices, actions
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB installed locally
- Git installed

### Backend Setup
```bash
cd backend
npm install
# Add your credentials to config/config.env
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/users/signup` | Register user |
| POST | `/api/v1/users/login` | Login user |
| GET | `/api/v1/eats/stores` | Get all restaurants |
| GET | `/api/v1/eats/stores/:id/menus` | Get restaurant menu |
| POST | `/api/v1/eats/cart/add-to-cart` | Add item to cart |
| POST | `/api/v1/payment/process` | Process payment |
| POST | `/api/v1/eats/orders/new` | Create order |

---

## 📸 Screenshots

### Home Page
![Home](https://via.placeholder.com/800x400?text=Restaurant+Listing+Page)

### Menu Page
![Menu](https://via.placeholder.com/800x400?text=Restaurant+Menu+Page)

### Cart & Checkout
![Cart](https://via.placeholder.com/800x400?text=Cart+and+Checkout)

---

## 👩‍💻 Developer

**Sruthy** — [@sruthy1308](https://github.com/sruthy1308)

---

## 📄 License

This project is for educational purposes as part of a MERN Stack Internship.

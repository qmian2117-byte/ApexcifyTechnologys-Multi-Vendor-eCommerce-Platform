# MarketHub Multi-Vendor eCommerce Platform

Professional, production-ready full-stack eCommerce marketplace.

## 🚀 Features
- **Multi-Vendor**: Specialized dashboards for Admins, Vendors, and Customers.
- **Responsive Design**: Mobile-first, fully responsive UI using Tailwind CSS.
- **Secure Backend**: Helmet.js, Express security best practices, and JWT authentication.
- **Dynamic Catalog**: Full product search, filtering, and category management.
- **Order Management**: Real-time order tracking and history.
- **Reviews & Ratings**: Customer feedback system with verification.

## 🛠 Tech Stack
- **Frontend**: HTML5, Tailwind CSS, Modern JavaScript (ES6+).
- **Backend**: Node.js, Express.js.
- **Database**: In-memory state management with persistent seeding.
- **Security**: JWT, Helmet, BcryptJS.

## 🚦 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation
1. Clone the repository
2. Install Backend dependencies:
   ```bash
   cd backend
   npm install
   ```

### Running the App
1. Start the Backend server (runs on port 3000):
   ```bash
   cd backend
   npm start
   ```
2. Serve the Frontend:
   You can use any static server or open `frontend/index.html` directly (though a server like `http-server` or VS Code Live Server is recommended for API connectivity).

## 📂 Project Structure
- `/backend`: Express API, middleware, services, and routes.
- `/frontend`: Responsive web templates and styles.
- `/memories`: Engineering notes and system plans.

## 🔒 Security
The project includes:
- Content Security Policy (via Helmet).
- CORS configuration.
- Password hashing (Bcrypt).
- Protected API routes (JWT).

## 📄 License
ISC

# ApexcifyTechnologys-Multi-Vendor-eCommerce-Platform

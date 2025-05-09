# Restaurant Inventory Management System

## 🔖 Overview
A full-stack web application designed for restaurants to efficiently manage inventory, track food items, and monitor stock levels. Built using **React.js**, **Node.js**, **Express**, and **MongoDB**, it streamlines stock control and helps reduce wastage.

---

## ⚙️ Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Styling**: CSS, Bootstrap

---

## 📂 Project Structure
```bash
Restaurant_Inventory_Management_System/
├── client/                         # React frontend
│   ├── public/
│   └── src/
│       ├── api/
│       │   └── api.js
│       ├── assets/                # Static assets
│       │   ├── bg-dark-mode.jpeg
│       │   ├── bg-light-mode.jpeg
│       │   └── logo.png
│       ├── components/            # UI components
│       │   ├── Footer/
│       │   │   ├── Footer.jsx
│       │   │   └── Footer.css
│       │   ├── NavBar/
│       │   │   ├── NavBar.jsx
│       │   │   └── NavBar.css
│       │   └── SideBar/
│       │       ├── SideBar.jsx
│       │       └── SideBar.css
│       ├── pages/                 # Application views
│       │   ├── Login/
│       │   │   ├── Login.jsx
│       │   │   └── Login.css
│       │   ├── Register/
│       │   │   ├── Register.jsx
│       │   │   └── Register.css
│       │   ├── ChangePassword/
│       │   │   └── ChangePassword.jsx
│       │   ├── ForgotPassword/
│       │   │   └── ForgotPassword.jsx
│       │   ├── Home/
│       │   │   ├── Home.jsx
│       │   │   └── Home.css
│       │   ├── Orders/
│       │   │   ├── AddOrders.jsx
│       │   │   ├── Orders.jsx
│       │   │   └── UpdateOrders.css
│       │   ├── InventoryList/
│       │   │   ├── AddInventory.jsx
│       │   │   ├── Inventory.jsx
│       │   │   ├── InventoryList.jsx
│       │   │   └── InventoryList.css
│       │   ├── Suppliers/
│       │   │   ├── AddSuppliers.jsx
│       │   │   ├── Suppliers.jsx
│       │   │   └── UpdateSuppliers.css
│       │   ├── Profile/
│       │   │   ├── Profile.jsx
│       │   │   └── Profile.css
│       │   ├── UserDetails/
│       │   │   ├── UserDetails.jsx
│       │   │   └── UserDetails.css
│       │   ├── Dashboard/
│       │   │   ├── Dashboard.jsx
│       │   │   └── Dashboard.css
│       │   └── VerifyEmail/
│       │       └── VerifyEmail.jsx
│       ├── App.jsx
│       ├── App.css
│       ├── App.test.jsx
│       ├── index.jsx
│       ├── reportWebVitals.jsx
│       └── setupTests.jsx
│
├── server/                         # Node backend
│   ├── public/
│   └── src/
│       ├── controller/
│       │   ├── admin.controller.js
│       │   ├── auth.controller.js
│       │   ├── dashboard.controller.js
│       │   ├── inventory.controller.js
│       │   ├── orders.controller.js
│       │   ├── supplier.controller.js
│       │   └── user.controller.js
│       ├── middleware/
│       │   ├── auth.middlewares.js
│       │   └── role.middlewares.js
│       ├── models/
│       │   ├── inventory.models.js
│       │   ├── orders.models.js
│       │   ├── supplier.models.js
│       │   └── user.models.js
│       ├── routes/
│       │   ├── admin.routes.js
│       │   ├── auth.routes.js
│       │   ├── dashboard.routes.js
│       │   ├── inventory.routes.js
│       │   ├── orders.routes.js
│       │   ├── supplier.routes.js
│       │   └── user.routes.js
│       ├── tests/
│       │   ├── auth.test.js
│       │   └── inventory.test.js
│       ├── utils/
│       │   ├── ApiError.js
│       │   ├── ApiResponse.js
│       │   └── asyncHandler.js
│       ├── server.js
│       ├── app.js
│       └── config/
│           ├── redis.js
│           └── db.js
│
├── .env
├── .gitignore
├── .prettierrc
├── .prettierignore
├── .hintrc
├── package.json
├── package-lock.json
├── README.md
└── .vscode/
```

---

## 🚀 Features
### Backend (Express API)
- `GET /api/v1/inventory/get-all-items` - Retrieve all items
- `GET /api/v1/inventory/get-current-item/:id` - Retrieve single item
- `POST /api/v1/inventory/add-inventory-item` - Add a new item
- `PATCH /api/v1/inventory/update-item` - Update a item
- `DELETE /api/v1/inventory/delete-item/:id` - Delete item

- `GET /api/v1/suppliers/get-all-suppliers` - Retrieve all supplier
- `GET /api/v1/suppliers/get-supplier/:id` - Retrieve single supplier
- `PATCH /api/v1/supplier/update-supplier` - Update a suppliers
- `POST /api/v1/suppliers/add-supplier` - Add a new supplier
- `DELETE /api/v1/suppliers/delete-supplier/:id` - Delete supplier

- `GET /api/v1/orders/get-all-orders` - Retrieve all Orders
- `GET /api/v1/orders/get-order/:id` - Retrieve single order
- `POST /api/v1/orders/add-order` - Add a new order
- `PATCH /api/v1/orders/update-order` - Update a order
- `DELETE /api/v1/orders/delete-order/:id` - Delete order

- `GET /api/v1/dashboard/` - Give detail of inventory, order and supplier

- `GET /api/v1/users/me` - Gives user details
- `POST /api/v1/users/register`- To register user
- `POST /api/v1/users/login` - To login user
- `POST /api/v1/user/logout` = To logout user
- `DELETE /api/v1/user/delete-account/:id` - Delete user account

- `GET /api/v1/admin/me` - Check whether user is admin or not
- `GET /api/v1/admin/users-details` - Retrieve all user (Only for admin)

- `POST /api/v1/auth/send-otp` - Send OTP to email
- `POST /api/v1/auth/verify-otp` - Verify the otp
- `POST /api/v1/auth/user-exist` - Verify email
- `POST /api/v1/auth/reset-password` - Reset Password

### Frontend (React)
- Display inventory, orders, supplier, dashboard, profile, admin panel(only for admin)
- Add/edit/delete item
- Password management (change password, forgot password)
- Authentication and verification

---

## 🧾 Database Schema
### Collection: `items`
| Field      | Type     | Description               |
|------------|----------|---------------------------|
| _id        | ObjectId | Unique ID                 |
| name       | String   | Inventory item name       |
| quantity   | Number   | Quantity in stock         |
| price      | Number   | Price per unit            |
| category   | String   | Item category (e.g., Meat)|
| expiry     | Date     | Expiration date           |

---

## 🛠️ Setup Instructions
### Requirements
- Node.js + npm
- MongoDB

### Installation
```bash
# Clone repo
$ git clone https://github.com/rithish72/Restaurant_Inventory_Management_System.git
$ cd Restaurant_Inventory_Management_System

# Backend setup
$ cd server
$ npm install
```
Create `.env`:
```
MONGO_URI=your_mongo_connection_string
```
Start backend:
```bash
$ npm start
```

```bash
# Frontend setup
$ cd ../client
$ npm install
$ npm start
```
App runs at: `http://localhost:3000`

---

## 🔧 API Example
```bash
curl http://localhost:5000/api/v1
```

---

## ✅ Evaluation Criteria
| Area         | Details                          |
|--------------|----------------------------------|
| Functionality| CRUD and basic auth              |
| UI/UX        | Responsive and intuitive         |
| Code Quality | Modular, reusable, readable code|
| Testing      | Manual via Postman or curl       |
| Docs         | Clear setup and usage info       |


---

## 👤 Author
[Rithish](https://github.com/rithish72)

> Crafted with a blend of food tech love 🍲 and clean coding 🧼

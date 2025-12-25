# Role-Based React Dashboard

A modern React dashboard application demonstrating **role-based navigation**,  
**protected routing**, **theme switching**, and a **clean enterprise-style layout**.

This project focuses on UI structure, routing logic, and frontend best practices,
similar to real-world admin dashboards.

---

## 🚀 Features

- Collapsible sidebar with nested menus (CRM & Settings)
- Role-based navigation structure
- Protected routes with **403 Forbidden** handling
- Dynamic Topbar with profile dropdown
- Profile dropdown includes:
  - View Profile
  - Theme selection (multiple colors)
  - Logout option
- Theme switching with light & dark contrast handling
- Clean card-style content layout
- Modern icons using **lucide-react**
- Fully responsive layout foundation

---

## 🔐 Routing & Authorization

  - Routing is handled using React Router
  - Unauthorized access is redirected to a 403 Forbidden page
  - Invalid routes show a 404 Not Found page
  - This setup simulates real-world permission-based navigation

---

## 🎨 Theme Management

  - Multiple theme colors are available from the profile dropdown
  - Light theme automatically switches text to dark for readability
  - Sidebar remains fixed dark for better UX consistency
  - Theme state is managed globally using React Context API

---

## 🌐 Live Demo

The application is deployed on **Netlify** and can be accessed here:

🔗 **Live URL:**  
[https://react-role-based-dashboard.netlify.app/]

---

## 🧱 Folder Structure

```text
src/
├── components/
│   ├── common/        # Reusable UI components (ThemeGrid)
│   ├── layout/        # Layout components (Sidebar, TopBar, Layout)
│   └── routing/       # Route protection logic
│
├── context/           # Global state (ThemeContext)
├── pages/             # Route-level pages (Welcome, 403, 404)
├── styles/            # Global and layout styles
│
├── App.jsx            # Route definitions
├── main.jsx           # App entry point
└── index.css          # Global styles



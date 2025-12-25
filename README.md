# Role-Based Dashboard Application (React)

This project is a React-based dashboard application built to demonstrate
role-based sidebar rendering, protected routes, and theme persistence.
The application follows a clean and scalable folder structure inspired by
real-world enterprise React applications.

All menus, routes, and permissions are driven by configuration JSON,
avoiding hardcoded logic.

---

## 🚀 Features

- Dynamic sidebar rendered from configuration JSON
- Parent → child menu hierarchy
- Only enabled menus and routes are accessible
- Protected routes with 403 Forbidden handling
- Multiple UI themes (Blue, Green, Purple, Dark)
- Theme persistence using localStorage
- Dynamic TopBar with profile dropdown
- Theme selection and logout option
- Clean and maintainable folder structure

---

## 🧱 Folder Structure Diagram
```text
src
│
├── components
│ ├── common
│ │ └── ThemeSelector.jsx
│ │
│ ├── layout
│ │ ├── Layout.jsx
│ │ ├── Sidebar.jsx
│ │ └── TopBar.jsx
│ │
│ └── routing
│ └── ProtectedRoute.jsx
│
├── config
│ └── permissions.json
│
├── context
│ └── ThemeContext.jsx
│
├── pages
│ ├── Welcome.jsx
│ ├── Forbidden.jsx
│ └── NotFound.jsx
│
├── utils
│ └── routeUtils.js
│
├── styles
│ ├── themes.css
│ └── layout.css
│
├── App.jsx
├── main.jsx
└── index.css


---

---

## 🔐 Sidebar Permission Logic

- Sidebar menus are generated dynamically from `permissions.json`
- Only menus and child routes with `enabled: true` are rendered
- Parent menus are shown only if they are enabled
- Permissions can be changed without modifying UI code

---

## 🛡 Protected Route Handling

- Routes are generated dynamically from configuration
- `ProtectedRoute` validates whether a route is enabled
- Unauthorized or disabled routes redirect to a **403 Forbidden** page

---

## 🎨 Theme Management & Persistence

- Supports multiple predefined themes:
  - Blue
  - Green
  - Purple
  - Dark
- Theme selection is available in the TopBar profile dropdown
- Selected theme is stored in `localStorage`
- Theme is restored automatically on page refresh

---

## 🌐 Live Deployment

The application is deployed on **Netlify**:

## 🌐 Live Demo

The application is deployed on Netlify and can be accessed here:

🔗 **Live URL:** [https://your-project-name.netlify.app](https://react-role-based-dashboard.netlify.app/)


---

## 🧪 Running the Project Locally

```bash
npm install
npm run dev


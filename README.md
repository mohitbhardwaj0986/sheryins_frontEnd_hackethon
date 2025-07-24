# ☕ Chamberlain Coffee - E-commerce Website

A beautifully crafted, animated e-commerce web application for **Chamberlain Coffee**, offering an immersive shopping experience for coffee lovers. Built with performance, responsiveness, and user experience in mind.

---

## 🚀 Features

- ✅ Fully responsive modern UI/UX
- ✅ Home, About, Products, Cart, Login & Signup pages
- ✅ Private routing for protected pages (Cart, Products)
- ✅ Smooth page transitions using **Framer Motion**
- ✅ Toast notifications using **Sonner**
- ✅ Authentication state with **Redux Toolkit**
- ✅ Product data managed globally
- ✅ Shopping cart functionality with Redux
- ✅ Animated elements, hover effects, and mobile-friendly navigation
- ✅ Beautiful brand theme: **Latte Cream**, **Mocha Tan**, **Coffee Bean Brown**, **Golden Roast**, **Matcha Green**

---

## 🛠 Tech Stack

| Frontend        | State Management | Animations         | UI Components    | Auth |
|-----------------|------------------|---------------------|------------------|------|
| React.js        | Redux Toolkit    | Framer Motion, GSAP | Tailwind CSS     | Custom logic (Redux) |

---

## 🎨 Brand Colors

| Name              | Hex Code  |
|-------------------|-----------|
| Latte Cream       | `#FFF3E7` |
| Coffee Bean Brown | `#3B2C27` |
| Mocha Tan         | `#6E3A1C` |
| Golden Roast      | `#D8A460` |
| Matcha Green      | `#7BA05B` |

---

## 📂 Project Structure

```
chamberlain-coffee/
├── public/
│   └── index.html
├── src/
│   ├── assets/             # Images & icons
│   ├── components/         # Navbar, Footer, Button, Cards, etc.
│   ├── pages/              # Home, About, Products, Cart, Auth
│   ├── routes/             # MainRouter.jsx, PrivateRoute.jsx
│   ├── store/              # Redux slices (user, product, cart)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
└── README.md
```

---

## 🔐 Authentication

- ✅ Redux state for login/logout
- ✅ `PrivateRoute` wrapper for routes like `/cart` and `/products`
- ✅ Toast messages shown on access denial (`Please login to access this page`)

---

## 📦 Installation & Running Locally

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/chamberlain-coffee.git
   cd chamberlain-coffee
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Visit**
   ```
   http://localhost:5173
   ```

---

## 🔄 Scripts

```bash
npm run dev        # Start Vite dev server
npm run build      # Production build
npm run preview    # Preview production build
```

---

- Home page
- Animated Hero section
- Product listing
- Cart and Login

---

## 🙏 Credits

- Inspired by **Chamberlain Coffee** branding
- Icons from `react-icons`
- Toasts by `sonner`
- Animations by `Framer Motion` & `GSAP`

---

## 📧 Contact

For queries or collaborations:

**Developer**: Mohit  
**Email**: mohitshukla0986@gmail.com  
**Portfolio**: [comming soon]

---

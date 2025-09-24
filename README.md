Perfect bro 🚀 glad your project is running fine now.
Here’s a clean **README.md** template tailored for your blog app assignment:

---

````markdown
# 📝 Blog Application (Full Stack Assignment)

A full-stack blog platform where users can **sign up, log in, create, edit, delete blogs** and view all published blogs.  
Built with **Django REST Framework (backend)** and **React (frontend)**.  

---

## ✨ Features
- 🔐 User authentication (JWT-based login/signup using email & password)
- ✍️ Authenticated users can create, update, and delete blogs
- 🌍 Public blog listing & blog detail view (no login required)
- 📑 Pagination support for blogs
- 📱 Fully responsive (mobile + desktop)
- ☁️ Cloud deployment (AWS/GCP/Azure/Render/Heroku)

---

## 🛠️ Tech Stack
- **Frontend**: React + Axios + TailwindCSS (or your styling choice)
- **Backend**: Django + Django REST Framework + SimpleJWT
- **Database**: SQLite (dev) / PostgreSQL (prod-ready)
- **Authentication**: JWT (Access + Refresh tokens)
- **Hosting**: [update with your chosen cloud service]

---

## ⚙️ Setup Instructions

### 🔹 Backend (Django API)
1. Clone repo:
   ```bash
   git clone <your-repo-url>
   cd blog/backend
````

2. Create virtual environment & install dependencies:

   ```bash
   conda create -n blog_env python=3.11 -y
   conda activate blog_env
   pip install -r requirements.txt
   ```

3. Run migrations:

   ```bash
   python manage.py migrate
   ```

4. Start server:

   ```bash
   python manage.py runserver
   ```

   Backend runs on 👉 `http://127.0.0.1:8000`

---

### 🔹 Frontend (React App)

1. Move to frontend folder:

   ```bash
   cd blog/frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start React dev server:

   ```bash
   npm start
   ```

   Frontend runs on 👉 `http://localhost:3000`

---

## 🔑 API Endpoints

### Auth

* `POST /api/signup/` → Register new user
* `POST /api/login/` → Login with email & password (returns JWT tokens)
* `POST /api/token/refresh/` → Refresh access token

### Blogs

* `GET /api/blogs/` → List all blogs (public, paginated)
* `GET /api/blogs/<id>/` → Blog detail
* `POST /api/blogs/` → Create blog (auth required)
* `PUT /api/blogs/<id>/` → Update blog (author only)
* `DELETE /api/blogs/<id>/` → Delete blog (author only)

---

## 🚀 Deployment

* Backend deployed on: \[your cloud link]
* Frontend deployed on: \[your cloud link]
* Live App URL: \[your production URL]

---

## 🎥 Demo

* Loom Video Walkthrough: \[your loom link]

---

## 👨‍💻 Author

* **Your Name**
* B.Tech CSE (4-1 Semester)
* Skills: Python, Django, React, Data Science, AI

---

```

---

👉 Do you want me to also generate a **`requirements.txt`** for your Django backend and a **minimal `package.json` snippet** for React so everything is ready to share in GitHub?
```

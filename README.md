# HRMS-Lite

HRMS Lite is a lightweight Human Resource Management System built as a full-stack web application.  
It allows an admin to manage employees and track daily attendance through a clean, structured, and production-ready interface.

This project demonstrates end-to-end full-stack development including frontend UI, backend REST APIs, database persistence, validation, error handling, and deployment.

---

## 🔗 Live Application

Frontend (Vercel)  
https://hrms-psi-eight.vercel.app/

Backend API (Render)  
https://hrms-backend-4k9i.onrender.com/

---

## 📌 Project Overview

HRMS Lite enables a single admin user to perform essential HR operations:

### Employee Management
- Add new employees
- View all employees
- Delete employees
- Enforce unique Employee ID
- Validate email format
- Prevent duplicate entries

### Attendance Management
- Mark daily attendance (Present / Absent)
- View attendance records per employee
- Track attendance history
- Prevent invalid submissions

The system focuses on clean API design, server-side validation, reusable frontend components, and realistic usability.

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- React Router
- Axios
- Vercel (Deployment)

### Backend
- Django
- Django REST Framework
- Gunicorn (WSGI server)
- Render (Deployment)

### Database
- SQLite (Lightweight persistence)

---

## ⚙️ Running the Project Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/gurjotka/HRMS-.git
cd your-repository-name
```


## 🔹 Backend Setup (Django)

Navigate to backend folder:

```bash
cd backend
```

### Create virtual environment:
```bash
python -m venv venv
```

### Activate virtual environment:

Windows
```bash
venv\Scripts\activate
```

Mac/Linux
```bash
source venv/bin/activate
```

### Install dependencies:
```bash
pip install -r requirements.txt
```

### Apply database migrations:

```bash
python manage.py migrate
```

### Run the backend server:

```bash
python manage.py runserver
```

Backend runs at:

http://127.0.0.1:8000/



## 🔹 Frontend Setup (React + Vite)

Open a new terminal.

Navigate to frontend folder:
```bash
cd frontend
```

### Install dependencies:

``` bash
npm install
```

Create a .env file inside the frontend folder:

VITE_API_URL=http://127.0.0.1:8000

### Start development server:
```bash
npm run dev
```

Frontend runs at:

http://localhost:5173/

## 📡 API Endpoints

### Employee Endpoints:

- GET /employees/
- POST /employees/
- DELETE /employees/<id>/

### Attendance Endpoints:

- POST /attendance/
- GET /attendance/<employee_id>/

### All endpoints:

- Follow REST principles
- Return proper HTTP status codes
- Return meaningful error messages


## ✅ Validation & Error Handling

- Required field validation
- Unique Employee ID enforcement
- Email format validation
- Duplicate prevention
- Proper HTTP status codes (400, 404, 409, 500)
- Graceful frontend loading, empty, and error states


## 📦 Assumptions & Limitations

- Single admin user (no authentication required)
- SQLite used for lightweight development and deployment
- Render free tier may introduce cold start delay
- No advanced HR features like payroll or leave management
- Designed for evaluation and demonstration purposes


## 🚀 Deployment Details

- Backend deployed on Render using Gunicorn
- Frontend deployed on Vercel
- Environment variables configured for production
- CORS enabled for cross-origin communication
- Application runs publicly via shared URLs


## 📂 Project Structure
repo/
- │
- ├── backend/
- │   ├── manage.py
- │   ├── requirements.txt
- │   └── project_name/
- │
- └── frontend/
-  ├── src/
-   ├── package.json
-   └── vite.config.js
    
    
## 📎 Key Highlights

- Clean and modular code structure
- Reusable frontend components
- RESTful backend architecture
- Proper database modeling
- Production-style deployment
- Publicly accessible live application

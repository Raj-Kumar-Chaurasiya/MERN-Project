Overview

The MARN1 Project is a full-stack application featuring a complete frontend and backend architecture.
The frontend offers a clean UI with dedicated pages such as Home, About Us, Services, Booking, Gallery, Team, Contact Us, and Enquiry, while the backend manages all data interactions through REST APIs.

This application is ideal for:

✔ Service providers
✔ Studios
✔ Appointment-based businesses
✔ Portfolio or business websites
✔ Anyone needing booking + contact + enquiry functionality

🛠 Tech Stack
Frontend

⚛️ React.js

⚡ Vite

🌐 React Router

🎨 CSS3

Backend

🟩 Node.js

🚀 Express.js

🗄 MongoDB / MySQL (choose any database)

🔐 dotenv

📁 Full Project Structure
MARN1-Project/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header/
│   │   │   ├── Navbar/
│   │   │   ├── Footer/
│   │   │   └── Slider/
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   ├── AboutUs/
│   │   │   ├── Services/
│   │   │   ├── Booking/
│   │   │   ├── Gallery/
│   │   │   ├── ContactUs/
│   │   │   ├── Enquiry/
│   │   │   └── Team/
│   │   ├── utils/api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
└── backend/
    ├── routes/
    │   ├── bookingRoutes.js
    │   ├── enquiryRoutes.js
    │   ├── contactRoutes.js
    │   ├── servicesRoutes.js
    │   ├── galleryRoutes.js
    │   └── teamRoutes.js
    ├── controllers/
    ├── models/
    ├── config/db.js
    ├── server.js
    ├── package.json
    └── .env

🚀 Installation Guide
1️⃣ Clone the Repository
git clone <your-github-repo-url>
cd MARN1-Project

🎨 Frontend Setup (React + Vite)
cd frontend
npm install
npm run dev


👉 Frontend runs at: http://localhost:5173

🖥 Backend Setup (Node.js + Express)
cd backend
npm install

Create .env file:
PORT=5000
MONGO_URI=your_mongodb_connection_string

Run the backend:
npm start


👉 Backend runs at: http://localhost:5000

🔌 Connecting Frontend & Backend

Update the API base URL:

frontend/src/utils/api.js

export const BASE_URL = "http://localhost:5000/api";

🌐 API Endpoints
Booking
POST /api/booking
GET  /api/booking

Enquiry
POST /api/enquiry

Contact
POST /api/contact

Services
GET  /api/services
POST /api/services

Gallery
GET  /api/gallery
POST /api/gallery

Team
GET  /api/team
POST /api/team

🖥 Frontend Pages

✔ Home — Hero slider + introduction
✔ About Us — Company/studio details
✔ Services — Display all service offerings
✔ Booking — Book an appointment
✔ Gallery — Project or image showcase
✔ Team — Members or staff display
✔ Contact Us — Direct message form
✔ Enquiry — General enquiry form

🚀 Build for Production
Frontend
npm run build

Backend

Deploy on:

Render

Railway

VPS / AWS / Azure

DigitalOcean

🌍 Deploying the Full Project
Frontend Deployment

Use:

Vercel

Netlify

Upload the dist/ folder after build.

Backend Deployment

Use:

Render (recommended)

Railway

AWS EC2

Heroku (if enabled)

Don't forget to update API URLs in api.js.

📝 Future Enhancements

🔐 Authentication (Login/Register)

👨‍💼 Admin Dashboard

📩 Email alerts for bookings

📦 File upload in Gallery

🌓 Dark & Light Mode

📱 Enhanced UI design & animations

👨‍💻 Developer Notes

The project follows modern, scalable architecture with fully separated frontend and backend, making it easy to extend, maintain, and deploy. React provides fast UI performance, while Express ensures smooth API handling.

📜 License

This project is released under the MIT License (or choose your own).

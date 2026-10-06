# AdAI — AI-Powered Ad Management Platform

AdAI is a full-stack platform designed for small business owners to create, manage, and optimize ad campaigns across **Meta** (Facebook & Instagram) and **TikTok** using artificial intelligence.

Inspired by clean, modern high-end SaaS designs (Eloqwnt/Mirhayot style) with full Light & Dark mode support.

---

## 🏗️ Architecture & Tech Stack

- **Frontend:**
  - React 18 + TypeScript + Vite
  - Tailwind CSS (with custom color palette, smooth animations & dark mode)
  - React Router DOM v6
  - Recharts (Area charts, Bar charts, Line charts)
  - Lucide React icons
  - Context API (`ThemeContext` for dark/light toggle & `AuthContext` for authentication)

- **Backend:**
  - Python 3.10+ & FastAPI
  - Pydantic v2 data models
  - JWT Authentication (python-jose & passlib)
  - RESTful modular routes (`auth`, `campaigns`, `analytics`, `ai`)
  - OpenAI GPT integration with built-in fallback mock provider

---

## 📁 Project Structure

```text
AI AD website management/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── layout/
│   │   │       ├── AppLayout.tsx       # Sidebar + Main container
│   │   │       ├── Navbar.tsx          # Landing page navigation
│   │   │       ├── Sidebar.tsx         # Dashboard sidebar navigation
│   │   │       └── ProtectedRoute.tsx  # Route guard for authenticated paths
│   │   ├── context/
│   │   │   ├── AuthContext.tsx         # Authentication state & actions
│   │   │   └── ThemeContext.tsx        # Dark / Light mode toggle state
│   │   ├── pages/
│   │   │   ├── Landing.tsx             # Marketing page (Hero, Features, Pricing)
│   │   │   ├── Login.tsx               # Login page (Split screen)
│   │   │   ├── Signup.tsx              # Signup page (Split screen)
│   │   │   ├── Dashboard.tsx           # KPIs, Spend chart, AI Insights, Campaigns
│   │   │   ├── AdCreator.tsx           # 4-step AI ad creation wizard
│   │   │   ├── Analytics.tsx           # Metric cards, comparison & trend charts
│   │   │   ├── Settings.tsx            # Profile, Integrations, Notifications, Billing
│   │   │   └── Admin.tsx               # User management, system health, activity log
│   │   ├── App.tsx                     # Main Router setup
│   │   ├── index.css                   # Tailwind styles & theme variables
│   │   └── main.tsx                    # React DOM entrypoint
│   ├── package.json
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── backend/
│   ├── models/
│   │   ├── __init__.py
│   │   └── schemas.py                  # Pydantic models for all entities
│   ├── routes/
│   │   ├── __init__.py
│   │   ├── auth.py                     # Login, register, me endpoints
│   │   ├── campaigns.py                # CRUD campaign operations
│   │   ├── analytics.py                # Analytics overviews and timeseries
│   │   └── ai.py                       # AI ad generation & campaign optimization
│   ├── main.py                         # FastAPI application entrypoint & CORS
│   ├── requirements.txt                # Python dependencies
│   └── .env.example                    # Environment variable template
│
└── README.md
```

---

## 🚀 Getting Started

### 1. Frontend Setup

1. Open a terminal in the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install npm dependencies:
   ```bash
   npm install
   ```
3. Run the Vite development server:
   ```bash
   npm run dev
   ```
4. Access the web app at [http://localhost:5173](http://localhost:5173).

---

### 2. Backend Setup

1. Open a terminal in the `backend` folder:
   ```bash
   cd backend
   ```
2. Create and activate a Python virtual environment:
   ```bash
   # Windows PowerShell:
   python -m venv venv
   .\venv\Scripts\Activate.ps1
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Configure environment variables:
   ```bash
   cp .env.example .env
   ```
   *(Optional: Add your `OPENAI_API_KEY` in `.env` if you want live OpenAI generation)*
5. Run the FastAPI server:
   ```bash
   uvicorn main:app --reload --port 8000
   ```
6. API Documentation will be available at [http://localhost:8000/docs](http://localhost:8000/docs).

---

## 🎨 Design Features

- **Mirhayot / Eloqwnt SaaS Aesthetic:** High-contrast dark tones (`#030303`), refined violet accents (`#4548A2`), glassmorphism cards, glowing radial gradients, and clean typography.
- **Theme Toggle:** Instant switch between dark mode and crisp light mode.
- **Interactive Multi-Step Ad Wizard:** Real-time generation simulation, platform picker (Meta / TikTok), and variant selector.
- **Admin Section:** Full user management, health monitoring, and system activity logs.

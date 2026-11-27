# PlaceTrack – Smart Placement Management & Tracking System

> **Tagline:** Your Career. Your Placement. One Smart Platform.  
> **Institution:** ABES Engineering College, Ghaziabad  
> **Course:** Full-Stack Web Development (B.Tech CSE Project — 5th Semester)  
> **Architecture:** Three-Tier Decoupled MERN Stack (MongoDB, Express.js, React.js, Node.js)  
> **Design System:** Pure CSS3 (Emerald + Mint + Ivory Palette)  

---

## 📌 Project & Team Details

| Attribute                | Details                                                                                                    |
| :----------------------- | :--------------------------------------------------------------------------------------------------------- |
| **Project ID**           | `Project-ID-048`                                                                                           |
| **Project Title**        | **Smart Placement Management & Tracking System** (PlaceTrack)                                              |
| **Department & Section** | Computer Science & Engineering (**CSE-11**)                                                                |
| **GitHub Repository**    | [smart-placement-management-system](https://github.com/ajitkumarsaini02/smart-placement-management-system) |

### 👥 Project Team Members

| Name                 | University Roll Number | Section |
| :------------------- | :--------------------- | :------ |
| **Ajit Kumar Saini** | `2400230100114`        | CSE-11  |
| **Aditya Yadav**     | `2400320100103`        | CSE-11  |

---

## 🌐 Live Cloud Deployment (Render)

| Deployment Attribute | Details / Configuration Link |
| :------------------- | :--------------------------- |
| **Live Deployed URL** | **[https://smart-placement-management-system.onrender.com](https://smart-placement-management-system.onrender.com)** |
| **Alternative Mirror** | [https://placetrack-placement-system.onrender.com](https://placetrack-placement-system.onrender.com) |
| **Platform**         | [Render Cloud Platform](https://render.com) (Static Site + SPA Rewrite Engine) |
| **Build Configuration** | `cd frontend && npm install && npm run build` &rarr; `./frontend/dist` |
| **Routing Rewrite**  | `/*` &rarr; `/index.html` (Full React Router client-side history navigation) |
| **Deployment Status**| Active &middot; Auto-deploy enabled from `main` branch |

---

## 🔑 Demo Login Credentials (All User Roles)

For evaluation, grading, and testing of all role-specific workflows, pre-configured accounts are available:

| User Role | Username / Email | Password | Access Level & Key Features |
| :--- | :--- | :--- | :--- |
| **👑 Super Admin** | `admin@placetrack.com` | `Password@123` | Institutional Audit, TPO Master Controls, University Governance |
| **🎓 Student (Primary)** | `student@placetrack.com` | `Password@123` | Opportunities, Automated Eligibility Engine, Live 5-Stage Stepper, PDF Resume |
| **🎓 Student (Alt / Aditya)** | `aditya@placetrack.com` | `Password@123` | Secondary student account for multi-applicant testing (CSE-11, 8.5+ CGPA) |
| **🏛️ TPO Officer** | `tpo@placetrack.com` | `Password@123` | Campus Drives, Student/Company Verification, 5 NAAC/NBA CSV Reports |
| **🏢 Corporate Recruiter** | `recruiter@placetrack.com` | `Password@123` | Job Posting, Candidate Funnel, Resume Shortlisting, Interview Scheduling |

> **💡 Quick Testing Guide:** On the Login page (`/login`), click any role card or enter the credentials above with password `Password@123` to enter that specific portal.

---

## 📖 1. Project Introduction

**PlaceTrack** is a centralized, role-aware campus placement management and candidate tracking platform built to streamline university placement operations. It synchronizes **Graduating Students**, **Training and Placement Officers (TPO)**, and **Corporate Recruiters** within a single, high-performance web application.

Designed with inspiration from modern enterprise university systems, PlaceTrack replaces fragmented Excel sheets and manual Google Forms with an automated eligibility engine, real-time recruitment pipeline tracking, and instant NAAC/NBA accreditation reporting.

---

## ❗ 2. Problem Statement

Campus placement operations in most engineering colleges suffer from critical systemic bottlenecks:

1. **Spreadsheet Chaos:** Placement cells manually track thousands of student records across unversioned spreadsheets and Google Forms, causing data loss and synchronization delays.
2. **Ineligible Student Applications:** Manual verification of student CGPA, backlogs, and Class 10/12 marks leads to ineligible applicants attending recruitment drives, resulting in company dissatisfaction.
3. **Information Asymmetry:** Students miss crucial drive registration deadlines, interview calls, and circulars due to reliance on scattered WhatsApp groups and bulletin boards.
4. **Recruiter Inefficiencies:** Companies lack direct access to verified student profiles and verified PDF resumes, making candidate shortlisting slow and cumbersome.
5. **Reporting Delays:** Generating branch-wise placement statistics, NIRF/NAAC audit figures, and company recruitment summaries requires days of manual calculation.

---

## 🎯 3. Project Objectives

1. **Centralize Placement Operations:** Eliminate external Google Forms and manual spreadsheets with a unified single-portal solution.
2. **Automated Backend Eligibility Engine:** Instantly compute candidate eligibility for every job opening based on CGPA, active backlogs, 10th/12th percentages, and branch constraints.
3. **End-to-End Application Tracking:** Provide students with a live, visual 5-stage recruitment pipeline from application submission to interview scheduling and final offer letter issuance.
4. **Strict Role-Based Access Control (RBAC):** Restrict system privileges so recruiters only access their own applicants, students only see authorized drives, and TPO administrators maintain full audit governance.
5. **Real Database Metrics:** Completely replace placeholder statistics with live MongoDB aggregations, real-time in-app alerts, and downloadable CSV compliance reports.

---

## ✨ 4. Main Platform Features

### 🏛️ High-Impact Public Portal

- **Hero & Command Centre Preview:** Real-time metrics overview, live placement rate tracker, and visual funnel.
- **Comparative Analysis ("The Problem"):** Old way (manual spreadsheets) vs PlaceTrack way (automated pipeline).
- **Interactive 7-Step Placement Pipeline:** `01 Recruiter CRM` $\to$ `02 Job Drives` $\to$ `03 Student Applications` $\to$ `04 Round Progression` $\to$ `05 Candidate Shortlisting` $\to$ `06 Offer Management` $\to$ `07 Accreditation Reports`.
- **Core Placement Features Suite:** Complete grid of institutional modules covering recruiter CRM, drive management, eligibility checks, communication alerts, and NAAC/NBA exports.
- **Measurable Outcomes:** Quantifiable metrics (80% faster operations, 100% digital, live tracking, 35% higher placement rates).
- **FAQ Accordion & Institutional Footer:** 6 comprehensive placement questions and transparent legal links.

### 🔐 Split-Screen Role Authentication

- **Showcase Branding Panel:** Deep forest emerald branding, verified student statistics, and talent proof.
- **Role-First Gateway:** One-click role selection (**Student**, **College / Institution**, **Company / Recruiter**, and **Super Admin**).
- **Dedicated Role Sign-In:** Secure email and password entry with password show/hide eye toggle, remember me, forgot password, and instant **Back to Home** navigation.
- **Fixed Navigation on Authentication:** Navigation bar stays permanently locked at `top: 0` (`position: fixed`) with backdrop blur and zero content overlap.
- **Clean Landing Page Redirect on Sign Out:** Signing out cleanly wipes tokens and returns users directly to the landing page.

### 🎓 Student Portal

- **Profile & Academic Management:** Update personal details, graduation batch, department, CGPA, backlogs history, skills, and certifications.
- **PDF Resume Upload & Preview:** Multer-backed PDF resume upload ($\le 5\text{MB}$) with built-in preview and replacement capabilities.
- **Automated Opportunity Matching:** Live eligibility indicator on every job card with specific explanations for any criteria shortfall.
- **Application History & Stepper:** Real-time tracking through 5 stages (`Applied` $\to$ `Under Review` $\to$ `Shortlisted` $\to$ `Interview Scheduled` $\to$ `Selected / Offered`).
- **In-App Notifications:** Real-time database alerts with unread counter, search, type filtering, and bulk mark-as-read actions.

### 🏢 Recruiter Portal

- **Corporate Branding:** Manage organization profile, official website, headquarters, and lead recruiter contact details.
- **Job Lifecycle Management:** Post openings with customized academic eligibility criteria; save drafts or publish live openings (subject to TPO verification).
- **Candidate Screening & Filtering:** Search applicant pools with dynamic branch filters, minimum CGPA thresholds, and instant verified PDF resume links.
- **Visual Recruitment Funnel:** Interactive stage pipeline with candidate counts across all recruitment stages.
- **Interview Scheduling:** Schedule online/offline technical and HR interview rounds with Google Meet links, dates, and instructions.

### 🏛️ TPO Administration Portal

- **Live Institutional Overview:** Real database counters for Total Students, Partner Companies, Active Jobs, Campus Drives, Total Applications, and Placed Students.
- **Student & Company Verification:** Toggle academic audit flags for students and verify corporate recruiter accounts.
- **Placement Drive Scheduling:** Launch campus-wide placement drives tied to specific academic years and partner companies.
- **Live Placement Analytics:** Real-time placement percentages, average/highest CTC packages, and branch-wise breakdown charts.
- **Downloadable CSV Reports:** 5 one-click exportable audit reports (`students`, `companies`, `applications`, `placements`, `branchwise`).

---

## 💻 5. Technology Stack

### Frontend

- **Framework:** React.js 19 (Functional Components, Arrow Functions)
- **Build Tool:** Vite
- **Routing:** React Router DOM v7 (`ProtectedRoute`, `RoleBasedRoute`)
- **HTTP Client:** Axios (Custom interceptors for Bearer JWT and API error handling)
- **Styling:** Pure CSS3 (Emerald + Mint + Ivory design system, CSS Variables, Flexbox, CSS Grid)
- **State Management:** React Context API (`AuthContext`, `useAuth`)
- **Icons:** Lucide React
- **Build Output:** Optimized Single Page Application bundle via Vite

### Backend

- **Runtime:** Node.js (v18+)
- **Framework:** Express.js (ES Modules `"type": "module"`)
- **Database:** MongoDB (Local or MongoDB Atlas Cloud)
- **Object Data Modeling (ODM):** Mongoose (`^8.9.5`)
- **Authentication:** JSON Web Tokens (JWT) & HTTP-Only Secure Cookies
- **Password Security:** `bcryptjs` (10 salt rounds)
- **File Handling:** `multer` (PDF validation and 5MB threshold)
- **Security Middleware:** `helmet`, `cors`, `express-rate-limit`
- **Health Monitoring:** Centralized `/api/v1/health` system probe endpoint

---

## 👥 6. User Roles & Access Matrix

| Role            | Default Landing        | Permissions                                                                          |
| :-------------- | :--------------------- | :----------------------------------------------------------------------------------- |
| **Student**     | `/student/dashboard`   | Manage profile, upload resume, view eligible jobs, submit applications, track status |
| **Recruiter**   | `/recruiter/dashboard` | Manage company profile, post openings, review applicants, schedule interviews        |
| **TPO Officer** | `/tpo/dashboard`       | Verify students/companies, launch drives, view college analytics, export CSV reports |
| **Admin**       | `/tpo/dashboard`       | Full system governance and administrative oversight                                  |

---

## 🏗️ 7. Project Architecture

PlaceTrack employs a decoupled **Three-Tier Client-Server Architecture**:

```
[ Frontend: React 19 + Vite (Single Page Application) ]
                 │
                 │ HTTP/HTTPS REST API Requests (Authorization: Bearer <JWT>)
                 ▼
[ Backend: Node.js + Express.js REST API Server ]
  ├── Security Layer (Helmet, CORS, RateLimiter)
  ├── Controllers (Auth, Student, Recruiter, TPO, Notifications)
  └── Backend Eligibility Engine (CGPA, Backlogs, Branch Matching)
                 │
                 │ Mongoose ODM
                 ▼
[ Database: MongoDB Database (Local / Atlas Cloud) ]
  └── 9 Domain Collections with Compound Indexes
```

---

## 📂 8. Folder Structure

```text
smart-placement-management-system/
├── frontend/                        # React + Vite Frontend Application
│   ├── public/                      # Static assets & brand favicon
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/              # Atomic UI components (Button, Badge, Input, Loader)
│   │   │   ├── layout/              # Header, TopBanner, Navbar, Footer
│   │   │   ├── landing/             # Hero, ProblemVsSolution, PlacementWorkflow, CoreFeatures, MeasurableResults, TestimonialsSection, FAQ, CTA
│   │   │   ├── auth/                # LoginShowcase, RoleSelector, RoleLoginForm
│   │   │   ├── student/             # Student portal components (Profile, Jobs, Resume, Stepper)
│   │   │   ├── tpo/                 # TPO portal components (StudentTable, Analytics, Reports)
│   │   │   └── recruiter/           # Recruiter portal components (JobForm, Candidates, Funnel)
│   │   ├── context/                 # AuthContext & Session management
│   │   ├── hooks/                   # Custom React hooks (useAuth)
│   │   ├── pages/                   # Route views (Auth, Student, Recruiter, TPO, Home)
│   │   ├── routes/                  # AppRoutes, ProtectedRoute, RoleBasedRoute
│   │   ├── services/                # Decoupled Axios services (api, auth, student, job, etc.)
│   │   └── styles/                  # Pure CSS stylesheets (Emerald + Mint + Ivory)
│   ├── .env.example                 # Frontend environment variables template
│   └── vite.config.js               # Vite configuration
│
├── docs/                            # Project Documentation
│   └── system-design-document.md    # System Design Document
│
├── PlaceTrack - System Design Document.docx  # Academic System Design Word Document
├── package.json                     # Monorepo runner scripts (start, build, dev)
├── package-lock.json                # Locked dependency tree
└── README.md                        # Master Project Documentation
```

---

## ⚙️ 9. Installation & Setup

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **MongoDB**: Community Server running on `mongodb://127.0.0.1:27017` (Local) or MongoDB Atlas (Cloud)

### 1. Install Dependencies

```bash
# Install root dependencies
npm install

# Install frontend dependencies
npm run install:frontend
```

### 2. Environment Configuration

**Frontend (`frontend/.env`):**

```env
VITE_API_URL=http://localhost:5000/api/v1
VITE_API_BASE_URL=http://localhost:5000/api/v1
```

---

## 🚀 10. Run Commands

### Development Server

```bash
npm run dev
```

### Production Build & Preview

```bash
# 1. Build frontend production bundle
npm run build

# 2. Preview production build locally
npm run preview
```

---

## 💻 11. Local Development & Build Verification

The application is configured for seamless local development and production-ready bundling:

- **Local Development Server:** Run `npm run dev` to launch the Vite development server with Hot Module Replacement (HMR).
- **Production Bundle:** Run `npm run build` to generate an optimized, minified production build in `frontend/dist/`.
- **Preview Production Build:** Run `npm run preview` to locally test and preview the production build output.
- **Strict Code Quality & Linting:** Run `npm run lint:frontend` to verify code quality and style standards with oxlint.

---

## ☁️ 12. Deploying to Render (Step-by-Step)

The project includes pre-configured Render infrastructure configuration files (`render.yaml` and `server.js`) for zero-configuration, one-click deployments:

### Method 1: Render Static Site (Recommended — Fast & 100% Free)

1. Open the [Render Dashboard](https://dashboard.render.com/) and click **New +** &rarr; **Static Site**.
2. Connect your GitHub repository: `https://github.com/ajitkumarsaini02/smart-placement-management-system`.
3. Fill in the build settings:
   - **Name:** `smart-placement-management-system`
   - **Branch:** `main`
   - **Root Directory:** leave blank (repository root)
   - **Build Command:** `cd frontend && npm install && npm run build`
   - **Publish Directory:** `./frontend/dist`
4. Under **Advanced / Redirects and Rewrites**, add the SPA rewrite rule:
   - **Type:** `Rewrite`
   - **Source:** `/*`
   - **Destination:** `/index.html`
5. Click **Create Static Site**. Render will automatically build the React bundle and deploy your site in ~60 seconds.

### Method 2: Render Blueprint (Infrastructure-as-Code via `render.yaml`)

1. In Render Dashboard, click **New +** &rarr; **Blueprint**.
2. Select your repository `smart-placement-management-system`.
3. Render automatically parses `render.yaml` and sets up the Static Site, build commands, and SPA routing rewrites with zero manual entry.
4. Click **Apply** to deploy.

### Method 3: Render Web Service (Node.js Fallback)

If deploying as a Node.js Web Service instead of a Static Site:
- **Build Command:** `npm run build`
- **Start Command:** `npm start` (runs production `server.js` listening on `0.0.0.0:${PORT}`)

---

## 🔗 13. REST API Summary (`/api/v1`)

| Module        | Endpoints                                                                                                                                  | Access Level        | Description                                                     |
| :------------ | :----------------------------------------------------------------------------------------------------------------------------------------- | :------------------ | :-------------------------------------------------------------- |
| **Health**    | `GET /health`                                                                                                                              | Public              | System uptime & MongoDB connection status                       |
| **Auth**      | `POST /auth/register`<br>`POST /auth/login`<br>`GET /auth/me`                                                                              | Public / Protected  | User authentication & session restoration                       |
| **Student**   | `GET /student/dashboard`<br>`GET /student/opportunities`<br>`POST /student/apply/:id`<br>`POST /student/resume`                            | Student Protected   | Student profile, eligibility query, applications, resume upload |
| **Recruiter** | `GET /recruiter/dashboard`<br>`POST /recruiter/jobs`<br>`GET /recruiter/candidates`<br>`POST /recruiter/candidates/:id/schedule-interview` | Recruiter Protected | Job management, applicant review, interview scheduling          |
| **TPO**       | `GET /tpo/dashboard`<br>`GET /tpo/students`<br>`PUT /tpo/companies/:id/verify`<br>`GET /tpo/reports/:type`                                 | TPO Protected       | University administration, analytics, 5 CSV reports             |
| **Notices**   | `GET /notifications`<br>`PUT /notifications/:id/read`                                                                                      | All Roles           | Real-time in-app alerts and notifications                       |

---

## 📄 14. Documentation Links

- [System Design Document (Markdown)](docs/system-design-document.md)
- [PlaceTrack System Design Document (Word Docx)](PlaceTrack%20-%20System%20Design%20Document.docx)

---

_Project ID: Project-ID-048 | Developed by **Ajit Kumar Saini** (`2400230100114`) & **Aditya Yadav** (`2400320100103`) — **CSE-11** | Full-Stack Web Development Submission._

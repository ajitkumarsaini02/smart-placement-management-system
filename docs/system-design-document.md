# ABES ENGINEERING COLLEGE, GHAZIABAD

### Department of Computer Science & Engineering | Section: CSE-11

#### Full-Stack Web Development (5th Semester)

---

# Smart Placement Management System (PlaceTrack)

## System Design Document

**Project Title:** Smart Placement Management & Tracking System (PlaceTrack)  
**Project ID:** `Project-ID-048`  
**Team Members:**

- **Ajit Kumar Saini** (University Roll Number: `2400230100114`)
- **Aditya Yadav** (University Roll Number: `2400320100103`)  
  **Institution:** ABES Engineering College, Ghaziabad  
  **GitHub Repository:** [https://github.com/ajitkumarsaini02/smart-placement-management-system](https://github.com/ajitkumarsaini02/smart-placement-management-system)

---

### 1. Project overview

#### 1.1 Project Summary & Problem Statement

PlaceTrack is a role-aware campus placement automation and tracking platform built on the Decoupled Full-Stack Architecture (React 19 Frontend + Java Spring Boot 3 Backend + Relational Database) with a Pure CSS3 design system (Emerald `#047857`, Mint `#A7F3D0`, Ivory `#FFFEF7`). It eliminates traditional spreadsheet chaos, manual Google Forms, and unversioned messaging by centralizing recruitment operations across Students, Training & Placement Officers (TPO), Corporate Recruiters, and Faculty.

Traditional campus placements suffer from critical bottlenecks: manual verification errors leading to ineligible students attending drives, lack of transparent stage progression for applicants, recruiter overhead in screening unformatted resumes, and weeks of manual compilation for mandatory NAAC (Criteria 5.2.1) and NIRF accreditation audits.

#### 1.2 Target Audience & User Personas

- **Graduating Students:** Discover eligible campus drives, apply with verified PDF resume, track 5-stage progress, and receive Google Meet interview alerts.
- **TPO Cell (Placement Officers):** Audit student records, verify corporate recruiters, launch drives, monitor live analytics, and export 5 official CSV reports.
- **Corporate Recruiters:** Manage company branding, post jobs with custom criteria (CGPA/backlogs), screen applicants, and schedule multi-round interviews.
- **Department Faculty:** Track branch-level placement performance and identify students needing academic interventions.

#### 1.3 Core Objectives & Measurable Impact

- 80% reduction in manual placement administration workload.
- Zero duplicate applications via database compound index `{ student: 1, job: 1 }`.
- Instant automated eligibility calculation across CGPA, backlogs, and academic departments.
- One-click CSV compliance streaming for NAAC and NIRF institutional audits.

---

### 2. System architecture

#### Architecture layers

PlaceTrack implements a decoupled Three-Tier Architecture:

1. **Presentation Tier (Frontend):** React.js 19 + Vite + React Router v7 + Pure CSS3 design variables (Emerald + Mint + Ivory design system).
2. **Application Tier (Backend API):** Java 17/21 + Spring Boot 3.x RESTful API + Spring Security + JWT Authentication Filter + CORS + Spring Data JPA + MultipartFile PDF upload validation.
3. **Data Tier (Database):** Relational Database (PostgreSQL / MySQL) + Spring Data JPA & Hibernate ORM with referential integrity, foreign key relations, and ACID transaction guarantees.

#### Architecture Flow

Data flows sequentially: User Login (JWT + Cookie) $\to$ Student Profile & PDF Resume Upload (Multer $\le 5\text{MB}$) $\to$ Recruiter Job Posting (Custom Criteria) $\to$ TPO Partner Verification $\to$ Automated Eligibility Engine Matching $\to$ 1-Click Application Submission (`{ student: 1, job: 1 }` protection) $\to$ Candidate Screening & Stage Transitions $\to$ Interview Scheduling (Google Meet URLs) $\to$ Placement Offer Extension $\to$ Live Institutional CSV Reports.

---

### 3. Main Modules

#### Module 1: User and Role Management

**Four primary roles:**

| Role          | Permissions                                                                                   |
| :------------ | :-------------------------------------------------------------------------------------------- |
| **Admin**     | Complete system access, institutional configuration, and server health oversight.             |
| **TPO**       | Companies, drives, placements, student verification, live analytics, and CSV exports.         |
| **Faculty**   | Training and student performance monitoring across academic departments.                      |
| **Student**   | Personal profile, academic records, PDF resume upload, and placement activities.              |
| **Recruiter** | Corporate profile branding, campus job postings, applicant screening, interviews, and offers. |

**Features:**

- Login/logout: Secure session initiation and clean termination.
- JWT authentication: Cryptographically signed HMAC SHA-256 tokens with 7-day expiration.
- Role-based authorization: Granular `protect` and `authorize` middleware guards.
- Password reset: Secure email verification and password update workflow.
- Profile management: Role-aware profile update endpoints with field sanitization.
- Department and batch management: Structured enrollment roll numbers and batch years.
- Clean sign-out redirection: Full browser redirect (`window.location.href = '/'`) returning directly to landing page.

#### Module 2: Student Academic & Resume Profile Management

**Features:**

- Academic record builder (CGPA 0.0–10.0, active backlogs, Class 10/12 board marks).
- PDF resume upload via Multer (strict $\le 5\text{MB}$ threshold and PDF MIME validation).
- In-browser resume preview modal and single-click file replacement.
- Technical skills, certifications, and GitHub project showcase portfolio.

#### Module 3: Corporate Recruiter & Job Openings Management

**Features:**

- Company branding profile (overview, industry, headquarters, website, logo URL).
- Job posting engine (Full-time, Internship, CTC in LPA, vacancy count, description).
- Custom academic eligibility cutoffs (min CGPA, max backlogs, allowed departments).
- TPO institutional partner verification gate before live job publishing.

#### Module 4: Campus Placement Drive Management

**Features:**

- Campus-wide recruitment drive scheduling linked to academic calendar years (e.g. 2025–2026).
- Multi-company drive circulars and institutional baseline eligibility definition.

#### Module 5: Automated Backend Eligibility Engine

**Features:**

- Deterministic formula:
  $$\text{isEligible} = (\text{CGPA} \ge \text{minCGPA}) \land (\text{Backlogs} \le \text{maxBacklogs}) \land (\text{Dept} \in \text{allowedDepts}) \land (\text{10th} \ge \text{min10th}) \land (\text{12th} \ge \text{min12th})$$
- Granular ineligibility feedback reasons attached to opportunities feed (e.g. _"Requires CGPA 7.50, your CGPA: 6.80"_).
- Hard backend controller enforcement blocking ineligible application submissions.

#### Module 6: End-to-End Application Pipeline & Round Tracking

**Features:**

- Visual 5-stage stepper: `Applied` $\to$ `Under Review` $\to$ `Shortlisted` $\to$ `Interview Scheduled` $\to$ `Selected`.
- Unique compound index `{ student: 1, job: 1 }` strictly preventing duplicate applications.
- Applicant screening with department/CGPA filters and audit timeline logging.

#### Module 7: Multi-Round Interview Scheduling & Meeting Integration

**Features:**

- Structured round creation (Technical 1, Coding Assessment, HR Interview).
- Embedded video conference links (Google Meet, Microsoft Teams) and automated candidate alerts.

#### Module 8: Real-Time In-App Notification System

**Features:**

- Database-backed alert queue with unread counter badge and category filters.
- Individual and bulk mark-as-read notification actions.

#### Module 9: Institutional Analytics & Accreditation Reporting

**Features:**

- Live dashboard counters (Students, Companies, Drives, Placed count, Placement %).
- 5 downloadable CSV compliance reports for NAAC Criteria 5.2.1 and NIRF ranking audits.

#### Module 10: Security, Input Validation & System Health Monitoring

**Features:**

- Helmet HTTP security headers, CORS origin whitelisting for `*.vercel.app`.
- Spring Security rate limiting against brute force, JWT authentication filter, and Spring Boot Actuator /actuator/health uptime probe.

---

### 4. Database design

#### DATABSE SCHEMA AND ER DIAGRAM

PlaceTrack utilizes a relational database (PostgreSQL / MySQL) mapped and managed through Spring Data JPA and Hibernate ORM. The database schema consists of 9 registered domain entities designed with referential integrity, validations, and unique constraints:

| Entity / Table Name   | Key Fields & Attributes                                                    | Domain Purpose & Indexes                                             |
| :-------------------- | :--------------------------------------------------------------------------- | :------------------------------------------------------------------- |
| **`users`**           | `name, email, password, role, isVerified`                                    | Platform accounts; unique email index; bcrypt hash (`select: false`) |
| **`students`**        | `user, rollNumber, department, cgpa, backlogs, resume, placementStatus`      | Student academic records; unique rollNumber & user index             |
| **`companies`**       | `name, user, industry, website, headquarters, isVerified`                    | Corporate partners; unique company name; TPO verification flag       |
| **`jobs`**            | `company, title, jobType, packageLPA, eligibilityCriteria, deadline, status` | Campus openings; salary & deadline indexes; criteria subdocument     |
| **`applications`**    | `student, job, status, statementOfPurpose, timeline`                         | Stage tracking; **UNIQUE COMPOUND INDEX `{ student: 1, job: 1 }`**   |
| **`placementdrives`** | `title, company, academicYear, startDate, endDate, eligibility`              | Coordinated university placement drive circulars                     |
| **`notifications`**   | `recipient, title, message, type, isRead, readAt`                            | Real-time user alerts and unread notification counter                |
| **`resumes`**         | `student, fileName, originalName, fileUrl, fileSize`                         | Storage references for verified PDF resumes ($\le 5\text{MB}$)       |
| **`interviews`**      | `application, student, job, roundName, scheduledAt, meetingLink, status`     | Interview schedules with Google Meet links & status                  |

---

### 5. Rest API Design

| HTTP Method | Endpoint                                              | Purpose                                                     |
| :---------- | :---------------------------------------------------- | :---------------------------------------------------------- |
| `POST`      | `/api/v1/auth/login`                                  | Login user and issue signed JWT                             |
| `POST`      | `/api/v1/auth/register`                               | Register student or recruiter account                       |
| `POST`      | `/api/v1/auth/logout`                                 | Logout user session and clear cookies                       |
| `GET`       | `/api/v1/auth/me`                                     | Get current authenticated user profile                      |
| `GET`       | `/api/v1/student/dashboard`                           | Get student dashboard KPIs, applications, and drives        |
| `GET`       | `/api/v1/student/profile`                             | Get student academic profile and verified resume            |
| `PUT`       | `/api/v1/student/profile`                             | Update student academic records (CGPA, backlogs)            |
| `POST`      | `/api/v1/student/resume`                              | Upload and validate verified PDF resume ($\le 5\text{MB}$)  |
| `GET`       | `/api/v1/student/opportunities`                       | Get job openings with live eligibility computation          |
| `POST`      | `/api/v1/student/apply/:id`                           | Submit application for an eligible job opening              |
| `GET`       | `/api/v1/student/applications`                        | Get student submitted applications and interview details    |
| `GET`       | `/api/v1/recruiter/dashboard`                         | Get recruiter dashboard metrics and interview pipeline      |
| `GET`       | `/api/v1/recruiter/jobs`                              | Get all job openings posted by recruiter's company          |
| `POST`      | `/api/v1/recruiter/jobs`                              | Create new job opening with custom eligibility cutoffs      |
| `GET`       | `/api/v1/recruiter/candidates`                        | Filter and search candidates with PDF resume preview        |
| `PUT`       | `/api/v1/recruiter/candidates/:id/status`             | Transition candidate recruitment stage                      |
| `POST`      | `/api/v1/recruiter/candidates/:id/schedule-interview` | Schedule interview round with Google Meet link              |
| `GET`       | `/api/v1/tpo/dashboard`                               | Get institutional overview and live placement rate %        |
| `GET`       | `/api/v1/tpo/students`                                | Search and filter university-wide student records           |
| `PUT`       | `/api/v1/tpo/students/:id/verify`                     | Toggle student academic verification audit flag             |
| `PUT`       | `/api/v1/tpo/companies/:id/verify`                    | Verify and approve corporate recruiter partner account      |
| `POST`      | `/api/v1/tpo/drives`                                  | Schedule campus-wide placement drive tied to company        |
| `GET`       | `/api/v1/tpo/reports/:type`                           | Stream 5 downloadable CSV reports (NAAC/NIRF audit format)  |
| `GET`       | `/api/v1/notifications`                               | Retrieve in-app notifications with unread counts            |
| `GET`       | `/api/v1/health`                                      | System health check, uptime, and database connection status |

---

### 6. Recommended development phases

| Phase | Development                                                                       | Duration |
| :---- | :-------------------------------------------------------------------------------- | :------- |
| **1** | Requirements Analysis & UI/UX Design System (Pure CSS3 Emerald/Mint)              | 2 days   |
| **2** | Enterprise Architecture, Frontend Setup & Java Spring Boot REST API Setup                | 2 days   |
| **3** | Database Schema Design, Compound Indexes & Initial Seeders                        | 3 days   |
| **4** | Authentication, JWT Cryptography & Role-Based Access Control (RBAC)               | 1 week   |
| **5** | Student Portal, Academic Profile & Multer PDF Resume Upload                       | 4 days   |
| **6** | Recruiter Portal, Job Openings Engine & Automated Eligibility Calculation         | 5 days   |
| **7** | Application Pipeline, Round Stepper & Multi-Round Interview Scheduler             | 4 days   |
| **8** | TPO Command Centre, Live Analytics & 5 Downloadable CSV Reports                   | 4 days   |
| **9** | Security Auditing, Verification Testing & Live Cloud Deployment (Vercel + Render) | 2 days   |

---

> [!NOTE]
> **Academic Submission:**  
> **Project ID:** `Project-ID-048`  
> **Institution:** ABES Engineering College, Ghaziabad | Department of Computer Science & Engineering (**CSE-11**)  
> Developed by **Ajit Kumar Saini** (Roll: `2400230100114`) & **Aditya Yadav** (Roll: `2400320100103`).

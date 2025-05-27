# 🏃‍♂️ Fitness-Application

A full-stack microservices-based fitness tracker that allows users to log their physical activities and receive AI-generated personalized health and wellness recommendations.

---

## 🚀 Features

- 🔐 **User Authentication** using **Keycloak**
- 📋 **Activity Logging** – type, duration, calories burned
- 🤖 **AI-Powered Recommendations** based on activity logs
- 🧩 **Microservices Architecture**:
  - **User Service** – manages user information and authentication
  - **Activity Service** – logs and retrieves activity data
  - **AI Service** – generates activity insights and suggestions
- 🧭 **Service Discovery** using **Eureka**
- 🌐 **Frontend** in React with Material UI
- 🔄 **OAuth2 Authorization** using PKCE flow

---

## 🧱 Tech Stack

### ⚙️ Backend (Microservices)
- **Spring Boot**
- **Spring Cloud** (Eureka, Config, Gateway)
- **Keycloak** (OAuth2 Authorization Server)
- **REST APIs**
- **PostgreSQL / MongoDb** (or your DB of choice)

### 💡 AI Service
- Java microservice for AI logic (e.g., rules-based or ML model)
- **Gemini 2.0 Flash **

### 🎨 Frontend
- **React.js**
- **Material UI**
- **Redux Toolkit**
- **React Router DOM**
- **Axios**
- **react-oauth2-code-pkce**

---
## 📁 Project Structure

fitness-app/
├── activityservice/        # Microservice to manage user activities (CRUD)
├── aiservice/              # Microservice to generate AI-based fitness recommendations
├── configserver/           # Centralized Spring Cloud Config Server
├── eureka/                 # Eureka Service Registry for service discovery
├── fitness-app-frontend/   # Frontend built with React and MUI
├── gateway/                # API Gateway for routing and security
├── userservice/            # Microservice to manage user registration and profiles
├── package-lock.json       # Node package lock file for frontend dependencies
└── README.md               # Project documentation

---
## 🚀 To Run Locally

1. Start Keycloak and Eureka
2. Run each Spring Boot microservice
3. Start the React frontend:



# Aura Beauty Charm 🌸✨

A modern, high-end beauty salon management system designed to provide a premium booking experience. This project features a responsive React frontend and a robust NestJS backend integrated with MongoDB.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: Ensure you have Node.js installed.
- **pnpm**: This project uses `pnpm` as the package manager.
- **MongoDB**: A local MongoDB instance should be running on `mongodb://localhost:27017`.

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. (Optional) Seed the database with initial beauty services:
   ```bash
   node seed.js
   ```
4. Start the development server:
   ```bash
   pnpm run start:dev
   ```
   *The backend will be available at `http://localhost:3002`.*

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the development server:
   ```bash
   pnpm run dev
   ```
   *The frontend will be available at `http://localhost:3001` (or `3000` depending on port availability).*

---

## 🛠 Tech Stack
- **Frontend**: Next.js (React), Tailwind CSS, Framer Motion, Lucide Icons.
- **Backend**: NestJS, MongoDB (Mongoose).
- **Validation**: class-validator, class-transformer.
- **Styling**: Premium custom design system with dark/light mode support.

---

## 🧠 Assumptions Made
- **Local MongoDB**: It is assumed that MongoDB is running locally without authentication for development purposes.
- **Single Currency**: All service prices currently assume a single currency ($) as provided in the initial design.
- **Global Port Configuration**: The backend is hardcoded to port `3002` to avoid common conflicts with the frontend.

---

## 📈 Future Improvements
With more time, the following enhancements could be made:
1. **User Authentication**: Implement a secure login system for customers and staff.
2. **Dashboard for Staff**: A dedicated UI for salon owners to manage bookings and update service availability.
3. **Payment Integration**: Connect Stripe or PayPal to allow clients to pay for services during booking.
4. **Email Notifications**: Automatic confirmation and reminder emails for appointments.
5. **Environment Configuration**: Move sensitive data (like DB strings and ports) to `.env` files for better security.
6. **Unit & E2E Testing**: Expand test coverage to ensure long-term stability as new features are added.

---

© 2026 Aura Beauty Studio. All rights reserved. ✨

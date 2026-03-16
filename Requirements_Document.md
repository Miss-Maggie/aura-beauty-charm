# Requirements Document - Aura Beauty Charm 🌸✨

## 1. Executive Summary
Aura Beauty Charm is a professional-grade salon management system designed to bridge the gap between clients and beauty practitioners. The system provides a luxury-focused digital interface for discovering services and a robust backend for managing appointment lifecycles.

## 2. System Purpose
The system solves the problem of inefficient appointment scheduling by:
- Replacing manual paper-based logs with a centralized MongoDB database.
- Reducing "double-booking" risks through real-time data persistence.
- Providing a 24/7 digital storefront where clients can explore treatment options without manual intervention.

## 3. Main Features
- **Dynamic Service Catalog**: A real-time list of beauty treatments (Hair, Nails, Spa) fetched from the database, including pricing, duration, and icons.
- **Automated Booking Engine**: A multi-step form that validates customer input and service availability.
- **Booking Management**: A centralized dashboard to view, track, and manage all appointment statuses.
- **Data Persistence**: Full integration with MongoDB to ensure no booking data is lost.
- **Responsive Design**: A premium, "wow-factor" UI that works seamlessly across desktop and mobile devices.

## 4. User Types
### 4.1 Client (End User)
- **Goal**: Discover services and book appointments.
- **Actions**: View hero section, browse services, fill out booking forms, and receive visual confirmation via toast notifications.

### 4.2 Staff / Administrator
- **Goal**: Manage daily operations and fulfill appointments.
- **Actions**: Access the `/bookings` dashboard, monitor the queue, update booking statuses (Pending → Confirmed → Completed), and delete outdated entries.

## 5. Important Workflows

### 5.1 Creating a Booking
**Information Needed:**
- **Customer Name**: Full name for identification.
- **Phone Number**: Contact details for reminders or follow-ups.
- **Service ID**: The specific treatment selected (linked to the database).
- **Date**: The intended day of the appointment.
- **Time**: The specific slot selected by the user.

**Process:**
1. Client selects a service from the home page.
2. Client fills the `BookingForm` with personal details and time.
3. System validates the `serviceId` is current and exists in MongoDB.
4. System creates a new document in the `bookings` collection with a default "Pending" status.
5. Client is redirected to the management view.

### 5.2 Managing Bookings
Staff users access the `/bookings` table where they can:
- **Filter/Sort**: View all upcoming appointments.
- **Update Status**: Move a booking through the lifecycle (e.g., marking a treatment as "Completed").
- **Audit**: Verify client details before the appointment starts.

## 6. Future Roadmap & Improvements
- **Authentication**: Secure separate views for Staff and Clients.
- **Calendaring**: Visual calendar views (Gantt or Month view) for better scheduling.
- **Smarter Logic**: Prevent overlapping bookings for the same time slot automatically in the backend.

---
**Status**: Finalized Version 1.0
**Project**: Aura Beauty Charm
**Date**: March 2026

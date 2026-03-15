# QuickStay – Hotel Booking Platform

QuickStay is a full-stack hotel booking platform that allows users to explore hotels, check room availability, and manage bookings while providing hotel owners with an admin dashboard to manage rooms and bookings.

This repository currently contains the **frontend implementation** built with **React**, **TailwindCSS**, and **Clerk Authentication**.

---

##  Features

### User Side

* Browse available hotel rooms
* View room details with images, amenities, and location map
* Filter and explore rooms
* Check room availability
* View and manage bookings
* Cancel bookings
* Secure authentication using Clerk

### Admin Side

* Hotel registration onboarding
* Admin dashboard
* Add new rooms with amenities and images
* Manage room listings
* Toggle room availability
* Delete rooms
* Protected admin routes
* Sidebar dashboard layout

---

##  Tech Stack

**Frontend**

* React
* React Router
* TailwindCSS
* Clerk Authentication
* Leaflet (Map integration)

**Planned Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose
* Cloudinary (Image uploads)
* Stripe (Payments)

---



##  Authentication

Authentication is implemented using **Clerk**.

Features include:

* Login / Signup
* User avatar
* Protected routes
* Admin dashboard protection

---

##  Admin Flow

```
Login
   ↓
Register Hotel (first time only)
   ↓
Admin Dashboard
   ├ Add Rooms
   ├ List Rooms
   └ Manage bookings
```

---

##  Current Status

The **frontend of the hotel booking platform is complete** and includes both user and admin interfaces.

Next steps include building the backend APIs to power the platform.

---

##  Upcoming Features

* Backend API with Express and MongoDB
* Real-time room availability
* Image uploads with Cloudinary
* Booking management system
* Payment integration using Stripe
* Admin booking analytics

---

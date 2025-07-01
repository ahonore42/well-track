# NudgeTrack

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/yourusername/nudgetrack)
[![Platform](https://img.shields.io/badge/platform-iOS%20%7C%20Android-lightgrey.svg)](https://expo.dev/)
[![React Native](https://img.shields.io/badge/React%20Native-0.80-61DAFB.svg)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-SDK%2053-000020.svg)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6.svg)](https://www.typescriptlang.org/)

> A cross-platform mobile health tracking application that enables medication, sleep, and mood logging through interactive push notifications without requiring users to open the app.

## What is NudgeTrack?

NudgeTrack is a React Native mobile application that solves the friction problem in daily health tracking. Instead of requiring users to open an app and navigate through screens to log their wellness data, NudgeTrack delivers interactive push notifications that allow users to track medications, sleep quality, and mood with a single tap directly from their notification panel.

The application automatically syncs all responses to a cloud database and provides users with a comprehensive dashboard to view their health trends and progress over time.

---

## Core Functionality

### **Interactive Push Notifications**

- Medication reminders with "Taken", "Skip", or "Remind Later" buttons
- Sleep quality check-ins with emoji-based quick responses
- Daily mood assessments through notification actions
- All tracking occurs without opening the application

### **Health Dashboard**

- Real-time visualization of daily health metrics
- Weekly and monthly trend analysis
- Medication adherence tracking and streak monitoring
- Historical data views with visual progress indicators

### **Comprehensive Tracking**

- Multiple medication and supplement management
- Customizable reminder schedules for each medication
- Sleep quality monitoring with simple rating system
- Daily mood tracking with trend analysis
- Data export functionality for healthcare providers

### **User Management**

- Secure user authentication and account management
- Guided onboarding flow with permission setup
- Personalized reminder scheduling
- Privacy-focused data handling

---

## Technical Architecture

### **Frontend Stack**

```
React Native (Expo)     - Cross-platform mobile framework
TypeScript              - Type-safe development
React Navigation        - Native navigation patterns
Expo Notifications      - Interactive push notification system
Custom Design System    - Consistent UI components and styling
```

### **Backend Infrastructure**

```
Supabase               - Backend-as-a-Service platform
PostgreSQL             - Primary database with real-time capabilities
Row Level Security     - Database-level access control
RESTful API            - Auto-generated from database schema
Real-time Sync         - Live data updates across devices
```

### **Data Flow**

1. **Scheduled notifications** trigger at user-defined times
2. **User interactions** with notification buttons send data to background handlers
3. **Background handlers** communicate directly with Supabase API
4. **Database updates** trigger real-time sync to update app interface
5. **Dashboard refreshes** automatically reflect new data without user intervention

---

## Application Structure

### **Authentication & Onboarding**

- Email/password authentication with session management
- Progressive onboarding flow introducing core features
- Notification permission requests with explanations
- Initial medication setup and reminder configuration

### **Main Application**

- **Dashboard**: Today's progress and weekly summaries
- **History**: 30-day tracking history with visual indicators
- **Medications**: Management of tracked medications and schedules
- **Settings**: Account management and notification preferences

### **Background Processing**

- Notification response handlers operating independently of main app
- Automatic data synchronization with conflict resolution
- Offline capability with sync when connectivity resumes
- Error handling and retry logic for failed operations

---

## Technical Implementation

### **Mobile Development**

- **Cross-platform deployment** for iOS and Android
- **Native notification integration** with platform-specific features
- **TypeScript implementation** for type safety and developer experience
- **Component-based architecture** with reusable UI elements

### **Real-time Data Management**

- **PostgreSQL database** with structured health data schema
- **Row-level security policies** ensuring user data isolation
- **Real-time subscriptions** for live dashboard updates
- **API abstraction layer** for consistent data operations

### **Security & Privacy**

- **JWT-based authentication** with automatic token refresh
- **Database-level access controls** preventing unauthorized data access
- **Encrypted data transmission** between client and server
- **Local data caching** with secure storage implementation

### **Performance Optimizations**

- **Background notification processing** without app startup overhead
- **Optimistic UI updates** for immediate user feedback
- **Lazy loading strategies** for improved application performance
- **Memory-efficient data handling** for sustained operation

---

## Development Status

### **MVP Features (v1.0)**

- [ ] Interactive notification system with background processing
- [ ] User authentication and secure session management
- [ ] Medication tracking with customizable reminders
- [ ] Sleep quality logging with quick responses
- [ ] Daily mood check-ins through notifications
- [ ] Real-time dashboard with progress visualization
- [ ] Cross-platform deployment for iOS and Android
- [ ] Basic data export functionality

### **Roadmap**

#### **Version 2.0 - Enhanced Analytics**

- [ ] Weekly and monthly trend analysis
- [ ] Medication adherence insights and recommendations
- [ ] Sleep pattern correlation with mood data
- [ ] Streak tracking and achievement system
- [ ] Advanced data visualization with charts
- [ ] Customizable notification schedules per medication

#### **Version 3.0 - Integration & Sharing**

- [ ] Apple Health and Google Fit integration
- [ ] Healthcare provider data sharing
- [ ] Family account linking for caregivers
- [ ] Medication interaction warnings
- [ ] Backup and restore functionality
- [ ] Multi-language localization

#### **Version 4.0 - Advanced Features**

- [ ] AI-powered health insights and predictions
- [ ] Wearable device integration (Apple Watch, Fitbit)
- [ ] Telemedicine appointment scheduling
- [ ] Prescription refill reminders
- [ ] Community features and peer support
- [ ] Clinical trial participation tracking

### **Architecture Highlights**

- **Serverless backend** with automatic scaling capabilities
- **Real-time data synchronization** across multiple devices
- **Background notification processing** without app interaction
- **Type-safe development** with comprehensive TypeScript implementation
- **Component-driven UI** with consistent design system

---

## License

Copyright © 2025 Adam Honoré. All Rights Reserved.

This software and associated documentation files are proprietary and confidential. Permission is granted to view this source code for educational and evaluation purposes only. No license is granted to use, copy, modify, distribute, or create derivative works without explicit written permission from the copyright owner.

---

<div align="center">

**React Native application with interactive push notifications, real-time data sync, and cross-platform mobile development**

</div>



# Expo React Native Test Task

This project is a React Native application built with **Expo**.  
It implements a simple onboarding and signup flow, followed by a dynamic **My Account** screen populated from a backend API.

The app was designed to run directly in **Expo Go** without requiring any native builds.

---

## Features

- Onboarding flow shown only on first launch
- Signup form with validation
- API integration with multi-step backend instructions
- Dynamic **My Account** screen based on API response
- Persistent onboarding state using AsyncStorage
- Light and dark theme support
- Clean modular architecture

---

## Tech Stack

- **Expo**
- **React Native**
- **React Navigation**
- **TypeScript**
- **Axios**
- **AsyncStorage**

---

## Installation

Clone the repository and install dependencies.

```bash
git clone <repo-url>
cd test-expo-go
npm install
```

Running the App

Start the development server:

`npx expo start`

Architecture

The project separates responsibilities into clear layers:

src
├── components UI components
├── screens Application screens
├── navigation Navigation setup
├── services API communication
├── usecases Business logic (signup flow)
├── mappers API → UI data transformations
├── storage AsyncStorage helpers
├── theme Light / dark theme system
└── types TypeScript models

State Management

Local component state is handled with useState.

Persistent state uses AsyncStorage for:
• onboarding completion
• account data storage

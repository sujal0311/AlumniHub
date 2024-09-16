// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import ChatPage from './pages/ChatPage';
import EventPage from './pages/EventPage';
import AIDrivenMatchingPage from './pages/AIDrivenMatchingPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';
import Mentorship from './pages/MentorshipPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:name" element={<ChatPage />} />
        <Route path="/dashboard/events" element={<EventPage />} />
        <Route path="/dashboard/matching" element={<AIDrivenMatchingPage />} />
        <Route path="/dashboard/settings" element={<SettingsPage/>} />
        <Route path="/dashboard/mentorship" element={<Mentorship/>} />
        <Route path="/dashboard/my-profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;

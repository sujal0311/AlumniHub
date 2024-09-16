import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Aside from './Aside';

const Dashboard = () => {
  const [language, setLanguage] = useState('en');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Define translations
  const translations = {
    en: {
      welcome: 'Welcome to AlumniHub',
      name: 'Hi Sujal !!',
      profile: 'Profile',
      network: 'Alumni Network',
      events: 'Events',
      mentorship: 'Mentorship',
      aiMatch: 'AI-driven Matching',
      stats: 'Your Statistics',
      alumniConnected: 'Alumni Connected',
      availableMentorships: 'Available Mentorships',
      upcomingEvents: 'Upcoming Events',
      notifications: 'Notifications',
      alumniSuggestions: 'Alumni Suggestions',
      logout: 'Logout',
      connect: 'Connect',
      viewProfile: 'View Profile',
      matchScore: 'Match Score',
      settings: 'Settings',
      search: 'Search Alumni...',
      recentActivity: 'Recent Activity',
    },
    hi: {
      welcome: 'अलुमनीहब में आपका स्वागत है',
      name: 'नमस्ते सुजाल !!',
      profile: 'प्रोफाइल',
      network: 'पूर्व छात्र नेटवर्क',
      events: 'इवेंट्स',
      mentorship: 'मेंटॉरशिप',
      aiMatch: 'एआई-संचालित मिलान',
      stats: 'आपके आँकड़े',
      alumniConnected: 'कनेक्टेड पूर्व छात्र',
      availableMentorships: 'उपलब्ध मेंटरशिप्स',
      upcomingEvents: 'आगामी इवेंट्स',
      notifications: 'सूचनाएँ',
      alumniSuggestions: 'पूर्व छात्र सुझाव',
      logout: 'लॉगआउट',
      connect: 'जोड़ें',
      viewProfile: 'प्रोफाइल देखें',
      matchScore: 'मिलान स्कोर',
      settings: 'सेटिंग्स',
      search: 'पूर्व छात्र खोजें...',
      recentActivity: 'हाल की गतिविधि',
    },
    mrw: {
      welcome: 'अलुमनीहब में आपका स्वागत है',
      name: 'नमस्कार सुजल !!',
      profile: 'प्रोफाइल',
      network: 'पूर्व विद्यार्थी नेटवर्क',
      events: 'इव्हेंट्स',
      mentorship: 'मेन्टॉरशिप',
      aiMatch: 'AI-चालित मिलान',
      stats: 'तुमच्या आकडेवारी',
      alumniConnected: 'जोडलेले पूर्व विद्यार्थी',
      availableMentorships: 'उपलब्ध मार्गदर्शन',
      upcomingEvents: 'उत्सव येत आहेत',
      notifications: 'सूचनाएँ',
      alumniSuggestions: 'पूर्व विद्यार्थी सुचना',
      logout: 'लॉगआउट',
      connect: 'जोडा',
      viewProfile: 'प्रोफाइल पहा',
      matchScore: 'मिलान स्कोर',
      settings: 'सेटिंग्ज',
      search: 'पूर्व विद्यार्थी शोधा...',
      recentActivity: 'ताज्या क्रियाकलाप',
    },
    bn: {
      welcome: 'আলুমনিহাব এ স্বাগতম',
      name: 'হ্যালো সুজল !!',
      profile: 'প্রোফাইল',
      network: 'অ্যালুমনি নেটওয়ার্ক',
      events: 'ইভেন্টস',
      mentorship: 'মেন্টরশিপ',
      aiMatch: 'AI-চালিত মিলন',
      stats: 'আপনার পরিসংখ্যান',
      alumniConnected: 'সংযুক্ত অ্যালুমনাই',
      availableMentorships: 'উপলব্ধ মেন্টরশিপ',
      upcomingEvents: 'আসন্ন ইভেন্টস',
      notifications: 'বিজ্ঞপ্তি',
      alumniSuggestions: 'অ্যালুমনি পরামর্শ',
      logout: 'লগআউট',
      connect: 'যোগাযোগ করুন',
      viewProfile: 'প্রোফাইল দেখুন',
      matchScore: 'ম্যাচ স্কোর',
      settings: 'সেটিংস',
      search: 'অ্যালুমনির সন্ধান করুন...',
      recentActivity: 'সাম্প্রতিক কার্যক্রম',
    },
  };

  // Retrieve the language preference from local storage
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(storedLanguage);
  }, []);

  const t = translations[language];

  const alumniSuggestions = [
    {
      name: 'John Doe',
      role: 'Software Engineer',
      company: 'Google',
      expertise: 'Mentoring',
      matchScore: 85,
      image: 'https://th.bing.com/th/id/OIG4.DI5_s1MW4ju7A8rCzt9o?w=1024&h=1024&rs=1&pid=ImgDetMain',
    },
    {
      name: 'Jane Smith',
      role: 'Product Manager',
      company: 'Facebook',
      expertise: 'Networking',
      matchScore: 90,
      image: 'https://th.bing.com/th/id/OIG4.dTzhjiHfuInWPh.AfR02?pid=ImgGn',
    },
    {
      name: 'Rahul Verma',
      role: 'Founder',
      company: 'Startup X',
      expertise: 'Collaboration',
      matchScore: 78,
      image: 'https://th.bing.com/th/id/OIG4.Hq3f4kYFxOT5m4E5yxOQ?pid=ImgGn',
    },
  ];

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#232F47] to-[#1c2535] text-white flex">
      {/* Aside Component */}
      <Aside currentPage="/dashboard" />

      {/* Main Content */}
      <div className="flex-1 p-8 ml-52 w-[84.7vw] text-black">
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#f9a825]">{t.welcome}</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder={t.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 rounded border border-gray-300 bg-[#fffff] text-black placeholder-black w-96"
            />
            <button
              className="p-2 rounded text-white bg-red-500"
              onClick={handleLogout}
            >
              {t.logout}
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold">{t.alumniConnected}</h2>
            <p className="text-lg">2,300 Alumni</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold">{t.availableMentorships}</h2>
            <p className="text-lg">150 Mentorships</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold">{t.upcomingEvents}</h2>
            <p className="text-lg">10 Events</p>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">{t.recentActivity}</h2>
          <ul>
            <li className="mb-2">1. You connected with Jane Smith - 1 day ago</li>
            <li className="mb-2">2. You applied for a mentorship with John Doe - 3 days ago</li>
            <li>3. Webinar on Blockchain attended - 5 days ago</li>
          </ul>
        </div>

        {/* Notifications */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">{t.notifications}</h2>
          <ul>
            <li>1. Webinar on Blockchain: 15th Sept, 2024</li>
            <li>2. Alumni Networking Event: 20th Sept, 2024</li>
            <li>3. New Mentorship Opportunities Available</li>
          </ul>
        </div>

        {/* Alumni Suggestions */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">{t.alumniSuggestions}</h2>
          <div className="grid grid-cols-3 gap-6">
            {alumniSuggestions.map((alumni, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center"
              >
                <img
                  src={alumni.image}
                  alt={alumni.name}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold">{alumni.name}</h3>
                <p className="text-sm text-gray-600">{alumni.role}</p>
                <p className="text-sm text-gray-600">{alumni.company}</p>
                <p className="text-sm text-gray-600">{alumni.expertise}</p>
                <p className="text-sm text-gray-600">
                  {t.matchScore}: {alumni.matchScore}%
                </p>
                <div className="mt-4 flex space-x-2">
                  <button className="bg-[#f9a825] text-black py-2 px-4 rounded">
                    {t.connect}
                  </button>
                  <button className="bg-gray-300 text-black py-2 px-4 rounded">
                    {t.viewProfile}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

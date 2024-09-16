import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SettingsModal = ({ isOpen, onClose }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  const [notificationsEnabled, setNotificationsEnabled] = useState(
    JSON.parse(localStorage.getItem('notificationsEnabled')) || false
  );
  const [showVerifiedAlumni, setShowVerifiedAlumni] = useState(
    JSON.parse(localStorage.getItem('showVerifiedAlumni')) || false
  );

  const translations = {
    en: {
      settings: 'Settings',
      language: 'Language',
      notifications: 'Enable Notifications',
      verifiedAlumni: 'Show Only Verified Alumni',
      save: 'Save Settings',
    },
    hi: {
      settings: 'सेटिंग्स',
      language: 'भाषा',
      notifications: 'सूचनाएं सक्षम करें',
      verifiedAlumni: 'केवल सत्यापित पूर्व छात्रों को दिखाएं',
      save: 'सेटिंग्स सहेजें',
    },
    mrw: {
      settings: 'सेटिंग',
      language: 'भासा',
      notifications: 'सूचना चालू करो',
      verifiedAlumni: 'सिर्फ पक्का पूर्व विध्यार्थी देखाओ',
      save: 'सेटिंग बचाओ',
    },
    bn: {
      settings: 'সেটিংস',
      language: 'ভাষা',
      notifications: 'বিজ্ঞপ্তি সক্রিয় করুন',
      verifiedAlumni: 'শুধুমাত্র যাচাই করা প্রাক্তন ছাত্র দেখান',
      save: 'সেটিংস সংরক্ষণ করুন',
    },
  };

  const t = translations[language];

  useEffect(() => {
    localStorage.setItem('language', language);
    localStorage.setItem('notificationsEnabled', notificationsEnabled);
    localStorage.setItem('showVerifiedAlumni', showVerifiedAlumni);
  }, [language, notificationsEnabled, showVerifiedAlumni]);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSaveSettings = () => {
    onClose();
    toast.success('Settings saved successfully!');
    window.location.reload()
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-black">
      <div className={`bg-white p-6 rounded-lg shadow-lg w-full max-w-lg`}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{t.settings}</h1>
          <button onClick={onClose} className="text-2xl">&times;</button>
        </div>

        <div className="space-y-6">
          {/* Language Selection */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <label className="block text-lg font-semibold mb-2">{t.language}:</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={language}
              onChange={handleLanguageChange}
            >
              <option value="en">English</option>
              <option value="hi">हिंदी (Hindi)</option>
              <option value="mrw">मारवाड़ी (Marwadi)</option>
              <option value="bn">বাংলা (Bengali)</option>
            </select>
          </div>

          {/* Notifications Toggle */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <label className="block text-lg font-semibold mb-2">{t.notifications}:</label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-[#f9a825] border-gray-300 rounded focus:ring focus:ring-[#f9a825]/50"
                checked={notificationsEnabled}
                onChange={() => setNotificationsEnabled(!notificationsEnabled)}
              />
              <span className="ml-2 text-sm">{notificationsEnabled ? 'Enabled' : 'Disabled'}</span>
            </label>
          </div>

          {/* Show Verified Alumni Toggle */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <label className="block text-lg font-semibold mb-2">{t.verifiedAlumni}:</label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-[#f9a825] border-gray-300 rounded focus:ring focus:ring-[#f9a825]/50"
                checked={showVerifiedAlumni}
                onChange={() => setShowVerifiedAlumni(!showVerifiedAlumni)}
              />
              <span className="ml-2 text-sm">{showVerifiedAlumni ? 'Enabled' : 'Disabled'}</span>
            </label>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSaveSettings}
            className="bg-[#f9a825] text-black py-2 px-6 rounded hover:bg-[#f9a825]/90 transition-colors w-full"
          >
            {t.save}
          </button>
        </div>
      </div>
      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default SettingsModal;

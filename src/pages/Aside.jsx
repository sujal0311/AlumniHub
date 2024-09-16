import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SettingsModal from './SettingsPage'; // Import the SettingsModal component

const Aside = ({ currentPage }) => {
  const navigate = useNavigate();

  const [isSettingsOpen, setIsSettingsOpen] = useState(false); // State to control modal visibility

  // Retrieve the language preference from local storage
  const storedLanguage = localStorage.getItem('language') || 'en';
  
  // Define translations
  const translations = {
    en: {
      hi: "Hi Sujal !!",
      settings: "Settings",
      profile: "Profile",
      alumniNetwork: "Alumni Network",
      events: "Events",
      mentorship: "Mentorship",
      aiMatching: "AI-driven Matching",
    },
    hi: {
      hi: "नमस्ते सुजाल !!",
      settings: "सेटिंग्स",
      profile: "प्रोफ़ाइल",
      alumniNetwork: "पूर्व छात्र नेटवर्क",
      events: "इवेंट्स",
      mentorship: "मेंटॉरशिप",
      aiMatching: "एआई-संचालित मिलान",
    },
    bn: {
      hi: "হ্যালো সুজল !!",
      settings: "সেটিংস",
      profile: "প্রোফাইল",
      alumniNetwork: "অ্যালামনাই নেটওয়ার্ক",
      events: "ইভেন্টস",
      mentorship: "মেন্টরশিপ",
      aiMatching: "এআই-চালিত মেলামেশা",
    },
    mrw: {
      hi: "नमस्कार सुजल !!",
      settings: "सेटिंग्ज",
      profile: "प्रोफाइल",
      alumniNetwork: "पूर्व विद्यार्थी नेटवर्क",
      events: "इव्हेंट्स",
      mentorship: "मेन्टॉरशिप",
      aiMatching: "AI-चालित मिलान",
    },
  };

  const t = translations[storedLanguage];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handlename = (path) => {
    navigate("/dashboard");
  };

  // Open the settings modal instead of navigating to the settings page
  const handleSettings = () => {
    setIsSettingsOpen(true); // Open the modal
  };

  const closeSettings = () => {
    setIsSettingsOpen(false); // Close the modal
  };

  const menuItems = [
    { label: t.profile, path: "/dashboard/my-profile" },
    { label: t.alumniNetwork, path: "/dashboard/my-networks" },
    { label: t.events, path: "/dashboard/events" },
    { label: t.mentorship, path: "/dashboard/mentorship" },
    { label: t.aiMatching, path: "/dashboard/matching" },
  ];

  return (
    <>
      <div className="bg-[#1c2535] p-4 w-52 fixed top-0 left-0 h-full shadow-lg flex flex-col items-center cursor-pointer">
        <img
          src="https://th.bing.com/th/id/OIG4._TytOl2KmeM79iFQSf0a?pid=ImgGn"
          alt="User Avatar"
          className="rounded-full w-24 mb-4"
          onClick={handlename}
        />
        <h3 className="text-xl mb-4">{t.hi}</h3>
        <button className="text-[#f9a825] hover:underline" onClick={handleSettings}>
          {t.settings}
        </button>
      </div>

      <div className="p-4 fixed top-0 left-0 h-full shadow-lg mt-52">
        <ul className="text-white mt-4">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className={`mb-4 p-2 rounded cursor-pointer ${
                currentPage === item.path
                  ? "bg-[#f9a825] text-black"
                  : "hover:bg-white hover:text-[#f9a825]"
              }`}
              onClick={() => handleNavigation(item.path)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Settings Modal */}
      <SettingsModal isOpen={isSettingsOpen} onClose={closeSettings} />
    </>
  );
};

export default Aside;

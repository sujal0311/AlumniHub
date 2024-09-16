import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Aside from './Aside';

const ProfilePage = () => {
  const [language, setLanguage] = useState('en');
  const [user, setUser] = useState({
    name: 'Sujal',
    email: 'sujal@example.com',
    bio: 'Software Developer and Enthusiast in Tech Innovations',
    profileImage: 'https://th.bing.com/th/id/OIG4._TytOl2KmeM79iFQSf0a?pid=ImgGn',
  });
  const navigate = useNavigate();

  const translations = {
    en: {
      profile: 'Profile',
      editProfile: 'Edit Profile',
      name: 'Name',
      email: 'Email',
      bio: 'Bio',
      save: 'Save',
      cancel: 'Cancel',
      back: 'Back to Dashboard',
    },
    hi: {
      // Hindi translations here
    },
    mrw: {
      // Marwari translations here
    },
  };

  const t = translations[language];

  const handleSave = () => {
    // Save user profile logic here
    console.log('Profile saved');
  };

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#232F47] to-[#1c2535] text-white flex">
      {/* Aside Component */}
      <Aside currentPage="/dashboard/profile" />

      {/* Main Content */}
      <div className="flex-1 p-8 ml-64 w-[81.5vw] text-black">
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#f9a825]">{t.profile}</h1>
          <button
            className="p-2 rounded text-white bg-[#f9a825] hover:bg-[#f9a825]/90 transition-colors"
            onClick={handleBack}
          >
            {t.back}
          </button>
        </div>

        {/* Profile Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center mb-8">
            <img
              src={user.profileImage}
              alt="User Avatar"
              className="w-32 h-32 rounded-full border-4 border-[#f9a825] mr-6"
            />
            <div className="flex flex-col flex-grow">
              <h2 className="text-3xl font-bold mb-2">{user.name}</h2>
              <p className="text-lg text-gray-700 mb-4">{user.email}</p>
              <textarea
                value={user.bio}
                onChange={(e) => setUser({ ...user, bio: e.target.value })}
                className="p-4 rounded border border-gray-300 w-full h-32 resize-none"
                placeholder={t.bio}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-4">
            <button
              className="bg-[#f9a825] text-black py-2 px-6 rounded hover:bg-[#f9a825]/90 transition-colors"
              onClick={handleSave}
            >
              {t.save}
            </button>
            <button
              className="bg-gray-300 text-black py-2 px-6 rounded hover:bg-gray-400 transition-colors"
              onClick={() => navigate('/dashboard')}
            >
              {t.cancel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

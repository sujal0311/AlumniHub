import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Aside from './Aside';

const ProfilePage = () => {
  const storedLanguage = localStorage.getItem('language') || 'en';
  const [language, setLanguage] = useState(storedLanguage);
  const [user, setUser] = useState({
    name: 'Sujal Agarwal',
    email: 'sujalagarwal0311@gmail.com',
    bio: 'Aspiring Computer Science professional with a strong foundation in programming, algorithms, and software development. Currently pursuing a B.Tech in Computer Science from Techno University, with a passion for solving complex problems through technology.',
    profileImage: 'https://th.bing.com/th/id/OIG4._TytOl2KmeM79iFQSf0a?pid=ImgGn',
    about: 'I’m a passionate and dedicated Computer Science student at Techno University, eager to apply my knowledge and skills in real-world environments. With a strong interest in software development, AI, machine learning, cybersecurity, etc., I’ve developed a solid foundation in programming languages such as Python, Java, C++, and JS and have worked on various projects that push me to think critically and solve complex problems.',
    experiences: [
      { title: 'AI Intern', company: 'IIT Roorkee', description: '(05/24 - 07/24)' }
    ],
    education: [
      { degree: 'B.Tech in CSE', institution: 'Techno University', description: '(2022-2026) 9.71 CGPA' }
    ],
    skills: ['Python', 'AI', 'Blockchain', 'Problem Solving', 'Communication', 'Leadership']
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const navigate = useNavigate();

  const translations = {
    en: {
      profile: 'Profile',
      editProfile: 'Edit Profile',
      name: 'Name',
      email: 'Email',
      bio: 'Bio',
      about: 'About',
      skills: 'Skills',
      experiences: 'Experience',
      education: 'Education',
      back: 'Back to Dashboard',
    },
    hi: {
      profile: 'प्रोफ़ाइल',
      editProfile: 'प्रोफ़ाइल संपादित करें',
      name: 'नाम',
      email: 'ईमेल',
      bio: 'जीवनी',
      about: 'के बारे में',
      skills: 'कौशल',
      experiences: 'अनुभव',
      education: 'शिक्षा',
      back: 'डैशबोर्ड पर वापस जाएं',
    },
    bn: {
      profile: 'প্রোফাইল',
      editProfile: 'প্রোফাইল সম্পাদনা করুন',
      name: 'নাম',
      email: 'ইমেইল',
      bio: 'জীবনী',
      about: 'সম্পর্কিত',
      skills: 'দক্ষতা',
      experiences: 'অভিজ্ঞতা',
      education: 'শিক্ষা',
      back: 'ড্যাশবোর্ডে ফিরে যান',
    },
    mrw: {
      profile: 'प्रोफाइल',
      editProfile: 'प्रोफाइल एडिट करो',
      name: 'नाम',
      email: 'ईमेल',
      bio: 'जीवनी',
      about: 'बारे में',
      skills: 'कौशल',
      experiences: 'अनुभव',
      education: 'शिक्षा',
      back: 'डैशबोर्ड पे वापस जाएं',
    },
  };

  const t = translations[language];

  const handleBack = () => {
    navigate('/dashboard');
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage('');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${user.email}`;
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
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <div className="flex items-center mb-8">
            {/* Clickable Profile Photo */}
            <img
              src={user.profileImage}
              alt="User Avatar"
              className="w-32 h-32 rounded-full border-4 border-[#f9a825] mr-6 cursor-pointer"
              onClick={() => openModal(user.profileImage)}
            />
            <div className="flex flex-col flex-grow">
              <h2 className="text-3xl font-bold mb-2">{user.name}</h2>
              {/* Clickable Email */}
              <p 
                className="text-lg text-gray-700 mb-4 cursor-pointer" 
                onClick={handleEmailClick}
              >
                {user.email}
              </p>
              <textarea
                value={user.bio}
                onChange={(e) => setUser({ ...user, bio: e.target.value })}
                className="p-4 rounded border border-gray-300 w-full h-32 resize-none bg-white text-black"
                placeholder={t.bio}
              />
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">{t.about}</h2>
          <p>{user.about}</p>
        </div>

        {/* Skills Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">{t.skills}</h2>
          <div className="flex flex-wrap gap-4">
            {user.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-[#f9a825] text-black px-4 py-2 rounded-full text-lg font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">{t.experiences}</h2>
          <ul>
            {user.experiences.map((exp, index) => (
              <li key={index} className="mb-4">
                <h3 className="text-xl font-semibold">
                  {exp.title} at {exp.company}
                </h3>
                <p>{exp.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Education Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">{t.education}</h2>
          <ul>
            {user.education.map((edu, index) => (
              <li key={index} className="mb-4">
                <h3 className="text-xl font-semibold">
                  {edu.degree} from {edu.institution}
                </h3>
                <p>{edu.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Modal for Enlarged Profile Image */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-white p-2 rounded-full text-black text-xl"
              >
                &times;
              </button>
              <img
                src={selectedImage}
                alt="Enlarged Avatar"
                className="max-w-screen-md max-h-screen object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;

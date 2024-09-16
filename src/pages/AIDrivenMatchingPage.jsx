import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Aside from './Aside';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importing Toastify styles

const indianColleges = [
  'Indian Institute of Technology (IIT) Delhi',
  'Indian Institute of Technology (IIT) Bombay',
  'Indian Institute of Technology (IIT) Madras',
  'Indian Institute of Technology (IIT) Kanpur',
  'Indian Institute of Science (IISc) Bangalore',
  'National Institute of Technology (NIT) Trichy',
  'National Institute of Technology (NIT) Surathkal',
  'Delhi University',
  'Jawaharlal Nehru University (JNU)',
  'Birla Institute of Technology and Science (BITS) Pilani',
  'Vellore Institute of Technology (VIT)',
  'Anna University',
  'Jamia Millia Islamia',
  'Aligarh Muslim University (AMU)',
  'Indian Institute of Management (IIM) Ahmedabad',
  'Indian Institute of Management (IIM) Bangalore',
  'Indian Institute of Management (IIM) Calcutta',
  'Indian School of Business (ISB) Hyderabad',
  'Amity University',
  'University of Hyderabad',
];

const dummyData = Array.from({ length: 20 }, (_, index) => ({
  name: `Person ${index + 1}`,
  role: `Role ${index % 5 === 0 ? 'Engineer' : index % 3 === 0 ? 'Designer' : 'Manager'}`,
  company: `Company ${index % 4 === 0 ? 'Tech' : 'Design'}`,
  expertise: index % 2 === 0 ? 'AI Development' : 'UI/UX Design',
  college: indianColleges[Math.floor(Math.random() * indianColleges.length)],
  profileImage: 'https://th.bing.com/th/id/OIG4.zJ0B83wocvk5aNva1R6B?pid=ImgGn',
  matchScore: Math.floor(Math.random() * 101),
  verified: Math.random() > 0.5,
}));

const AIDrivenMatchingPage = () => {
  // Retrieve the language preference from local storage
  const storedLanguage = localStorage.getItem('language') || 'en';
  const [language, setLanguage] = useState(storedLanguage);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    name: '',
    role: '',
    company: '',
    expertise: '',
    college: '',
  });

  const navigate = useNavigate();

  const translations = {
    en: {
      aiMatch: 'AI-driven Matching',
      findMatches: 'Find Matches',
      loading: 'Loading...',
      noMatches: 'No matches found',
      back: 'Back to Dashboard',
      connect: 'Connect',
      viewProfile: 'View Profile',
      verified: 'Verified by Blockchain',
      connectionSent: 'Connection request sent!',
    },
    hi: {
      aiMatch: 'एआई संचालित मिलान',
      findMatches: 'मेल खोजें',
      loading: 'लोड हो रहा है...',
      noMatches: 'कोई मेल नहीं मिला',
      back: 'डैशबोर्ड पर वापस जाएं',
      connect: 'जुड़ें',
      viewProfile: 'प्रोफ़ाइल देखें',
      verified: 'ब्लॉकचेन द्वारा सत्यापित',
      connectionSent: 'कनेक्शन अनुरोध भेजा गया!',
    },
    bn: {
      aiMatch: 'এআই-চালিত ম্যাচিং',
      findMatches: 'ম্যাচ খুঁজুন',
      loading: 'লোড হচ্ছে...',
      noMatches: 'কোন ম্যাচ পাওয়া যায়নি',
      back: 'ড্যাশবোর্ডে ফিরে যান',
      connect: 'যোগাযোগ করুন',
      viewProfile: 'প্রোফাইল দেখুন',
      verified: 'ব্লকচেইন দ্বারা যাচাই করা হয়েছে',
      connectionSent: 'সংযোগ অনুরোধ পাঠানো হয়েছে!',
    },
    mrw: {
      aiMatch: 'AI-चालित मिलान',
      findMatches: 'मिलान खोजो',
      loading: 'लोड हो रीओ है...',
      noMatches: 'कोई मिलान नहीं मिल्यो',
      back: 'डॅशबोर्ड पर लौटो',
      connect: 'जोड़ो',
      viewProfile: 'प्रोफाइल देखो',
      verified: 'ब्लॉकचेन द्वारा प्रमाणित',
      connectionSent: 'कनेक्शन रिक्वेस्ट भेज दी!',
    },
  };

  const t = translations[language];

  useEffect(() => {
    const fetchMatches = async () => {
      setTimeout(() => {
        setMatches(dummyData);
        setLoading(false);
      }, 2000);
    };

    fetchMatches();
  }, []);

  useEffect(() => {
    // Save language to local storage whenever it changes
    localStorage.setItem('language', language);
  }, [language]);

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleConnect = (name) => {
    toast.success(`${t.connectionSent}`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredMatches = matches.filter((match) => {
    return (
      (filters.name === '' || match.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (filters.role === '' || match.role.toLowerCase().includes(filters.role.toLowerCase())) &&
      (filters.company === '' || match.company.toLowerCase().includes(filters.company.toLowerCase())) &&
      (filters.expertise === '' || match.expertise.toLowerCase().includes(filters.expertise.toLowerCase())) &&
      (filters.college === '' || match.college.toLowerCase().includes(filters.college.toLowerCase()))
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#232F47] to-[#1c2535] text-white flex">
      <Aside currentPage="/dashboard/ai-driven-matching" />

      <div className="flex-1 p-8 ml-64 w-[81.5vw] text-black">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#f9a825]">{t.aiMatch}</h1>
          <button
            className="p-2 rounded text-white bg-[#f9a825] hover:bg-[#f9a825]/90 transition-colors"
            onClick={handleBack}
          >
            {t.back}
          </button>
        </div>

        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            value={filters.name}
            onChange={handleFilterChange}
            placeholder="Filter by Name"
            className="p-2 rounded border border-gray-300"
          />
          <input
            type="text"
            name="role"
            value={filters.role}
            onChange={handleFilterChange}
            placeholder="Filter by Role"
            className="p-2 rounded border border-gray-300"
          />
          <input
            type="text"
            name="company"
            value={filters.company}
            onChange={handleFilterChange}
            placeholder="Filter by Company"
            className="p-2 rounded border border-gray-300"
          />
          <input
            type="text"
            name="expertise"
            value={filters.expertise}
            onChange={handleFilterChange}
            placeholder="Filter by Expertise"
            className="p-2 rounded border border-gray-300"
          />
          <input
            type="text"
            name="college"
            value={filters.college}
            onChange={handleFilterChange}
            placeholder="Filter by College"
            className="p-2 rounded border border-gray-300"
          />
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-[70vh]">
            <div className="loader border-t-4 border-[#f9a825] border-solid w-16 h-16 border-4 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <button
              className="bg-[#f9a825] text-black py-2 px-6 rounded hover:bg-[#f9a825]/90 transition-colors mb-6"
              onClick={() => console.log('Find Matches clicked')}
            >
              {t.findMatches}
            </button>

            {filteredMatches.length === 0 ? (
              <p className="text-center text-lg text-gray-600">{t.noMatches}</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMatches.map((match, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center"
                  >
                    <img
                      src={match.profileImage}
                      alt={match.name}
                      className="w-24 h-24 rounded-full mb-4"
                    />
                    <h3 className="text-lg font-semibold flex items-center">
                      {match.name}
                      {match.verified && (
                        <span
                          className="ml-2 text-green-500 text-sm"
                          title={t.verified}
                        >
                          <img src="https://img.icons8.com/?size=100&id=59733&format=png&color=40C057" alt="" className='w-6 h-6'/>
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-600">{match.role}</p>
                    <p className="text-sm text-gray-600">{match.company}</p>
                    <p className="text-sm text-gray-600">{match.expertise}</p>
                    <p className="text-sm text-gray-600">{match.college}</p>
                    <p className="text-sm text-gray-500">Match Score: {match.matchScore}%</p>
                    <div className="mt-4 flex space-x-2">
                      <button
                        className="bg-[#f9a825] text-black py-2 px-4 rounded"
                        onClick={() => handleConnect(match.name)}
                      >
                        {t.connect}
                      </button>
                      <button className="bg-gray-300 text-black py-2 px-4 rounded">
                        {t.viewProfile}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default AIDrivenMatchingPage;

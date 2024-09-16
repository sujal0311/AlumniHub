import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

const LoginPage = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [language, setLanguage] = useState('en');

  // Text translations
  const translations = {
    en: {
      loginTitle: 'Login',
      studentBtn: 'I’m a Student',
      alumnusBtn: 'I’m an Alumni',
      secureLoginMsg: 'Secure Blockchain-based Login. Your data is safe with us.',
      emailLabel: 'Email',
      passwordLabel: 'Password',
      loginBtn: 'Login',
      orText: 'OR',
      connectMetaMask: 'Connect with MetaMask',
      connectedAccount: 'Connected',
      metaMaskNotInstalled: 'MetaMask is not installed. Please install MetaMask to use this feature.',
      connectFirst: 'Please connect to MetaMask first.',
      connectionError: 'Failed to connect to MetaMask. Please try again.',
    },
    bn: {
      loginTitle: 'লগইন',
      studentBtn: 'আমি একজন ছাত্র',
      alumnusBtn: 'আমি একজন প্রাক্তন ছাত্র',
      secureLoginMsg: 'নিরাপদ ব্লকচেইন ভিত্তিক লগইন। আপনার ডেটা আমাদের সাথে নিরাপদ।',
      emailLabel: 'ইমেইল',
      passwordLabel: 'পাসওয়ার্ড',
      loginBtn: 'লগইন',
      orText: 'অথবা',
      connectMetaMask: 'মেটামাস্ক দিয়ে সংযোগ করুন',
      connectedAccount: 'সংযুক্ত',
      metaMaskNotInstalled: 'মেটামাস্ক ইনস্টল করা নেই। এই বৈশিষ্ট্যটি ব্যবহার করতে মেটামাস্ক ইনস্টল করুন।',
      connectFirst: 'প্রথমে মেটামাস্কে সংযোগ করুন।',
      connectionError: 'মেটামাস্কে সংযোগ করতে ব্যর্থ হয়েছে। আবার চেষ্টা করুন।',
    },
    hi: {
      loginTitle: 'लॉग इन',
      studentBtn: 'मैं एक छात्र हूँ',
      alumnusBtn: 'मैं एक पूर्व छात्र हूँ',
      secureLoginMsg: 'सुरक्षित ब्लॉकचेन आधारित लॉगिन। आपका डेटा हमारे साथ सुरक्षित है।',
      emailLabel: 'ईमेल',
      passwordLabel: 'पासवर्ड',
      loginBtn: 'लॉग इन',
      orText: 'या',
      connectMetaMask: 'मेटामास्क से कनेक्ट करें',
      connectedAccount: 'कनेक्ट किया गया',
      metaMaskNotInstalled: 'मेटामास्क स्थापित नहीं है। कृपया इस सुविधा का उपयोग करने के लिए मेटामास्क स्थापित करें।',
      connectFirst: 'कृपया पहले मेटामास्क से कनेक्ट करें।',
      connectionError: 'मेटामास्क से कनेक्ट करने में विफल। कृपया पुनः प्रयास करें।',
    },
    mrw: {
      loginTitle: 'लॉगिन',
      studentBtn: 'मैं एक विध्यार्थी हूँ',
      alumnusBtn: 'मैं एक पुराना विद्यार्थी हूँ',
      secureLoginMsg: 'सुरक्षित ब्लॉकचेन लॉगिन। थारो डेटा म्हारे पास सुरक्षित हैं।',
      emailLabel: 'ईमेल',
      passwordLabel: 'पासवर्ड',
      loginBtn: 'लॉगिन करो',
      orText: 'या',
      connectMetaMask: 'मेटामास्क सा जोड़ो',
      connectedAccount: 'कनेक्ट हो चुक्यो',
      metaMaskNotInstalled: 'मेटामास्क इंस्टॉल नहीं है। कृपया इसे इंस्टॉल करो।',
      connectFirst: 'पहला मेटामास्क सा जोड़ो।',
      connectionError: 'मेटामास्क सा कनेक्ट नहीं हो सको। फीर कोशिश करो।',
    },
  };

  const t = translations[language]; // Helper function to get current language translation

  // MetaMask connection
  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        console.log('Connected account:', accounts[0]);
        setErrorMessage('');
        navigate('/dashboard'); // Navigate to dashboard on successful blockchain login
      } catch (error) {
        console.error('Error connecting to MetaMask', error);
        setErrorMessage(t.connectionError);
      }
    } else {
      setErrorMessage(t.metaMaskNotInstalled);
    }
  };

  const handleOnClick = () => {
    navigate('/');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (account) {
      navigate('/dashboard');
    } else {
      setErrorMessage(t.connectFirst);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center cursor-pointer"
      style={{
        background: 'linear-gradient(135deg, #232F47 0%, #1c2535 100%)',
        padding: '50px 0',
        width: '100vw',
        height: '100vh',
      }}
    >
      {/* AlumniHub Logo and Navigation */}
      <div className="text-[#f9a825] text-xl absolute top-10 left-10" onClick={handleOnClick}>
        <img
          src="https://th.bing.com/th/id/OIG4.ZUb5aSsuFP1FJhmHnMCU?pid=ImgGn"
          alt="AlumniHub"
          style={{
            width: '100%',
            maxWidth: '100px',
            height: 'auto',
            borderRadius: '10px',
            boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
          }}
        />
        <h2 className="mt-2">AlumniHub</h2>
      </div>

      {/* Language Dropdown */}
      <div className="absolute top-10 right-10">
        <select
          className="p-2 rounded border"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="hi">Hindi (हिन्दी)</option>
          <option value="bn">Bengali (বাংলা)</option>
          <option value="mrw">Marwari (मारवाड़ी)</option>
        </select>
      </div>

      {/* Login Form */}
      <div
        className="bg-white p-10 rounded shadow-lg"
        style={{
          width: '100%',
          maxWidth: '400px',
          borderRadius: '15px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        }}
      >
        <h2
          className="text-3xl font-bold text-center mb-6"
          style={{
            color: '#f9a825',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}
        >
          {t.loginTitle}
        </h2>

        {/* User Type Options */}
        <div className="flex justify-between mb-6">
          <button
            className="bg-yellow-500 text-white py-3 px-5 rounded w-full mx-1"
            style={{
              backgroundColor: '#f9a825',
              borderRadius: '40px',
              fontSize: '1rem',
            }}
          >
            {t.studentBtn}
          </button>
          <button
            className="bg-yellow-500 text-white py-3 px-5 rounded w-full mx-1"
            style={{
              backgroundColor: '#f9a825',
              borderRadius: '40px',
              fontSize: '1rem',
            }}
          >
            {t.alumnusBtn}
          </button>
        </div>

        {/* Secure Authentication Message */}
        <div className="text-center mb-6 text-gray-500">
          <p>{t.secureLoginMsg}</p>
        </div>

        {/* Error Message */}
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <label className="block mb-2 text-gray-700">{t.emailLabel}</label>
          <input
            type="email"
            className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            style={{
              border: '2px solid #d1d9e6',
              transition: 'border-color 0.3s ease',
            }}
          />

          <label className="block mb-2 text-gray-700">{t.passwordLabel}</label>
          <input
            type="password"
            className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            style={{
              border: '2px solid #d1d9e6',
              transition: 'border-color 0.3s ease',
            }}
          />

          <button
            type="submit"
            className="w-full py-3 text-white rounded"
            style={{
              backgroundColor: '#f9a825',
              borderRadius: '40px',
              fontSize: '1.1rem',
            }}
          >
            {t.loginBtn}
          </button>
        </form>

        {/* MetaMask Connect */}
        <div className="text-center mt-6">
          <p>{t.orText}</p>
          <button
            onClick={connectWallet}
            className="mt-4 bg-yellow-500 text-white py-3 px-5 rounded w-full"
            style={{
              backgroundColor: '#f9a825',
              borderRadius: '40px',
              fontSize: '1rem',
            }}
          >
            {account ? t.connectedAccount : t.connectMetaMask}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

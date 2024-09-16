import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      login: 'Login',
      student: "I'm a Student",
      alumnus: "I'm an Alumnus",
      secureLogin: 'Secure Blockchain-based Login. Your data is safe with us.',
      email: 'Email',
      password: 'Password',
      connectWithMetaMask: 'Connect with MetaMask',
      connected: 'Connected: {{account}}',
      or: 'OR',
      errorMetaMask: 'MetaMask is not installed. Please install MetaMask to use this feature.',
      errorConnect: 'Failed to connect to MetaMask. Please try again.',
      // Add other translations
    },
  },
  hi: {
    translation: {
      login: 'लॉग इन करें',
      student: 'मैं एक छात्र हूं',
      alumnus: 'मैं एक पूर्व छात्र हूं',
      secureLogin: 'सुरक्षित ब्लॉकचेन आधारित लॉगिन। आपका डेटा हमारे पास सुरक्षित है।',
      email: 'ईमेल',
      password: 'पासवर्ड',
      connectWithMetaMask: 'मेटामास्क से कनेक्ट करें',
      connected: 'कनेक्टेड: {{account}}',
      or: 'या',
      errorMetaMask: 'MetaMask इंस्टॉल नहीं है। कृपया इस सुविधा का उपयोग करने के लिए MetaMask इंस्टॉल करें।',
      errorConnect: 'MetaMask से कनेक्ट करने में विफल। कृपया पुनः प्रयास करें।',
    },
  },
  // Add other languages here
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

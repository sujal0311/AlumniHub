import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import Aside from './Aside'; // Adjust the import path if needed

const eventData = [
  { title: 'Tech Networking Event', date: '25th Sept 2024', time: '10:00 AM', description: 'Join us for a tech networking event with industry professionals.', image: 'https://th.bing.com/th/id/OIG3.pi0kVEpnVBZetLeSG7LH?w=1024&h=1024&rs=1&pid=ImgDetMain' },
  { title: 'Alumni Career Guidance', date: '10th Oct 2024', time: '2:00 PM', description: 'Alumni will provide guidance on career choices and opportunities.', image: 'https://th.bing.com/th/id/OIG2.8_AoxpyKFlDUnyX5AOv9?w=1024&h=1024&rs=1&pid=ImgDetMain' },
  { title: 'AI in Education Seminar', date: '15th Nov 2024', time: '11:00 AM', description: 'Explore AI applications in education and career development.', image: 'https://th.bing.com/th/id/OIG1.LsxMIZ8MPNcg.Efnkcf2?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn' },
  { title: 'Blockchain Workshop', date: '5th Dec 2024', time: '1:00 PM', description: 'Hands-on workshop on blockchain technology and its applications.', image: 'https://th.bing.com/th/id/OIG3.CoQXmUUqGdPbbiBBNk.w?w=1024&h=1024&rs=1&pid=ImgDetMain' },
  { title: 'Data Science Conference', date: '12th Dec 2024', time: '3:00 PM', description: 'A conference on the latest trends in data science and analytics.', image: 'https://th.bing.com/th/id/OIG4.2xbjHjhe43CqraccVaSx?w=1024&h=1024&rs=1&pid=ImgDetMain' },
  { title: 'Cybersecurity Meetup', date: '19th Dec 2024', time: '4:00 PM', description: 'Network with cybersecurity professionals and discuss industry trends.', image: 'https://th.bing.com/th/id/OIG2.g8_SquexAklI4ql.XZKz?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn' },
];

const translations = {
  en: {
    title: 'Upcoming Events',
    back: 'Back to Dashboard',
    noEvents: 'No events on this day.',
    register: 'Register',
  },
  hi: {
    title: 'आगामी इवेंट्स',
    back: 'डैशबोर्ड पर वापस जाएं',
    noEvents: 'इस दिन पर कोई इवेंट नहीं हैं।',
    register: 'रजिस्टर करें',
  },
  bn: {
    title: 'আসন্ন ইভেন্টস',
    back: 'ড্যাশবোর্ডে ফিরে যান',
    noEvents: 'এই দিনে কোন ইভেন্ট নেই।',
    register: 'রেজিস্টার করুন',
  },
  mrw: {
    title: 'आगामी इव्हेंट्स',
    back: 'डॅशबोर्डवर परत जा',
    noEvents: 'या दिवशी कोणतेही इव्हेंट नाहीत.',
    register: 'नोंदणी करा',
  },
};

const EventPage = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  
  const t = translations[language];

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleDayClick = () => {
    const selectedDate = date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    const event = eventData.find(event => event.date.includes(selectedDate));
    if (event) {
      navigate(`/events/${event.date}`);
    } else {
      alert(t.noEvents);
    }
  };

  const handleLanguageChange = (newLanguage) => {
    localStorage.setItem('language', newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#232F47] to-[#1c2535] text-white flex">
      {/* Sidebar */}
      <Aside currentPage="/dashboard/events" />

      {/* Main Content */}
      <div className="flex-1 p-8 ml-64 w-[81.5vw] text-black">
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#f9a825]">{t.title}</h1>
          <button
            className="p-2 rounded text-white bg-[#f9a825] hover:bg-[#f9a825]/90 transition-colors"
            onClick={handleBack}
          >
            {t.back}
          </button>
        </div>

        {/* Main Content Layout */}
        <div className="flex">
          {/* Events Section */}
          <div className="flex-1 mr-8">
            <Grid container spacing={4}>
              {eventData.map((event, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card>
                    <CardContent>
                      <img
                        src={event.image} 
                        style={{ width: '100%', borderRadius: '8px' }}
                      />
                      <Typography variant="h5" style={{ marginTop: '10px' }}>
                        {event.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Date: {event.date} - Time: {event.time}
                      </Typography>
                      <Typography variant="body1" style={{ marginTop: '10px' }}>
                        {event.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        style={{ backgroundColor: '#f9a825' }}
                        fullWidth
                      >
                        {t.register}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>

          {/* Calendar Section */}
          <div className="w-72">
            <Calendar
              onChange={handleDateChange}
              value={date}
              onClickDay={handleDayClick}
              tileClassName={({ date }) => {
                const dateString = date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
                return eventData.some(event => event.date.includes(dateString)) ? 'highlighted' : null;
              }}
            />
            <style>
              {`
                .react-calendar .highlighted {
                  background: #f9a825 !important;
                  color: white !important;
                  border-radius: 50%;
                }
              `}
            </style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;

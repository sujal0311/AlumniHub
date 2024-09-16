// src/pages/EventPage.jsx
import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, CardActions } from '@mui/material';

const eventData = [
  { title: 'Tech Networking Event', date: '25th Sept 2024', description: 'Join us for a tech networking event with industry professionals.' },
  { title: 'Alumni Career Guidance', date: '10th Oct 2024', description: 'Alumni will provide guidance on career choices and opportunities.' },
  { title: 'AI in Education Seminar', date: '15th Nov 2024', description: 'Explore AI applications in education and career development.' },
  // Add more events as needed
];

const EventPage = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Upcoming Events
      </Typography>

      <Grid container spacing={4}>
        {eventData.map((event, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">{event.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Date: {event.date}
                </Typography>
                <Typography variant="body1" style={{ marginTop: '10px' }}>
                  {event.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary" fullWidth>
                  Register
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default EventPage;

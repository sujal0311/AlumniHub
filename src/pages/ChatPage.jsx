// src/pages/ChatPage.jsx
import React from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const ChatPage = () => {
  const { name } = useParams();

  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Chat with {name}
      </Typography>

      <Box display="flex" flexDirection="column" mb={4}>
        <Box alignSelf="flex-start" mb={2}>
          <Typography variant="body1" style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '10px' }}>
            Hi! How can I help you today?
          </Typography>
        </Box>
        <Box alignSelf="flex-end" mb={2}>
          <Typography variant="body1" style={{ backgroundColor: '#3f51b5', color: '#fff', padding: '10px', borderRadius: '10px' }}>
            I have a question about career opportunities.
          </Typography>
        </Box>
      </Box>

      <TextField
        fullWidth
        label="Type a message"
        variant="outlined"
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary">
        Send
      </Button>
    </Container>
  );
};

export default ChatPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

function Home() {
  const [depart, setDepart] = useState('');
  const [destination, setDestination] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/resultats?depart=${depart}&destination=${destination}`);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Rechercher un trajet</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField label="Départ" value={depart} onChange={(e) => setDepart(e.target.value)} fullWidth margin="normal" />
        <TextField label="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} fullWidth margin="normal" />
        <Button type="submit" variant="contained" fullWidth>Rechercher</Button>
      </Box>
    </Container>
  );
}

export default Home;

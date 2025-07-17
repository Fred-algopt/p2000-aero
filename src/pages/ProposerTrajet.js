import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

function ProposerTrajet() {
  const [form, setForm] = useState({
    depart: '',
    destination: '',
    date: '',
    heure: '',
    prix: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Trajet proposé (mock uniquement)');
    setForm({ depart: '', destination: '', date: '', heure: '', prix: '' });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Proposer un trajet</Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField label="Départ" name="depart" value={form.depart} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Destination" name="destination" value={form.destination} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Date" type="date" name="date" value={form.date} onChange={handleChange} fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
        <TextField label="Heure" type="time" name="heure" value={form.heure} onChange={handleChange} fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
        <TextField label="Prix (€)" name="prix" value={form.prix} onChange={handleChange} fullWidth margin="normal" />
        <Button type="submit" variant="contained" color="secondary" fullWidth>Publier</Button>
      </Box>
    </Container>
  );
}

export default ProposerTrajet;

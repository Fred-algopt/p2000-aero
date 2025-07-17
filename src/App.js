import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Home from './pages/Home';
import Resultats from './pages/Resultats';
import ProposerTrajet from './pages/ProposerTrajet';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ width: 40, mr: 2 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Covoiturage
          </Typography>
          <Button color="inherit" component={Link} to="/">Accueil</Button>
          <Button color="inherit" component={Link} to="/proposer">Proposer</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resultats" element={<Resultats />} />
        <Route path="/proposer" element={<ProposerTrajet />} />
      </Routes>
    </Router>
  );
}

export default App;

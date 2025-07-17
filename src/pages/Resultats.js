import React from 'react';
import { useLocation } from 'react-router-dom';
import trajets from '../data/mockTrajets';
import { Container, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

function Resultats() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const depart = params.get('depart');
  const destination = params.get('destination');

  const resultats = trajets.filter(
    (t) =>
      t.depart.toLowerCase().includes(depart.toLowerCase()) &&
      t.destination.toLowerCase().includes(destination.toLowerCase())
  );

  return (
    <Container>
      <Typography variant="h5" gutterBottom>Résultats pour {depart} → {destination}</Typography>
      {resultats.length === 0 ? (
        <Typography>Aucun trajet trouvé.</Typography>
      ) : (
        <List>
          {resultats.map((t, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemText
                  primary={`${t.depart} → ${t.destination}`}
                  secondary={`${t.date} à ${t.heure} — ${t.prix} €`}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      )}
    </Container>
  );
}

export default Resultats;

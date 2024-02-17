import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       Gustavo Mendes
      </Typography>
      <Typography variant="h5" component="div">
       Protegido por DEUS!
      </Typography>
      <Typography variant="body2">
       Desenvolvedor Full Stack
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Saiba mais</Button>
    </CardActions>
  </React.Fragment>
);

function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
export default function App() {
  return (
    <div>
      <OutlinedCard/> <br/>
    
    </div>
  )
}

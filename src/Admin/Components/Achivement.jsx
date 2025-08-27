import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';

const TropyImg = styled("img")(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(4.5),
  bottom: theme.spacing(2.5),
  height: 98,
  zIndex: 1,
  [theme.breakpoints.down('sm')]: {
    height: 70,
    right: theme.spacing(2),
    bottom: theme.spacing(2),
  }
}));

const Achivement = () => {
  return (
    <div style={{ padding: '1rem', display: 'flex', justifyContent: 'center' }}>
      <Card className='' sx={{position:"relative",bgcolor:"#242B2E",color:"white"}}>
        <CardContent>
          <Typography variant='h6' sx={{letterSpacing:'.25px'}}>
            Shop With Trigon
          </Typography>
          <Typography variant='body2'>
            Congratulations 🥳
          </Typography>
          <Typography variant='h5' sx={{ my: 3, }}>
            420.8k
          </Typography>
          <Button
            size='small'
            variant="contained">
            View Sales
          </Button>
        </CardContent>
        <TropyImg src="/download.jpeg" alt="Trophy" />
      </Card>
    </div>
  );
};

export default Achivement;

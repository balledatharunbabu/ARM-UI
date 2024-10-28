import * as React from 'react';
import { keyframes } from '@mui/system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Replay } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import '../Style/Card/Media.css'
export default function Sceneriocard() {
  
  const navigate=useNavigate();
  return (

    <Card sx={{ width: 345 , '&:hover': {
      transform: 'scale(1.05)', 
      boxShadow: '0px 8px 10px #000000',
      // background:'#F0FFFF'
    }}} onClick={() => navigate('/scenario/exception')}  >
        <CardMedia sx={{ height: 140 }} image='/exception3.PNG'>
          {/* <Typography  variant="h4" component="div" color='#011F5B' bgcolor={'white'} padding='40px' fontSize={'25px'} >
               EXCEPTION
          </Typography> */}
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h1" component="div" color='#0f62fe'>
    
        </Typography>
        <Typography variant="body2" sx={{ color: '#011F5B', fontSize:'17px' }}>
          We can create a scenerio and Configure an integeration flow 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color='black'onClick={() => navigate('/exception')} ><DoubleArrowIcon></DoubleArrowIcon></Button>
      
      </CardActions>
    </Card>
  );
}

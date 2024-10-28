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
      boxShadow: '0px 7px 8px black',
      // background:'#F0FFFF'
    }}} onClick={() => navigate('/scenario/view')} >
        <CardMedia sx={{ height: 140 }} image='\scenario4.PNG'>
          {/* <Typography  variant="h4" component="div" color='#011F5B' padding='40px' fontSize={'25px'}bgcolor={'white'}>
               SCENERIO
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
        <Button size="small" color='#011F5B'onClick={() => navigate('/scenerio/view')} ><DoubleArrowIcon></DoubleArrowIcon></Button>
      
      </CardActions>
    </Card>
  );
}

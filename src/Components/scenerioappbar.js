import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ScenerioAppBar(){
  const navigate=useNavigate();

  const location=useLocation();

  const isActive=(path)=>location.pathname==path;

  // const isnotactive=(path)=>location.pathname!=path;

    return(
      
     <AppBar  position="fixed" sx={{ backgroundColor: '#011F5B', zIndex: 1300 ,boxShadow:'0 0.5px 0.5px #F0FFFF',}}>
        <Toolbar>
        <box >
        <Button variant="text" sx={{color:'WHITE',fontSize:'25px'}} onClick={()=>navigate("/")}>ARMADA</Button>
            <Button sx={{marginLeft:40, backgroundColor: isActive('/scenario/view') ? 'white' : 'white',color:isActive('/scenario/view')?'BLACK':'black'}} className='Button' onClick={()=>navigate("/scenario/view")}>VIEW</Button>
            <Button sx={{marginLeft:40, backgroundColor: isActive('/scenario/createscenerio') ? 'white':'white',color:isActive('/scenario/createscenerio')?'black':'black'}} className='Button' onClick={()=>navigate("/scenario/createscenerio")}>CREATE</Button>
            <Button sx={{marginLeft:40, backgroundColor: isActive('/scenario/modify') ? '#6A5ACD' : 'white',color:isActive('/scenario/modify')?'white':'black'}} className='Button' >MODIFY</Button>
        </box>
           
        </Toolbar>
      </AppBar>
       
   
    )
}
export default ScenerioAppBar
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';
function ButtonAppBar(){

  const navigate=useNavigate();
    return(
      
     <AppBar  position="fixed" sx={{ backgroundColor: '#011F5B', zIndex: 1300 ,boxShadow:'0 0.5px 0.5px #F0FFFF'}}>
        <Toolbar>
        <box>
          <Button variant="text" sx={{color:'white',fontSize:'25px'}} onClick={()=>navigate("/")}>ARMADA</Button>
          {/* <img src='./wallmartlogo.png' style={{height:'50px'}}></img> */}
            {/* <Button sx={{marginLeft:45, color:'white'}}>Integeration</Button> */}

        </box>
           
        </Toolbar>
      </AppBar>
       
   
    )
}
export default ButtonAppBar
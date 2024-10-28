import Carddisplay from '../Card/Card1';
import Carddisplay2 from '../Card/Card2';
import ButtonAppBar from './appbar';

import Box from '@mui/material/Box';
    


function Home(){


    return(
        < div className='homestyle' style={{height:'125vh'}}>
        <ButtonAppBar></ButtonAppBar> 

            <Carddisplay />


            <Carddisplay2 />

 

        </div>
    )
}

export default Home

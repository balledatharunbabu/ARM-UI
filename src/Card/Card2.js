import ExceptionCard from './Exception.js'

import ReplayCard from './Replay.js'

import { Stack } from '@mui/material';

export default function Carddisplay2(){
    return(
        // <box sx={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <Stack direction={'row'}justifyContent={'space-evenly'}  >
     
   
     <ExceptionCard></ExceptionCard>
     <ReplayCard></ReplayCard>
 
    </Stack>
        // </box>
    
     
    )
}
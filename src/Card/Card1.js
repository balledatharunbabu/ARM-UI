import ExceptionCard from './Exception.js'
import Sceneriocard from './Scenerio.js'
import ReplayCard from './Replay.js'
import Transactioncard from './Transaction.js'
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import { Height } from '@mui/icons-material';

import '../Style/Home/backiamge.css'
export default function Carddisplay(){
    return(
        // <box sx={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <Stack direction={'row'} gap={10} justifyContent={'space-evenly'} padding={11}  marginTop={'35px'}>
     
     <Sceneriocard></Sceneriocard>
     <Transactioncard></Transactioncard>
     {/* <ExceptionCard></ExceptionCard>
     <ReplayCard></ReplayCard> */}
 
    </Stack>
        // </box>
    
     
    )
}
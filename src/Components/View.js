import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../Style/View/View.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function View() {

  const[id,scenrioid]=useState("");
  const[name,scenerioname]=useState("");
  const[code,countrycode]=useState("");

  const navigate=useNavigate("");
async function viewsceneriodetails() {

    let res= await fetch(`http://172.17.1.25:8080/getscenerio/${id}/${name}/${code}`,{
    
        method:'GET',

        headers:{
            'Content-Type': 'application/json'
        }

    })
if(res.ok){

    const details=await res.json();


    // console.log(details)
    navigate("/scenerio/viewscenerio",{state:details})

}


}
  return (
    <>
  
    <Box display="flex" flexDirection="column" alignItems="center" gap={7} marginTop={'4rem'} className='viewclass'>
            <TextField label="Scenerioid" variant="outlined"  className='InputFields' sx={{width:'17rem',marginTop:'2rem'}} value={id} onChange={(e)=>scenrioid(e.target.value)} />
            <TextField label="Scenerioname" variant="outlined"  className='InputFields'   sx={{width:'17rem'}}  value={name} onChange={(e)=>scenerioname(e.target.value)}/>
            <TextField label="Countrycode" variant="outlined"   className='InputFields'  sx={{width:'17rem'}} value={code} onChange={(e)=>countrycode(e.target.value)}/>

            <Button variant='contained' sx={{backgroundColor:'#012169',height:'2rem',width:'10rem',color:'white'}} onClick={()=>viewsceneriodetails()}>View</Button>
    </Box>


    </>
  );
}

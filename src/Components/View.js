import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../Style/View/View.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function View() {

  const [id, setScenarioId] = useState("");
  const [name, setScenarioName] = useState("");
  const [code, setCountryCode] = useState("");

  const navigate = useNavigate();

  async function viewScenarioDetails() {
    try {
      let res = await fetch(`http://172.17.2.77:8080/getscenerio/${id}/${name}/${code}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (res.ok) {
        const details = await res.json();
        console.log(details);
        navigate("/scenario/viewscenerio", { state: details });
      }
    } catch (error) {
      console.log("Failed to fetch");
    }
  }

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center" gap={7} marginTop={'4rem'} className='viewclass'>
        <TextField 
          label="Scenario ID" 
          variant="outlined" 
          className='InputFields' 
          sx={{ width: '17rem', marginTop: '2rem' }} 
          value={id} 
          onChange={(e) => setScenarioId(e.target.value)} 
        />
        <TextField 
          label="Scenario Name" 
          variant="outlined" 
          className='InputFields' 
          sx={{ width: '17rem' }} 
          value={name} 
          onChange={(e) => setScenarioName(e.target.value)} 
        />
        <TextField 
          label="Country Code" 
          variant="outlined" 
          className='InputFields' 
          sx={{ width: '17rem' }} 
          value={code} 
          onChange={(e) => setCountryCode(e.target.value)} 
        />
        <Button 
          variant='contained' 
          sx={{ backgroundColor: '#012169', height: '2rem', width: '10rem', color: 'white' }} 
          onClick={viewScenarioDetails}
        >
          View
        </Button>
      </Box>
    </>
  );
}

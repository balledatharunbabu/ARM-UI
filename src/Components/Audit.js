import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../Style/Audit/Audit.css';

const Audit = () => {
  const [scenarioId, setScenarioId] = useState(null);
  const [scenarioName, setScenarioName] = useState(null);
  const [countryCode, setCountryCode] = useState(null);
  const navigate = useNavigate();

  const handleViewAudits = () => {
    navigate("/scenario/auditResponse", {
      state: { scenarioId, scenarioName, countryCode },
    });
  };

  return (
    <div className='Transaction'>
      <div className='SearchDiv'>
        <TextField
          label="Scenario Id"
          variant="outlined"
          className='InputFields'
          sx={{ width: '400px', marginTop: '2rem' }}
          value={scenarioId || ''}
          onChange={(e) => setScenarioId(e.target.value)}
        />
        <TextField
          label="Scenario Name"
          variant="outlined"
          className='InputFields'
          sx={{ width: '400px', marginTop: '2rem' }}
          value={scenarioName || ''}
          onChange={(e) => setScenarioName(e.target.value)}
        />
        <TextField
          label="Country Code"
          variant="outlined"
          className='InputFields'
          sx={{ width: '400px', marginTop: '2rem' }}
          value={countryCode || ''}
          onChange={(e) => setCountryCode(e.target.value)}
        />
        <Button
          variant='contained'
          sx={{ backgroundColor: '#012169', height: '2rem', width: '10rem', marginTop: '2rem' }}
          onClick={handleViewAudits}
        >
          View Audits
        </Button>
      </div>
    </div>
  );
};

export default Audit;

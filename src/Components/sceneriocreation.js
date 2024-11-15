import '../Style/Scenerio/scenariocreation.css';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

const ScenarioCreation1 = () => {
  const [scenarioCreationData, setScenarioCreationData] = useState({
    scenarioName: "",
    countryCode: "",
    hops: "",
    inboundQueue: "",
    outboundQueue: "",
  });

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    scenarioName: false,
    countryCode: false,
    hops: false,
    inboundqueue: false,
    outboundQueue: false,
  });

  const [submit, noSubmit] = useState(false);

  const handleInputChange = (e) => {

    const { name, value } = e.target;

    setScenarioCreationData({
      ...scenarioCreationData,
      [name]: value,
    });

    if(name === "scenarioName")
    {
        if(!isNaN(value) || value === "" || value === " "){
          setErrors((fTot) => ({...fTot,scenarioName: true }));
        }
        else{
          setErrors((fTot) => ({...fTot,scenarioName: false }));
        }
    }
    else if(name === "countryCode")
    {
        if(!isNaN(value) || value === "" || value.length !== 2){
          setErrors((fTot) => ({...fTot,countryCode: true }));
        }
        else{
          setErrors((fTot) => ({...fTot,countryCode: false }));
        }
    }
    else if(name === "hops")
    {
        if(!isNaN(value) || value === ""){
          setErrors((fTot) => ({...fTot,hops: true }));
        }
        else{
          setErrors((fTot) => ({...fTot,hops: false }));
        }
    }
    else if(name === "inboundQueue")
    {
        if(!isNaN(value) || value === ""){
          setErrors((fTot) => ({...fTot,inboundQueue: true }));
        }
        else{
          setErrors((fTot) => ({...fTot,inboundQueue: false }));
        }
    }
    else if(name === "outboundQueue")
    {
        if(!isNaN(value) || value === ""){
          setErrors((fTot) => ({...fTot,outboundQueue: true }));
        }
        else{
          setErrors((fTot) => ({...fTot,outboundQueue: false }));
        }    
    }
    else{ }

  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if((scenarioCreationData.scenarioName ==="" || errors.scenarioName)  ||  scenarioCreationData.countryCode ==="" ||  scenarioCreationData.hops ===""
      || scenarioCreationData.inboundQueue==="" || scenarioCreationData.outboundQueue==="")
    { 
      noSubmit(true);
      return;
    }
    else{
      setLoading(true);
      try {
        const response = await fetch('http://172.17.2.77:8080/scenarioCreation', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(scenarioCreationData),
        });

        const res = await response.json();
        console.log("Scenario Creation is success", res);
      } catch (error) {
        console.log("Error posting Scenario Creation", error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const buttonSx = {
    ...(loading && {
      bgcolor: 'green',
    }),
  };

  return (
    <>
      <div className="ScenarioCreation">
        <div className='CreationEmptyDiv'></div>
        <div className='OuterDiv'>
          <div className='ScenarioDetailsHeader'>
            <button style={{
              marginLeft: "10px",
              marginTop: "10px",
              height: "2rem",
              border: "none",
              color: "black",
              backgroundColor: "transparent",
              fontSize: "25px"
            }}>
              Scenario Details
            </button>
          </div>

          <div className="ScenarioCreationBody">
            <TextField
              className='InputFields'
              id="demo-helper-text-misaligned1"
              label="Scenario name"
              name="scenarioName"
              value={scenarioCreationData.scenarioName}
              error={errors.scenarioName}
              onChange={handleInputChange}
              helperText={errors.scenarioName ? "Invalid Scenario name" : ""}
            />
            <TextField
              className='InputFields'
              id="demo-helper-text-misaligned"
              label="Country Code"
              name="countryCode"
              value={scenarioCreationData.countryCode}
              error={errors.countryCode}
              onChange={handleInputChange}
              helperText={errors.countryCode ? "Invalid Country code" : ""}
            />
            <TextField
              className='InputFields'
              id="demo-helper-text-misaligned"
              label="Hops"
              name="hops"
              value={scenarioCreationData.hops}
              error={errors.hops}
              onChange={handleInputChange}
              helperText={errors.hops ? "Invalid Hops" : ""}
            />
            <TextField
              className='InputFields'
              id="demo-helper-text-misaligned"
              label="Inbound Queue"
              name="inboundQueue"
              value={scenarioCreationData.inboundQueue}
              error={errors.inboundQueue}
              onChange={handleInputChange}
              helperText={errors.inboundQueue ? "Invalid Inbound Queue" : ""}
            />
            <TextField
              className='InputFields'
              id="demo-helper-text-misaligned"
              label="Outbound Queue"
              name="outboundQueue"
              value={scenarioCreationData.outboundQueue}
              error={errors.outboundQueue}
              onChange={handleInputChange}
              helperText={errors.outboundQueue ? "Invalid Outbound Queue" : ""}
            />

            <Box sx={{ m: 1, position: 'relative' }}>
              <Button
                variant="contained"
                sx={buttonSx}
                disabled={loading}
                onClick={handleCreate}
              >
                Create
              </Button>
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: 'blue',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                  }}
                />
              )}
            </Box>
          </div>
        </div>
        {submit && <p style={{ color: 'red' }}>
              Valid fields are required to submit the form
                  </p>}
                  {/* {!submit && <p style={{ color: 'red' }}>
              submitted successfully
                  </p>} */}
      </div>
    </>
  );
};

export default ScenarioCreation1;

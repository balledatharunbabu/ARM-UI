import '../Style/Scenerio/scenariocreation.css';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

const ScenarioCreation1 = () => {
  const [scenarioCreationData, setScenarioCreationData] = useState({
    scenarioname: "",
    countrycode: "",
    hops: "",
    inboundqueue: "",
    outboundqueue: "",
  });

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    scenarioname: false,
    countrycode: false,
    hops: false,
    inboundqueue: false,
    outboundqueue: false,
  });

  const [submit, noSubmit] = useState(false);

  const handleInputChange = (e) => {

    const { name, value } = e.target;

    setScenarioCreationData({
      ...scenarioCreationData,
      [name]: value,
    });

    if(name === "scenarioname")
    {
        if(!isNaN(value) || value === "" || value === " "){
          setErrors((fTot) => ({...fTot,scenarioname: true }));
        }
        else{
          setErrors((fTot) => ({...fTot,scenarioname: false }));
        }
    }
    else if(name === "countrycode")
    {
        if(!isNaN(value) || value === "" || value.length !== 2){
          setErrors((fTot) => ({...fTot,countrycode: true }));
        }
        else{
          setErrors((fTot) => ({...fTot,countrycode: false }));
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
    else if(name === "inboundqueue")
    {
        if(!isNaN(value) || value === ""){
          setErrors((fTot) => ({...fTot,inboundqueue: true }));
        }
        else{
          setErrors((fTot) => ({...fTot,inboundqueue: false }));
        }
    }
    else if(name === "outboundqueue")
    {
        if(!isNaN(value) || value === ""){
          setErrors((fTot) => ({...fTot,outboundqueue: true }));
        }
        else{
          setErrors((fTot) => ({...fTot,outboundqueue: false }));
        }    
    }
    else{ }

  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if((scenarioCreationData.scenarioname ==="" || errors.scenarioname)  ||  scenarioCreationData.countrycode ==="" ||  scenarioCreationData.hops ===""
      || scenarioCreationData.inboundqueue==="" || scenarioCreationData.outboundqueue==="")
    { 
      noSubmit(true);
      return;
    }
    else{
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8001/scenarioCreation', {
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
              name="scenarioname"
              value={scenarioCreationData.scenarioname}
              error={errors.scenarioname}
              onChange={handleInputChange}
              helperText={errors.scenarioname ? "Invalid Scenario name" : ""}
            />
            <TextField
              className='InputFields'
              id="demo-helper-text-misaligned"
              label="Country Code"
              name="countrycode"
              value={scenarioCreationData.countrycode}
              error={errors.countrycode}
              onChange={handleInputChange}
              helperText={errors.countrycode ? "Invalid Country code" : ""}
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
              name="inboundqueue"
              value={scenarioCreationData.inboundqueue}
              error={errors.inboundqueue}
              onChange={handleInputChange}
              helperText={errors.inboundqueue ? "Invalid Inbound Queue" : ""}
            />
            <TextField
              className='InputFields'
              id="demo-helper-text-misaligned"
              label="Outbound Queue"
              name="outboundqueue"
              value={scenarioCreationData.outboundqueue}
              error={errors.outboundqueue}
              onChange={handleInputChange}
              helperText={errors.outboundqueue ? "Invalid Outbound Queue" : ""}
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

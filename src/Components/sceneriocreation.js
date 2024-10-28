import '../Style/Scenerio/scenariocreation.css'
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import { useEffect } from 'react';
const ScenarioCreation =()=>{
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const[error,seterror]=useState(false)
    
    const[error1,seterror1]=useState(false)

        
    const[error2,seterror2]=useState(false)
        
    
    const timer = React.useRef(undefined);

    const buttonSx = {
        ...(success && {
          bgcolor: green[500],
          '&:hover': {
            bgcolor: green[700],
          },
        }),
      };
    
      React.useEffect(() => {
        return () => {
          clearTimeout(timer.current);
        };
      }, []);
    
    const [scenarioCreationData, setScenarioCreationData] = useState({
        scenarioname: "",
        countrycode: "",
        hops:"",
        inboundqueue: "",
        outboundqueue: "", 
    });


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setScenarioCreationData ({
            ...scenarioCreationData,
            [name]: value,
        });
    };

    const handleCreate = async (e) => {

if(scenarioCreationData.scenarioname!=""&&scenarioCreationData.countrycode!=""){
 
seterror(false)
seterror1(false)
seterror2(false)



  if (!loading) {
    setSuccess(false);
    setLoading(true);
    timer.current = setTimeout(() => {
      setSuccess(true);
      setLoading(false);
    }, 2000);
  }
e.preventDefault();
console.log(scenarioCreationData);

try{
    const response = await fetch('http://localhost:8001/scenarioCreation', {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(scenarioCreationData)
    });

    const res = await response.json();
    console.log("Scenario Creation is success", res);


}catch(error) {
    console.log("Error posting Scenario Creation", error.message);
}
}
else{

  if(scenarioCreationData.scenarioname==""){
    seterror(true)
  
  }
 if(scenarioCreationData.countrycode==""){
    seterror1(true)
  }

   scenarioCreationData.hops==""?seterror2(true):seterror2(false)

  
  
 
}

  
    };
    return(
        <>
        <div className="ScenarioCreation"> 
            <div className='CreationEmptyDiv'></div> 
                <div className='OuterDiv'>
                    <div className='ScenarioDetailsHeader'>
                            <button style={{
                                            marginLeft:"10px",
                                            marginTop:"10px",
                                            height:"2rem",
                                            border:"none",
                                            color:"black",
                                            backgroundColor:"transparent",
                                            fontSize:"25px"
                            }}>Scenario Details </button>
                            
                    </div>

                    <div className="ScenarioCreationBody">
                      
                      
                            <TextField 

                            error= {error}
                                className='InputFields'
                                id="demo-helper-text-misaligned1"
                                label="Scenerio name"
                                name="scenarioname" 
                                value={scenarioCreationData.scenarioname} 
                                onChange={handleInputChange} 
                                
                            />
                          {/* <p id="field1" style={{fontStyle:'1px'}}></p> */}
                            <TextField 
                                   error={error1}
                                className='InputFields'
                                id="demo-helper-text-misaligned"
                                label="Country Code"
                                name="countrycode" // Add the name attribute
                                value={scenarioCreationData.countrycode} // Bind value from the state
                                onChange={handleInputChange} // Handle the input change event  
                            />

                            <TextField 
                            error={error2}
                                className='InputFields'
                                id="demo-helper-text-misaligned"
                                label="Hops"
                                name="hops" // Add the name attribute
                                value={scenarioCreationData.hops} // Bind value from the state
                                onChange={handleInputChange} // Handle the input change event
                                                
                            />

                            <TextField 
                                className='InputFields'
                                id="demo-helper-text-misaligned"
                                label="Inbound Queue"
                                name="inboundqueue" // Add the name attribute
                                value={scenarioCreationData.inboundqueue} // Bind value from the state
                                onChange={handleInputChange} // Handle the input change event
                                    
                            />

                            <TextField 
                                className='InputFields'
                                id="demo-helper-text-misaligned"
                                label="Outbound Queue"
                                name="outboundqueue" // Add the name attribute
                                value={scenarioCreationData.outboundqueue} // Bind value from the state
                                onChange={handleInputChange} // Handle the input change event
                                    
                            />  



                            {/* <button  style={{
                                            // marginLeft:"22rem",
                                            // marginTop:"2rem",
                                            height:"2rem",
                                            width:"5rem",
                                            border:"none",
                                            borderRadius:"3px",
                                            color:"white",
                                            backgroundColor:"#011F5B",
                                            fontSize:"15px"
                    }} onClick={
                        handleCreate
                        // window.location.reload();
                    }> Create </button>   */}
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
            
                      
        </div>
         </>
    )
}

export default ScenarioCreation;
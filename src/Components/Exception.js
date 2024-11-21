import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import '../Style/Exception/exceptionStyling.css';

const ExceptionDetails = () => {
    const [idInputField, setIdInputField] = useState('');
    const [nameInputField, setNameInputField] = useState('');
    const [ccInputField, setCcInputField] = useState('');
    const navigate = useNavigate();
    const [details, setDetails] = useState({});
    const [viewExcepDetails, setViewExcepDetails] = useState(false);
    const [showException, setShowException] = useState(false);
    const [showExcepStack, setShowExcepStack] = useState(false);
    const [payload, setPayload] = useState(false);

    const showExceptions = () => {
        const scenarioDetailsUrl = `http://localhost:8080/getExceptionDetails/${idInputField}/${nameInputField}/${ccInputField}`;
        
        axios.get(scenarioDetailsUrl)
            .then(response => {
                setDetails(response.data);
                console.log(response.data);
                setViewExcepDetails(true); 
            })
            .catch(error => console.error('Error fetching data:', error));
    };


    const excepStack = () => {
        setShowExcepStack(!showExcepStack);
    };

    const displayPayload = () => {
        setPayload(!payload);
    };

     const navigateReplay = () =>
     {
        navigate("/scenario/replay");
     }

    return (
        <div className='mainGrid'>
            <div className='inputField_container'>
                <TextField 
                    label="Scenario Id" 
                    variant="outlined"  
                    className='InputFields' 
                    sx={{ width: '400px', marginTop: '2rem' }} 
                    value={idInputField} 
                    onChange={(e) => setIdInputField(e.target.value)} 
                />
                <TextField 
                    label="Scenario Name" 
                    variant="outlined"  
                    className='InputFields' 
                    sx={{ width: '400px', marginTop: '2rem' }} 
                    value={nameInputField}  
                    onChange={(e) => setNameInputField(e.target.value)} 
                />
                <TextField 
                    label="Country Code" 
                    variant="outlined"  
                    className='InputFields' 
                    sx={{ width: '400px', marginTop: '2rem' }} 
                    value={ccInputField}  
                    onChange={(e) => setCcInputField(e.target.value)} 
                />
                <Button 
                    variant='contained' 
                    sx={{ backgroundColor: '#012169', height: '2rem', width: '10rem', marginTop: '2rem' }} 
                    onClick={showExceptions}
                >
                    Exceptions
                </Button>
            </div>

            {viewExcepDetails && (
                <div className='displayExcepDet'>
                    <p>Exception Info</p>
                    <table>
                        <tbody>
                            <tr>
                                <td><span style={{ color: 'black' }}>Message ID:</span></td>
                                <td><input className='tdInput' value={details?.originaMessageId || ''} readOnly /></td>
                            </tr>
                            <tr>
                                <td><span style={{ color: 'black' }}>Timestamp:</span></td>
                                <td><input className='tdInput' value={details?.exceptionTimeStamp || ''} readOnly /></td>
                            </tr>
                            <tr>
                                <td><span style={{ color: 'black' }}>Exception Route:</span></td>
                                <td><input className='tdInput' value={details?.exceptionRoute || ''} readOnly /></td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <button className='PayloadBtn' onClick={displayPayload}>Payload</button>
                    {payload && (
                        <div className='payloadDisplay'>
                            <span style={{ height: '3rem', display: 'block', overflowY: 'auto',overflowX: 'auto', scrollbarWidth: 'thin'}}>{JSON.stringify(details?.payload, null, 2) || ''}</span>
                        </div>
                    )}
                    <br></br>
                    <button className='PayloadBtn' onClick={excepStack}>Error Message</button>
                    {showExcepStack && (
                        <div className='ErrorDisplay'>
                            <span style={{ height: '10rem', display: 'block', overflow: 'auto', scrollbarWidth: 'thin' }}>{details?.errorMessage || ''}</span>
                        </div>
                    )}
                    <br />
                    {/* <center>
                    <button className='PayloadBtn' onClick={navigateReplay}>Handle Exception</button></center> */}
                </div>
            )}
        </div>
    );
};

export default ExceptionDetails;

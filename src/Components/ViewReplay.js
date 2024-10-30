import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import '../Style/Replay/Replay.css';

const ViewReplay = () => {
    const [details, setDetails] = useState([]);
    const showReplays= () => {
        const scenarioDetailsUrl = `http://localhost:8080/getreplayDetails`;
        
        axios.get(scenarioDetailsUrl)
            .then(response => {
                setDetails(response.data);
                console.log(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    };
    useEffect(() => {   showReplays(); }, []); 

    return (
        <div className='Replays'>
            {details.map((item, index) => (
                    <div key={index} className='eachBox'>
                        <p>Scenario ID: {item.scenarioId}</p>
                        <p>Exception: {item.exceptionRoute}</p>
                        <button className='replayBtn'>Replay</button>
                    </div>
            ))}
        </div>
    );
};

export default ViewReplay;

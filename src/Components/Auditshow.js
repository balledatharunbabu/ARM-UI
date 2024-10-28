import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Auditres({ scenarioId, scenarioName, countryCode }) {
  const [responseDataList, setResponseDataList] = useState([]);

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (scenarioId && scenarioName && countryCode) {
          const getScenarioDetailsUrl = `http://localhost:8080/getAuditsBy/${scenarioId}/${scenarioName}/${countryCode}`;
          const response = await axios.get(getScenarioDetailsUrl);
          setResponseDataList(response.data);
        }
      } catch (error) {
        console.log("Error retrieving data:", error.message);
      }
    };

    fetchData();
  }, [scenarioId, scenarioName, countryCode]);

  const handleRefresh = () => {
    window.location.reload();
  };

  const renderPayload = (payload) => {
    if (typeof payload === 'object' || Array.isArray(payload)) {
      return (
        <pre>
          {JSON.stringify(payload, null, 2)}
        </pre>
      );
    } else {
      return <span>{payload}</span>;
    }
  };

  return (
    <div style={{ marginTop: '6rem' }}>
      <div className='FlowBody'>
        <table className='AuditsTable'>
          <thead>
            <tr>
              <th>Hops</th>
              <th>Payload</th>
            </tr>
          </thead>
          <tbody>
            {responseDataList.map((item, index) => (
              <tr key={index}>
                <td>{item.hops}</td>
                <td>{renderPayload(item.payload)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

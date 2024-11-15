import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Auditres({ scenarioId, scenarioName, countryCode }) {
  const [responseDataList, setResponseDataList] = useState([]);

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (scenarioId && scenarioName && countryCode) {
          const getScenarioDetailsUrl = `http://172.17.2.77:8080/getAuditsBy/${scenarioId}/${scenarioName}/${countryCode}`;
          const response = await axios.get(getScenarioDetailsUrl);
          setResponseDataList(response.data);
          console.log(response);
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
              <th>inboundQueue</th>
              <th>outboundQueue</th>
              <th>sourceTimeStamp</th>
              <th>targetTimeStamp</th>
              {/* <th>auditStatus</th> */}
              <th>Hops</th>
              <th>Payload</th>
            </tr>
          </thead>
          <tbody>
            {responseDataList.map((item, index) => (
              <tr key={index}>
                 <td>{item.inboundQueue}</td>
                 <td>{item.outboundQueue}</td>
                 <td>{item.sourceTimeStamp}</td>
                 <td>{item.targetTimeStamp}</td>
                 {/* <td>{item.inAuditStatus}</td> */}
                <td>{item.hops}</td>
                <td >
                  <div style={{ overflowY: 'auto',overflowX: 'hidden', scrollbarWidth: 'thin', maxHeight: '50px' }}>
                  {renderPayload(item.payload)}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

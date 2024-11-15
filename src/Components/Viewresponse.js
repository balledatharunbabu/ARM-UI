import { useState } from "react";
import { useLocation } from "react-router-dom";
import '../Style/Display/table.css';

export default function Viewresponse() {
    const location = useLocation();
    const details = location.state;
    console.log(details); 

    return (
        <div className="displays">
            {details ? (
                <table className="viewtable"> 
                    <thead>
                        <tr>
                            <th>Scenario ID</th>
                            <th>Scenario Name</th>
                            <th>Country Code</th>
                            <th>Inbound Adapter</th>
                            <th>Outbound Adapter</th>
                            <th>Flow</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{details.scenarioId}</td>
                            <td>{details.scenarioName}</td>
                            <td>{details.countryCode}</td>
                            <td>{details.inboundQueue}</td>
                            <td>{details.outboundQueue}</td>
                            <td style={{ width: '15%' }}>{details.hops}</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>Data not available.</p>
            )}
        </div>
    );
}

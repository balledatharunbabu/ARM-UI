import { useState } from "react";
import { useLocation } from "react-router-dom"
import '../Style/Display/table.css'

export default function Viewresponse(){

    const location=useLocation();

    const details=location.state;

    return(

      <div className="displays">
      <table className="viewtable" >
            <tr>
                <th>scenerioId</th>
                <th>scenerioName</th>
                <th>scenerioDescription</th>
                <th>countrycode</th>
                <th>inboundadapter</th>
                <th>outboundadapter</th>
                <th>flow</th>
            </tr>
            <tr>
                <td>{details.scenarioid}</td>
                <td>{details.scenarioname}</td>
                <td>{details.scenerioDescription}</td>
                <td>{details.countrycode}</td>
                <td>{details.inboundqueue}</td>
                <td>{details.outboundqueue}</td>
                <td style={{width:'15%'}}>{details.hops}</td>
            </tr>

      </table>
      
      </div>



    )
}
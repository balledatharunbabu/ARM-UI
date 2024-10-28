import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Drawer from '../Components/Drawer';
import ButtonAppBar from '../Components/appbar';
import '../Style/View/View.css';
import '../Style/Common/common.css';
import Auditres from '../Components/Auditshow';

export default function AuditResponse() {
  const location = useLocation();
  const { scenarioId, scenarioName, countryCode } = location.state || {};

  return (
    <div className='scenerio' style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100%' }}>
      <div>
        <ButtonAppBar />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }} className='commonbg'>
        <Drawer />
        <Auditres scenarioId={scenarioId} scenarioName={scenarioName} countryCode={countryCode} />
      </div>
    </div>
  );
}

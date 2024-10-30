
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Drawer from '../Components/Drawer';
import ButtonAppBar from '../Components/appbar';
import '../Style/View/View.css';
import '../Style/Common/common.css';
import ViewReplay from '../Components/ViewReplay';

export default function ExcepReplay() {
const location = useLocation();

  return (
    <div className='scenerio' style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100%' }}>
      <div>
        <ButtonAppBar />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }} className='commonbg'>
        <Drawer />
        <ViewReplay />
      </div>
    </div>
  );
}

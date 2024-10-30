
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'

import ButtonAppBar from './Components/appbar';

import ViewScenerio from './Pages/ViewScenerio'

import ViewScenerioreponse from './Pages/Viewscenrioresponse'

import Exceptionscenerio from './Pages/ExceptionScenerio'

import ScenarioCreation from './Pages/Createscenerio'

import Auditscenerio from './Pages/Auditscenerio'

import AuditResponse from './Pages/AuditResponse'

import ExcepReplay from './Pages/ExceptionReplay';

function App() {

  return(
    <>

    <BrowserRouter>

        <Routes>
     
          <Route path="/" element={<Home></Home>}></Route>

          <Route path="/scenario/view" element={<ViewScenerio></ViewScenerio>}></Route>

          <Route path="/scenario/viewscenerio" element={<ViewScenerioreponse></ViewScenerioreponse>}></Route>

          
          <Route path="/scenario/createscenerio" element={<ScenarioCreation/>}></Route>

          <Route path="/scenario/exception" element={<Exceptionscenerio></Exceptionscenerio>}></Route>

          <Route path="/scenario/audit" element={<Auditscenerio></Auditscenerio>}></Route>
          <Route path="/scenario/auditResponse" element={<AuditResponse></AuditResponse >}></Route>
          
          <Route path="/scenario/replay" element={<ExcepReplay></ExcepReplay>}></Route>

        </Routes>
      
    </BrowserRouter>    
       
        
    </>

  ) 
}

export default App;

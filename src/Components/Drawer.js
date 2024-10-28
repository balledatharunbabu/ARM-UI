import '../Style/Scenerio/Drawer.css'
import { useLocation, useNavigate } from 'react-router-dom'


export default function Drawer(){

  const location=useLocation()

  const isActive=(path,path2)=>location.pathname==path||location.pathname==path2

  const isAudit=(path)=>location.pathname==path


  const navigate=useNavigate();
  return(
    <div className="Menu" >
<button className='Buttons' onClick={()=>{navigate("/scenario/view")}} style={{marginTop:'10px'}}>SCENERIO</button>

<button className='Buttons' onClick={()=>{navigate("/scenario/audit")}} >AUDIT</button>
<button className='Buttons' onClick={()=>{navigate("/scenario/exception")}}>EXCEPTION</button>
<button className='Buttons' >REPLAY</button>



    
    
</div>
  )
}
import Drawer from '../Components/Drawer'
import MiniDrawer from '../Components/Drawer'
import ScenerioAppBar from '../Components/scenerioappbar'
import '../Style/View/View.css'
import Audit from '../Components/Audit'
import '../Style/Common/common.css'

import ButtonAppBar from '../Components/appbar'
export default function Auditscenerio(){
    return(
      <div className='scenerio' style={{display:'flex',flexDirection:'column',height:'100vh',width:'100%'}}>

        <div>
            <ButtonAppBar></ButtonAppBar>
        </div>


    <div style={{display:'flex',flexDirection:'row'}}className='commonbg'>
          <Drawer/> 

          {/* <div style={{height:'91vh',width:'82%',alignItems:'center',justifyContent:'center',marginTop:"2rem"}}>
                 <Audit></Audit>
          </div>
       */}
<Audit></Audit>
    </div>

    
        </div> )
}
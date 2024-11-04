import Drawer from '../Components/Drawer'
import MiniDrawer from '../Components/Drawer'
import ScenerioAppBar from '../Components/scenerioappbar'
import '../Style/View/View.css'
import View from '../Components/View'
import '../Style/Common/common.css'


import ScenarioCreation1 from '../Components/sceneriocreation'
export default function ViewScenerio(){
    return(
      <div className='scenerio' style={{display:'flex',flexDirection:'column',height:"100vh", width:"100%"}}>

        <div>
            <ScenerioAppBar></ScenerioAppBar>
        </div>


        <div style={{display:'flex',flexDirection:'row' ,height:'100vh',width:'100%'}}className='commonbg'>
            
            <Drawer/> 

          <div  style={{height:'91vh',width:'82%',alignItems:'center',justifyContent:'center'}}>
                 <ScenarioCreation1></ScenarioCreation1>
          </div>
      

    </div>

    
        </div> )
}
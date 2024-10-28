import Drawer from '../Components/Drawer'
import MiniDrawer from '../Components/Drawer'
import ScenerioAppBar from '../Components/scenerioappbar'
import '../Style/View/View.css'
import View from '../Components/View'
import '../Style/Common/common.css'
export default function ViewScenerio(){
    return(
      <div className='scenerio' style={{display:'flex',flexDirection:'column',height:'100vh',width:'100%'}}>

        <div>
            <ScenerioAppBar></ScenerioAppBar>
        </div>


    <div style={{display:'flex',flexDirection:'row'}}className='commonbg'>
          <Drawer/> 

          <div style={{height:'91vh',width:'82%',alignItems:'center',justifyContent:'center',marginTop:"4rem",marginleft:'155rem'}}>
                 <View></View>
          </div>
      

    </div>

    
        </div> )
}
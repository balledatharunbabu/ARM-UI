import Drawer from '../Components/Drawer'
import MiniDrawer from '../Components/Drawer'
import ScenerioAppBar from '../Components/scenerioappbar'
import '../Style/View/Viewresponse.css'
import Viewresponse from '../Components/Viewresponse'
import '../Style/Common/common.css'
export default function ViewScenerioreponse(){
    return(
      <div className='scenerio'style={{display:'flex',flexDirection:'column',height:'100vh',width:'100%'}}>

        <div>
            <ScenerioAppBar></ScenerioAppBar>
        </div>


    <div style={{display:'flex',flexDirection:'row' }}className='commonbg'>
          <Drawer/> 

          <div className='viewresponse'>
                 <Viewresponse></Viewresponse>
          </div>
      

    </div>

    
        </div> )
}
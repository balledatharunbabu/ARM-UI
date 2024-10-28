import Drawer from '../Components/Drawer'
import MiniDrawer from '../Components/Drawer'
import ScenerioAppBar from '../Components/scenerioappbar'
import '../Style/View/View.css'
import View from '../Components/View'
import '../Style/Common/common.css'
import ButtonAppBar from '../Components/appbar'
import ExceptionDetails from '../Components/Exception'
export default function Exceptionscenerio(){
    return(

   <div className='scenerio' style={{display:'flex',flexDirection:'column',height:'100vh',width:'100%'}}>

        <div>
            <ButtonAppBar></ButtonAppBar>
        </div>


    <div style={{display:'flex',flexDirection:'row',height:'100vh',width:'100%'}} className='commonbg'>
          <Drawer/> 

          <div>
                 <ExceptionDetails></ExceptionDetails>
          </div>
      

    </div>

    </div>

    )
}
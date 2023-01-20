//Dependencies
import {v4 as uuidv4} from 'uuid'

//Components
import Box from '@mui/system/Box';
import Card from './Card'

function TabPanel({data,index,value}){
    return(
        <div 
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {
        data && <Box sx={{display:'grid',gridTemplateColumns:'repeat(3, 1fr)',gap:1,alignItems:"start"}}>
        {data.map(obj=>{return(<Card key={uuidv4()} data={obj} />)})}
        {data.map(obj=>{return(<Card key={uuidv4()} data={obj} />)})}
        </Box>
      }
      

    </div>
    )
}

export default TabPanel;
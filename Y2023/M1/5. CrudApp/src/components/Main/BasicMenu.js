//Dependencies
import {v4 as uuidv4} from 'uuid'

//Components
import IconButton from "@mui/material/IconButton";
import Add from "@mui/icons-material/Add";
import Menu from "@mui/material/Menu";
import MenuItem from "./materials.components";
import Box from "@mui/material/Box"

//Hooks
import {useState} from 'react';

function BasicMenu({ tabs,handleFormVisibility }) {
    
    const [anchorEI, setAnchorEI] = useState(null);
    const isVisibleMenu = Boolean(anchorEI);

    const handleClick = (event) => {
        setAnchorEI(event.currentTarget)
    }

    const handleClose = () =>{
        setAnchorEI(null)
    }

    return (
        <Box>
            <IconButton onClick={handleClick} sx={{ mr: 1, ml: 1 }}>
                <Add />
            </IconButton>
            <Menu anchorOrigin={{horizontal:'left',vertical:'bottom'}}onClose={handleClose} anchorEl={anchorEI} open={isVisibleMenu} >
                <Box onClick={(event)=>{handleClose();handleFormVisibility(event)}}>
                    {tabs.map((tab,index) => <MenuItem key={uuidv4()}>{tab}</MenuItem>)}
                </Box>
            </Menu>
        </Box>
    )
}

export default BasicMenu;
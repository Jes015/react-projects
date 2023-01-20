import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/icons-material/Menu";
import Switch from "@mui/material/Switch";
import Box from "@mui/system/Box";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Typography from "@mui/material/Typography";

function Header({handleDarkMode, handleVisibleDrawer}){
    return(
        <AppBar position="relative">
            <Toolbar>
                <IconButton color="main" onClick={handleVisibleDrawer}>
                    <Menu />
                </IconButton>
                <Typography variant="body1" sx={{flexGrow:1}} >Naruto</Typography>
                <Box sx={{display:'flex',alignItems:'center'}}>
                    <WbSunnyIcon fontSize="medium"/>
                    <Switch defaultChecked onChange={handleDarkMode} color="secondary" size="small"/>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
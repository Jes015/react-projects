import Menu from "@mui/icons-material/Menu";
import Brightness1 from "@mui/icons-material/Brightness2";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

function Header(props) {

    return (
        <AppBar position="sticky" sx={{top:0}}>
            <Toolbar variant="regular" sx={{gap:'0.4em'}}>
            <Box component="button" sx={{ display: { xs: 'block', md:'none' } }}>Hola</Box>
                <IconButton sx={{color:'inherit'}}> <Menu /></IconButton>
                <Typography component="div" sx={{ flexGrow: 1 }}>Pero queee</Typography>
                <Box sx={{display:'flex',alignItems:'center'}}>
                    <Switch size="small" onChange={props.event}></Switch>
                    <Brightness1 fontSize="small"/>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
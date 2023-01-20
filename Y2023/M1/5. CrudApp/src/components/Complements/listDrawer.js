import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import Box from "@mui/material/Box";
import Repartition from "@mui/icons-material/AccessibleForward";
import ListSubheader from "@mui/material/ListSubheader";

function Item({keye}){return(<ListItem key={keye} disablePadding>
    <ListItemButton>
        <ListItemIcon>
            <Repartition />
        </ListItemIcon>
        <ListItemText primary="Test" />
    </ListItemButton>
</ListItem>)};

function ListDrawer({onClose,title}) {
    return (
        <Box onClick={()=>onClose(false)}>
            <List sx={{width:'100%'}} subheader={
                <ListSubheader component="div">
                    {title}
                </ListSubheader>

            }>
                <Item keye={title+'item+0'}/>
                <Item keye={title+'item+1'}/>
                <Item keye={title+'item+2'}/>
                <Item keye={title+'item+3'}/>
                <Item keye={title+'item+4'}/>
                <Item keye={title+'item+5'}/>
                <Item keye={title+'item+6'}/>
                <Item keye={title+'item+7'}/>
                <Item keye={title+'item+8'}/>
                <Item keye={title+'item+9'}/>
                <Item keye={title+'item+10'}/>
                <Item keye={title+'item+11'}/>
                <Item keye={title+'item+12'}/>
                <Item keye={title+'item+13'}/>
                <Item keye={title+'item+14'}/>
                <Item keye={title+'item+15'}/>
                <Item keye={title+'item+16'}/>
                <Item keye={title+'item+17'}/>
                <Item keye={title+'item+18'}/>
                <Item keye={title+'item+19'}/>

            </List>
        </Box>
            

    )
}

export default ListDrawer;
import Drawer from "@mui/material/Drawer";
import ListDrawer from "./listDrawer";

function DrawerL({ visibleDrawer, setVisibleDrawer }) {
    return (
        <Drawer variant="temporary" anchor='top' open={visibleDrawer} onClose={() => setVisibleDrawer(false)}>
            <ListDrawer title="Menú" onClose={setVisibleDrawer} />
            <ListDrawer title="Title" onClose={setVisibleDrawer} />
            <ListDrawer title="Options" onClose={setVisibleDrawer} />
        </Drawer>
    )
}

export default DrawerL;
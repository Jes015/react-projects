import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline/index";
import Header from './Header/Header'
import DrawerL from "./Complements/Drawer";
import Main from './Main/Main'
import { useState } from "react";

function App(props){

    const [darkMode, setDarkMode] = useState(true)
    const [visibleDrawer, setVisibleDrawer] = useState(false)

    const theme = createTheme({
        palette:{
            mode: darkMode?'dark':'light',
            primary:{
                light:'#002984',
                main: '#90caf9',
                dark:'#757de8'
            },
            secondary:{
                light:'#ba000d',
                main: '#ff7961',
                dark: '#ff7961'
            }
        },
    })

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header handleVisibleDrawer={()=>setVisibleDrawer(true)} handleDarkMode={()=>setDarkMode(!darkMode)} />
            <DrawerL visibleDrawer={visibleDrawer} setVisibleDrawer={setVisibleDrawer} />
            <Main />
        </ThemeProvider>
    )
}

export default App;
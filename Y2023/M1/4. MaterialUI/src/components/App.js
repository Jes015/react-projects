import Header from "./Header"
import Main from './Main'
import CssBaseline from "@mui/material/CssBaseline"
import {createTheme, ThemeProvider}from "@mui/material/";
import { colors } from "@mui/material/";
import {useState} from "react";

function MyApp(){

    const [darkMode,setDarkMode] = useState(false);

    const theme = createTheme({
        palette:{
            mode:darkMode?'dark':'light',
            primary:{
                dark:'#1a237e',
                main: '#ad1457',
                light:'#7986cb'
            },
            secundary:{
                dark:'#00838f',
                main: '#2979ff',
                light:'#26c6da'
            }
        }
    })


    console.log(theme.mixins.toolbar)

    return(
        <>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header event={()=>{setDarkMode(!darkMode)}}/>
        <Main></Main>
        </ThemeProvider>
        </>
    )
}

export default MyApp;
import {v4 as uuidv4} from 'uuid'

//HTTP REQUESTER
import helpHttp from "../helpers/helpHttp";

//Mui
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from '@mui/material/Box'
import Alert from "@mui/material/Alert";
import CircularProgress from '@mui/material/CircularProgress';


//MyApp
import Form from "./form";
import DataTable from "./table";

//React
import { useEffect, useState } from 'react'

export default function App() {

    //VIEW
    const theme = createTheme(
        {
            palette: {
                mode: 'light'
            },
        }
    )

    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    //DB
    const http = helpHttp();
    const endpoint = 'http://localhost:5003/users'
    const [db, setDb] = useState(null)


    useEffect(() => {
        setLoading(true)
        http.get(endpoint).then(res =>{if(res.error){setDb(null);setError(true)}else{setDb(res);setLoading(false)}})
    }, [])


    //METHODS

    const addData = (data)=>{
        data.id =uuidv4();
        http.post(endpoint,{body:data}).then(res=>console.log(res)).catch(err=>console.log(err))
    }

    const updateData= (data)=>{
        http.put(`${endpoint}/${data.id}`,{body:data}).then(res=>console.log(res))
    }

    const deleteData =(data)=>{
        http.del(`${endpoint}/${data.id}`,{body:data}).then(res=>console.log(res)).catch(err=>console.log(err));
    }
    //FORM
    const [form,setForm] = useState({})

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ display: 'flex', flexDirection: 'column', m: 1 }}>
                { error && <Alert severity="error">Http request failed</Alert>}
                {loading && <CircularProgress sx={{position:'fixed',right:0,top:0}} />}
                <Form form={form} setForm={setForm} updateData={updateData} addData={addData}/>
                {db && (<DataTable setForm={setForm} deleteData={deleteData} users={db} />)}
            </Box>
        </ThemeProvider>
    )
}

//Dependencies
import {v4 as uuidv4} from 'uuid'

//Components
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box'
import Save from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "./materials.components";
import Alert from "@mui/material/Alert"

//Hooks
import { useState } from 'react'

function BasicFormDialog({ data,setData,tab, open, handleFormVisibility }) {

    //View
    const [option, setOption] = useState("create")

    const options=["create","update","delete"]

    const descriptions = {
        "create": `Agrege nuevos ${tab ? tab : "example"}`,
        "update": `Modifique ${tab ? tab : "example"}`,
        "delete": `Borre ${tab ? tab : "example"}`,
    }

    const handleOptionsChange = (event) =>{
        setOption(event.target.value)
    }
    //


    //Model
    const [formData,setFormData] = useState({})
    const [dataChangeUpdate,setDataChangeUpdate] = useState("");
    
    const handleFormData = (event)=>{
        setFormData({
            ...formData,
            [event.target.name]:event.target.value
        })
        console.log(data[tab])
    } 

    const addData = ()=>{
        let data2= data[tab];
        data2.push(formData);
        setData({...data,data2})
        setFormData({name:'',img:'',descripcion:''})
    }

    const handleChangeData = (event) =>{
        setDataChangeUpdate(event.target.value)
        const selected = data[tab].find((data)=>dataChangeUpdate===data.name)
        setFormData({name:selected.name,img:selected.img,descripcion:selected.descripcion})
    }

    const deleteData = ()=>{
        
    }
    //

    return (
        <Dialog PaperProps={{ sx: {width: '100%', maxWidth: '560px', padding: '0px 10px' } }} open={open} onClose={handleFormVisibility}>

            <DialogTitle>
                {  <FormControl sx={{width:'100%',maxWidth:'250px'}}>
                    <InputLabel>Accion</InputLabel>
                    <Select value={option} label="Accion" onChange={handleOptionsChange}>
                        {options.map((option)=><MenuItem value={option} key={uuidv4()}>{option}</MenuItem>)}
                    </Select>
                </FormControl>}
                { (options[0]!==option) && <FormControl sx={{m:1,ml:0,width:'100%',maxWidth:'250px'}}>
                    <InputLabel>{tab}</InputLabel>
                    <Select value={dataChangeUpdate} label={tab} onChange={handleChangeData}>
                        {data[tab] && data[tab].map((obj)=><MenuItem key={uuidv4()} value={obj.name}>{obj.name}</MenuItem>)}
                    </Select>
                </FormControl>}

            </DialogTitle>
            <DialogContent sx={{ p: 0 }}>
                <DialogContentText sx={{ mb: 1 }}>{descriptions[option]}</DialogContentText>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, "& .MuiTextField-root": { 'maxWidth': '100%' } }}>
                    <TextField value={formData.name} name="name" label="name" disabled={option === "delete" ? true : false} onChange={(event)=>setFormData({...formData,name:event.target.value})} />
                    <TextField value={formData.img} name="img" label="img" disabled={option === "delete" ? true : false} onChange={handleFormData}/>
                    <TextField value={formData.descripcion} name="descripcion" label="descripcion" disabled={option === "delete" ? true : false} onChange={handleFormData}/>
                </Box>
            </DialogContent>
            <DialogActions sx={{ p: '10px 0px' }}>
                {(option===options[0] || option===options[2])?<Button variant="contained" onClick={()=>option==options[0]?addData():null} endIcon={<Save />}>{option}</Button>:<Alert severity='info'>Datos actualizados</Alert>}
            </DialogActions>
        </Dialog>
    )
}

export default BasicFormDialog;
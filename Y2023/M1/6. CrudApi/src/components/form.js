import { useState } from "react"

import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

export default function Form({addData,updateData,form,setForm}) {
    const handleClickAdd = ()=>{
        console.log(form)
        addData(form);
    }

    const handleClickUpdate = ()=>{
        console.log(form)
        updateData(form);
    }

    const handleChange = (event)=>{
        setForm({...form,[event.target.name]:event.target.value})
    }


    const CustomTextField = (value,datavalue,label,type,defaultValue) => <TextField name={datavalue} variant="outlined" value={value} label={label} type={type || "text"} defaultValue={defaultValue} onChange={handleChange}/>
    return (
            <Box>
                <Typography textAlign='center' variant="h4">FORM</Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns:"repeat(2,1fr)", gap:"15px" }}>
                    {CustomTextField(form.nickname,"nickname","Nick name",null,"Joe yei")}
                    {CustomTextField(form.id,"id","id",null,"e")}
                    {CustomTextField(form.password,"password","Password","password","password")}
                    {CustomTextField(form.email,"email","Email","Email","Joyei@gmail.com")}
                    <Button sx={{gridColumn:"span 2",width:'250px',justifySelf:'center'}} onClick={handleClickAdd}>Enviar</Button>
                    <Button sx={{gridColumn:"span 2",width:'250px',justifySelf:'center'}} onClick={handleClickUpdate}>Update</Button>
                </Box>
            </Box>
    )
}
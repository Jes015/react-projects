import Button from '@mui/material/Button';

export default function TableRow({data,setForm,deleteData}){

    const handleClickForm = ()=>{
        setForm(data)
    }

    const handleClickDelete = ()=>{
        deleteData(data)
    }

    return(
        <tr><td>{data.nickname}</td><td>{data.password}</td><td>{data.email}</td><td>{data.id}</td><td><Button onClick={handleClickDelete}>Delete</Button><Button onClick={handleClickForm}>Update</Button></td></tr>
    )
}
import { Button, Paper, TextField } from "@mui/material"
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { data, Student } from "../ultis/Data"

interface Props{
    students: Student[]
    setStudent : Dispatch<SetStateAction<Student[]>>
}
 
const initialState = {id:99, fullname: "", age:"", email:"", class:"", year : false}

export const AddStrunden=({setStudent: setStudnets, students}: Props)=>{


    const [formData, setFormData] = useState (initialState)
   



    const handleChaned = (e: ChangeEvent<HTMLInputElement>)=>{
setFormData({...formData, [e.target.name]:e.target.value})

    }
      

   
     const handlSubmit=()=>
        {   0
        setStudnets([...students,formData])
           setFormData(initialState)

       
     };
     useEffect(() =>{
        if (formData.fullname === "Admin"){
            alert("you entered a name that will not be store in database. ")
        }

    }, [formData.fullname])
   
   
    return(

        <Paper sx={{width: 300, padding:5, marginTop: 1, gap:1, display:"flex", flexDirection:"column"}}>

           <TextField
            value={formData.fullname} 
            onChange={handleChaned}
             id="outlined-basic" 
             label="Name" 
             name="fullname"
              variant="outlined" />

           <TextField
             value={formData.age}
              onChange={handleChaned} 
              id="outlined-basic" 
              label="Age" 
              name="age" 
              variant="outlined" />  

           <TextField
            value={formData.email}
            onChange={handleChaned} 
            id="outlined-basic" 
            label="Email" 
            name="email" 
            variant="outlined" />

           <TextField 
            value={formData.class}
            onChange={handleChaned} 
            id="outlined-basic"
             label="Class" 
             name="class" 
             variant="outlined" />

            <TextField 
            value={formData.year}
            onChange={handleChaned} 
            id="outlined-basic"
             label="Year" 
             name="year" 
             variant="outlined" />

           <Button onClick={handlSubmit} variant="contained">Submit</Button>
           </Paper>

    )
} 
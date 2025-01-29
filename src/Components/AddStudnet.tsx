import { Button, Paper, TextField } from "@mui/material"
import { ChangeEvent, Dispatch, SetStateAction } from "react"
import { data, Student } from "../ultis/Data"

interface Props{
    students: Student[]
    setStudent : Dispatch<SetStateAction<Student[]>>
}


export const AddStrunden=({setStudent: setStudnets, students}: Props)=>{
   
let formData = {id:99, name: "", age:0, email:"", class:""}

    const handlNameChaned = (e: ChangeEvent<HTMLInputElement>)=>{

     formData.name = e.target.value
    }
      
    const handlAgeChaned = (e: ChangeEvent<HTMLInputElement>)=>{

        formData.age = parseInt(e.target.value)
     }
        
    const handlEmailChaned = (e: ChangeEvent<HTMLInputElement>)=>{

        formData.email = e.target.value
     }
        
    const handlClassChaned = (e: ChangeEvent<HTMLInputElement>)=>{

        formData.class = e.target.value
     }
   
     const handlSubmit=()=>
        {   
        console.log(formData) 
        setStudnets([...students,formData])
            data.push(formData)
     }
   
   
    return(


        <Paper sx={{width: 300, padding:5, marginTop: 1, gap:1, display:"flex", flexDirection:"column"}}>
           <TextField onChange={handlNameChaned} id="outlined-basic" label="Name" name="fullName" variant="outlined" />
           <TextField onChange={handlAgeChaned} id="outlined-basic" label="Age" name="age" variant="outlined" />    
           <TextField onChange={handlEmailChaned} id="outlined-basic" label="Email" name="email" variant="outlined" />
           <TextField onChange={handlClassChaned} id="outlined-basic" label="Class" name="class" variant="outlined" />
           <Button onClick={handlSubmit} variant="contained">Submit</Button>
           </Paper>



    )
} 
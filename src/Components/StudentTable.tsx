import { data, Student } from "../ultis/Data"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Dispatch, useEffect, useMemo } from "react";



export interface Props{
  students: Student []
}

export const StudentTable =({students}: Props ) =>{


  useEffect(() => {
    
    if(students.length == 5 ){
      alert("Max limit reached")
    }

  }, [students]); 

  const studentsWithscholaeship = useMemo(() => {
    return students.map((student) => {
      let result = false; 
      for(let i =0 ; i <= 100000000000; i++){
        result = Math.random() > 0.5; 
      }

      return{...student, eligibale: result};

    });
  }, []) 

  return(
    
    <TableContainer component={Paper}>
      <Table size="small" sx={{border: 2 , width:400}} >
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell sx={{color: 'blue'}}>Age</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Class</TableCell>
            <TableCell>Year</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
         {studentsWithscholaeship.map((item) => {
          return(
            <tr>
            <TableCell>{item.fullname}</TableCell>
            <TableCell>{item.age}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.class}</TableCell>
            <TableCell>{item.eligibale ? "Yes":"NO" }</TableCell>
          </tr>
          )

         })}
      
        </TableBody>
        </Table>
      </TableContainer>
)
}
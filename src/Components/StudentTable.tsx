import { data, Student } from "../ultis/Data"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Dispatch } from "react";



export interface Props{
  studnets: Student []
}

export const StudentTable =(props: Props )=>{
return(
    <TableContainer component={Paper}>
      <Table size="small" sx={{border: 2 , width:400}} >
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell sx={{color: 'blue'}}>Age</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Class</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {props.studnets.map((item) => {
          return(
            <tr>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.age}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.class}</TableCell>
          </tr>
          )

         })}
      
        </TableBody>
        </Table>
      </TableContainer>
)
}
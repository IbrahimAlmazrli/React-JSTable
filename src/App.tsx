import { StudentTable } from "./Components/StudentTable"
import { AddStrunden } from "./Components/AddStudnet"
import { useState } from "react"
import { data } from "./ultis/Data"




function App() {


  const[students, setStudents] = useState(data)

  return (
    <>
      <StudentTable students={students}/>
      <AddStrunden students={students} setStudent={setStudents}/>
    </>
  )
}

export default App

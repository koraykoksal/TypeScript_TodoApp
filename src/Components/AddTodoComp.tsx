import React from 'react'
import { Box, Button, Container, TextField } from '@mui/material'
import SaveIcon from "@mui/icons-material/Save";
import { useState } from 'react';

interface IAddTodoComp {
  AddTodo : AddFn
}

export const AddTodoComp = ({AddTodo}:IAddTodoComp) => {


    const [text, setText] = useState("")

    const handleClick=()=>{
      setText("")
    }

  return (
    

    <Container>
    <Box
      sx={{
        display: { xs: "block", sm: "flex" },
        justifyContent: "center",
        m: { xs: 4, sm: "auto" },
        height: { xs: "120px", sm: "80px" },
      }}>
      <TextField 
      id="outlined-basic" 
      label="New Todo" 
      variant="outlined" 
      sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }} 
      inputProps={{maxLenght:40}}
      value={text} 
      onChange={e=>setText(e.target.value)}/>


      <Button 
      disabled={!text.trim()}
      variant="contained" 
      endIcon={<SaveIcon />} 
      sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
      onClick={handleClick}
      >
        Send
      </Button>
    </Box>
  </Container>
  )
}

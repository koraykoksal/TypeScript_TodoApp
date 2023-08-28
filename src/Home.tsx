import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { AddTodoComp } from './Components/AddTodoComp';

interface TodoType {
  todo:string;
  isDone:boolean;
  id:number | string;
}

export const Home = () => {

  // const [todos,setTodos]=useState([] as TodoType[])
  // const [todos,setTodos]=useState<Array<TodoType>>([])

  const [todos,setTodos]=useState<TodoType[]>([])

  const url:string = import.meta.env.VITE_BASE_URL

  console.log(url)
  
  const getTodos=async()=>{

    try {
      
      //*datanın tipini todoType ile belirtiyoruz.
      //*dataya yüklenecek olan veriyi belirtiyoruz.
      const {data} = await axios<TodoType[]>(url)

      console.log(data)

      setTodos(data)

    } catch (error) {
      console.log('hataaaa')
    }
  }

  //*addtodo fonksiyonunun alacağı paratemrenin tipini string olarak belirttik
  type AddFn = (text:string)=>Promise<void>

  const addTodo:AddFn=async (text)=>{

    try {

      await axios.post(url,{todo:text,isdone:false})

    } catch (error) {
      console.log(error)
    }
    finally{
      getTodos();
    }

  }

  useEffect(() => {
    getTodos()

  }, [])
  

  return (
    
    <Container>
    <Typography color='error' align='center'>
    Todo App with TypeScript
    </Typography> 
    <AddTodoComp/>
    </Container>



  )
}

import { Button, Checkbox, FormControlLabel, FormLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from 'axios';
import React from 'react'
import { useState } from "react";
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function BookDetails() {
    const history = useNavigate()
    const id = useParams().id;
    const [inputs,setInputs] =useState({})
    const [checked,setChecked] = useState(false)
    // console.log(id);
    const handleSubmit=(e)=>{
        e.preventDefault();
        sendRequest().then(()=>history('/books'))
        
    }
    const sendRequest =async()=>{
        await axios.put(`http://localhost:4000/books/${id}`,{
            name:String(inputs.name),
            author:String(inputs.author),
            description:String(inputs.description),
            price:Number(inputs.price),
            image:String(inputs.image),
            available:Boolean(checked),
        }).then(res=>res.data)

    }
    const handleChange =(e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,
            
        }))
    }

    useEffect(()=>{
        const fetchHandler = async()=>{
            await axios.get(`http://localhost:4000/books/${id}`).then(res=>res.data).then(data=>setInputs(data.book))         
        }
        fetchHandler()
    },[id])
     
  return (
    <div>
           <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        maxWidth="700px"
        alignContent="center"
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={10}
      >
        <FormLabel>Name</FormLabel>
        <TextField
        value={inputs.name}
        onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        ></TextField>
        <FormLabel>Author</FormLabel>
        <TextField
        value={inputs.author}
        onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
        ></TextField>
        <FormLabel>Description</FormLabel>
        <TextField
        value={inputs.description}
        onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
        ></TextField>
       
        <FormLabel>Price</FormLabel>
        <TextField
        value={inputs.price}
        onChange={handleChange}
        type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
        ></TextField>
        <FormLabel>Image</FormLabel>
        <TextField
        value={inputs.image}
        onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        ></TextField>
        <FormControlLabel  control={<Checkbox checked={checked} onChange={()=> setChecked(!checked)} />} label="Available" />
        <Button variant="contained" type="submit">Update Book</Button>
      </Box>
    </form>

    </div>
  )
}

export default BookDetails
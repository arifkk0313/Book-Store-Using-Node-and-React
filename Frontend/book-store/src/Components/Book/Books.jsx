import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Book from './Book';
import './Book.css'


const URL ="http://localhost:4000/books";
const fetchHandler =async()=>{
   return await axios.get(URL).then((res)=>res.data)

}
const Books = () => {
    const [books,setBooks] = useState()
    useEffect(()=>{
        fetchHandler().then(data=>setBooks(data.book))
    },[])
    
  return (
    <div>
        <ul>
            {books && 
            books.map((book,i)=>{
                console.log(book);                
                return <li c key={i}>
                    <Book book={book}/>
                </li>
            })}
        </ul>
    </div>
  )
}

export default Books
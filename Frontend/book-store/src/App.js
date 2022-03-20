import Header from "./Components/Header";
import React from "react";
import { Routes,Route } from "react-router-dom";
import { Home } from "./Components/Home";
import AddBook from "./Components/AddBook";
import Books from "./Components/Book/Books";
import About from "./Components/About";
import BookDetails from "./Components/Book/BookDetails";

function App() {
  return (
    <React.Fragment >
    <header>
      <Header />
    </header>
    <main>
      <Routes>
        <Route path="/" exact element={<Home/>}  />
        <Route path="/add" exact element={<AddBook/>}  />
        <Route path="/books" exact element={<Books/>}  />
        <Route path="/about" exact element={<About/>}  />
        <Route path="/books/:id" exact element={<BookDetails/>}  />
      </Routes>
      </main>
      
      </React.Fragment>
  );
}

export default App;

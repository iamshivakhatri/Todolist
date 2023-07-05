
import './App.css';
import Header from "./myComponents/Header";
import { Footer } from "./myComponents/Footer";
import { Todos } from "./myComponents/Todos";
import { AddTodo } from "./myComponents/AddTodo";
import { About } from "./myComponents/About";
import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";





function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }



  const onDelete = (msg) => {
    console.log("I am on delete", msg);
    // Deleting like this won't work
    //    let index = todos.indexOf(msg);
    //  todos.splice(index,1);
    setTodos(todos.filter(e => {
      return e !== msg;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));

  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos.length + 1;
    }


    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log("you added ", sno, title, desc);
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])





  return (
    <>
      <Router>
        <Header title="TODO LIST" searchBar={true} />

        <Routes>
        <Route path="/" element={
          <>
          <AddTodo addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} />
        </>

        } />
        <Route path="/About" element={<About />} />
      </Routes>


        <Footer />
      </Router>
    </>



  );
}

export default App;

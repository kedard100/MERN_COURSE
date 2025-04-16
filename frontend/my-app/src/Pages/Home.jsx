import React, { useState, useEffect, useContext } from "react";
import ChangeThemeButton from "../Componets/ChnageThemeButton";
import Container from "../Componets/Container";
import { ThemeContext } from "../App";
import TodoForm from "../Componets/TodoForm";
import TodoList from "../Componets/TodoList";


function Home() {
      // const{todos,toggleTheme}=useContext(ThemeContext)
   
  return (
    <Container>
 <div     
    >
      {/* <h1>Home</h1> */}
      <TodoForm/>
      <TodoList/>
     
    </div>

    </Container>
   
  );
}

export default Home;

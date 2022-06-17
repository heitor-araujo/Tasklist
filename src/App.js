import React, { useState } from "react";
import Task from "./components/Tasks";
import './App.css';
import Tasks from "./components/Tasks";

const App = () => {
   const [tasks, setTasks] = useState([
    {
       id: '1',
       title: 'Estudar sobre react',
       completed: false,
    },
    {
        id: '2',
        title: 'ler um livro',
        completed: true,
    }
   ]);
   
   return (
    <div>
        <div className="container">
            <Tasks tasks = {tasks} />
        </div>
    </div>
   );
};

export default App;
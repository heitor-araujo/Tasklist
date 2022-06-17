import React from "react";
import Task from "./Task";

const Tasks = ({ tasks }) => {
    return (
        <>
         {tasks.map( (tasks) => (
            <Task />
         ))}
        </>
    )
};

export default Tasks;
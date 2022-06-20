import React from 'react';
import "./AddTask.css";
import Button from './Button';

const AddTask = () => {
    return ( 
        <div className="add-task-container">
            <input className= "add-task-input" type='text' />
            <div className=".add-task-button-container">
                <button className="add-button">Adicionar</button>
            </div>
        </div>
     );
}
 
export default AddTask;
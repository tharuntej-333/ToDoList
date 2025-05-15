import React, { useState } from "react";

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTasks] = useState("");

    function inputChange(event) {
        setNewTasks(event.target.value);
    }

    function addTask() {

        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTasks("");
        }

    }

    function removeTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }


    return (
        <div>
            <h1>To-Do-List</h1>

            <div>
                <input type="text" placeholder="Enter a Task" value={newTask} onChange={inputChange}></input>
                <button className="add-button" onClick={addTask}>Add</button>
                <ol>
                    {tasks.map((task, index) =>
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button className="delete-button" onClick={() => removeTask(index)}>Delete</button>
                            <button className="move-button" onClick={() => moveTaskUp(index)}>Up</button>
                            <button className="move-button" onClick={() => moveTaskDown(index)}>Down</button>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    );
}

export default ToDoList;
import LeftPortion from "./LeftPortion";
import RightPortion from "./RightPortion";
import { useState,} from "react";
import { v4 as uuidv4} from 'uuid';
uuidv4()

const Body = () => {

    const [tasks, setTasks] = useState([])

    const addTask = (newTask) => {
        setTasks([...tasks, {id : uuidv4(), description : newTask, completed : false}]); 
    }

    const clearTasks = () =>{
        setTasks([]);
    }

    const deleteTask = (id) => {
        const updated = tasks.filter(task=> task.id !== id);
        setTasks(updated)
    }

    const taskCompleted = (id) =>{
        setTasks(tasks.map(task=> task.id === id ? {...task, completed : !task.completed} : task))
    }

    const editTask = (id, editedTask) => {
        const updatedTask = tasks.map(task =>
            task.id === id ? {...task, description : editedTask} : task
        );
        setTasks(updatedTask);
    }

    return (
        <div className="body">
            <LeftPortion tasks={tasks} clearTasks={clearTasks} deleteTask={deleteTask} taskCompleted={taskCompleted} editTask={editTask}/>
            <RightPortion addTask={addTask}/>
        </div>
    )
}

export default Body;
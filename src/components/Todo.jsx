import { useState } from "react";

const Todo = ({task, deleteTask, taskCompleted, editTask}) => {

    const [isEdited, setIsEdited] = useState(false)
    const [editedTask, setEditedTask] = useState(task.description)

    const handleEdit = () => {
        setIsEdited(true);
        if(isEdited){
            task.completed = !task.completed
        }
    };

    const saveEdited = () => {
        editTask(task.id, editedTask);
        setIsEdited(false);
    }

    return (
        <div className={`todo ${task.completed ? 'completed' : ''}`}>
            <div className="todo-left">
                <input type="checkbox" id={task.id} className="custom-checkbox" checked={task.completed} onChange={()=>taskCompleted(task.id)}/>
                <label htmlFor={task.id} className="custom-label">
                    <i className="ri-checkbox-blank-line unchecked"></i>
                    <i className="ri-checkbox-fill checked"></i>
                </label>
                {isEdited ? (
                    <input className="editInput" value={editedTask} onChange={(e)=>setEditedTask(e.target.value)}/>
                ) : (
                    <p>{task.description}</p>
                )}
            </div>
            <div className="todo-right">
                {isEdited ? (
                    <button onClick={saveEdited}
                    >Save</button>
                ) : (
                    <>
                        <button onClick={handleEdit}
                        ><i className="ri-edit-line"></i></button>
                        <button onClick={()=>deleteTask(task.id)}
                        ><i className="ri-delete-bin-line"></i></button>
                    </>
                )}
                
            </div>
        </div>
    )
}

export default Todo;
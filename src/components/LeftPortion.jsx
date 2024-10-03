import 'remixicon/fonts/remixicon.css';
import Todo from './Todo';

const LeftPortion = ({tasks, clearTasks, deleteTask, taskCompleted, editTask}) => {
    return(
        <div className="left-portion">
            <div className="left-heading">
                <h1>Task List</h1>
                {tasks.length > 0 ? (
                    <button className='clearAll-btn' onClick={clearTasks}
                    ><span><i className="ri-delete-bin-line"></i></span>Clear All</button>
                ) : ('')
                }
            </div>
            <div className='todos-wrapper'>
                {tasks.length > 0 ? (
                    tasks.map(task=>(
                        <Todo key={task.id} task={task} deleteTask={deleteTask} taskCompleted={taskCompleted} editTask={editTask}/>
                    ))
                ) : (
                    <div className='noTodosMsg'>
                        <h1>No Tasks...!</h1>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default LeftPortion;
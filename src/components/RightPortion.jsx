import { useState } from "react";

const RightPortion = ({addTask}) => {
    const [inputValue, setInputValue] = useState('')

    const handleInput = (e) => {
        setInputValue(e.target.value);
    }

    const handleAddTodo = () => {
        addTask(inputValue);
        setInputValue('');
    }

    return (
        <div className="right-portion">
            <div className="right-heading">
                <h1>Get things done!</h1>
            </div>
            <div className="input-area">
                <input type="text" placeholder="What's your task?" value={inputValue} onChange={handleInput}/>
                <button onClick={handleAddTodo}>+ Add Task</button>
            </div>
        </div>
    )
}

export default RightPortion;
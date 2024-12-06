import { useState } from "react";
import { addTask } from "../state/events";
import { useUnit } from "effector-react";
import { tasksStore } from "../state/store";

const AddTaskForm = () => {

const [task, setTask] = useState('');
const tasks = useUnit(tasksStore);

    const addTaskRequest = (e) =>{
        e.preventDefault();
        if (task.trim()) {
            const newTask ={
                id: tasks.length + 1,
                text: task,
                completed: false,
            }
            addTask(newTask);
            setTask('');
        }
    }
    return(
   
            <form className="task-form"
            onSubmit={addTaskRequest}>
                <input type="text" 
                placeholder="Новая задача" 
                className="task-input"
                value={task}
                onChange={(e) => setTask(e.target.value)}/>
                <button type="submit" className="add-task-btn">Добавить</button>
            </form>

    )
}

export default AddTaskForm
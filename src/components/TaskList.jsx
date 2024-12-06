import { useUnit } from "effector-react";
import { tasksStore } from "../state/store";
import { toggleTask } from "../state/events";
import check from '../assets/check.svg';
import done from '../assets/done.svg';


const TaskList = () => {
    const tasks = useUnit(tasksStore)
    return (
        <div className="task-container">
            <h2 className="h2">Задачи</h2>
        <ul className="task-list">
            {tasks.map((task) => (
            <li 
                onClick={() => toggleTask(task.id)}
                key={task.id}
                className={`task-item ${task.completed ? "completed" : ""}`}>
                {task.text}
                {task.completed ? <img className='img' src={done}></img> : <img className='img' src={check}></img>}
            </li>
            ))}
           
        </ul>
        </div>
    );
};

export default TaskList;
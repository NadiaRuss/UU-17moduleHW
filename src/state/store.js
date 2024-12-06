import { createStore } from "effector";
import { addTask, toggleTask } from "./events";
import { fetchTasks } from "./effects";

// on указыват что с хранилищем можно произвести какое-то действие
// если будет происходить событие addTask, оно будет применену к хранилищу store
// state текущие данные в хранилище
// task - передаваемая задача
// [...state, task] - извлекаем все старые задачи и помещаем к новую
export const tasksStore = createStore([])
    .on(addTask, (state, task) => [...state, task])
    .on(toggleTask, (state, id) => 
        state.map((task) =>
        task.id === id ? { ...task, completed: !task.completed} : task)
    )
    .on(fetchTasks.doneData, (state, tasks) => tasks);
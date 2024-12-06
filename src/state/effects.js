import { createEffect } from "effector";

export const fetchTasks = createEffect(async () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve([
                { id: 1, text: 'Забрать Wildberris', completed: false},
                { id: 2, text: 'Купить молоко и хлеб', completed: false},
                { id: 3, text: 'Бассейн в 16:00', completed: false}
            ])
        }, 1000);
    })
})
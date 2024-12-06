
import './App.css'
import AddTaskForm from './components/AddTaskForm'
import TaskList from './components/TaskList';
import { useEffect } from 'react';
import { fetchTasks } from './state/effects';

const App = () => {
useEffect(() => {
  fetchTasks();
}, [])

  return (
      <div className='app-container'>
        <h1 className='h1'>To-do List on Effector</h1>
          <AddTaskForm />
          <TaskList />
      </div>
     
  
  )
}

export default App

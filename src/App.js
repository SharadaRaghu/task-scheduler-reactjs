import './App.css';
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Grocery Shopping',
      day: 'Nov 5th at 10am',
      reminder: true,
    },
    {
      id: 2,
      text: 'Study Java',
      day: 'Nov 4th at 12pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Attend zoom call-NTT',
      day: 'Oct 31st at 7pm',
      reminder: false,
    },
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random()*9999) + 1
    const newTask = {id, ...task}
    setTasks([...tasks,newTask])
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id
      ? { ...task, reminder: !task.reminder }
      : task))
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const onAddButton = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <div className='container'>
      <Header title='Task Scheduler' onAddButton={onAddButton} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ?
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
        : ( 
          'No tasks to show please add task')}
    </div>
  );
}

export default App;

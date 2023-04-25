import "./global.css"
import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { List } from "./components/List"
import { useState } from "react"

export function App() {
  const [tasksNumber, setTasksNumber] = useState(0)

  const [tasks, setTasks] = useState([])

  const [newTaskText, setNewTaskText] = useState('')

  function handleAddNewTask() {
    event.preventDefault()
    setTasks([newTaskText, ...tasks])
    setNewTaskText('')
    setTasksNumber(tasksNumber+1)
  }

  function handleNewTaskText() {
    setNewTaskText(event.target.value)
  }

  function deleteTask(taskToDelete){
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task != taskToDelete
    })
    setTasks(tasksWithoutDeletedOne)
    setTasksNumber(tasksNumber-1)
  }

  return (
    <div>
      <Header />
      <Input 
        propSubmit={handleAddNewTask} 
        propNewTaskText={newTaskText} 
        propHandleNewTaskText={handleNewTaskText} 
      />
      <List 
        tasks={tasks}
        propDeleteTask={deleteTask}
        tasksNumber={tasksNumber}
      />
    </div>
  )
}
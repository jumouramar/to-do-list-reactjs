import "./global.css"
import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { List } from "./components/List"
import { useState } from "react"

export function App() {

  const [tasks, setTasks] = useState([])

  const [newTaskText, setNewTaskText] = useState('')

  function handleAddNewTask() {
    event.preventDefault()
    setTasks([...tasks, newTaskText])
    setNewTaskText('')
  }

  function handleNewTaskText() {
    setNewTaskText(event.target.value)
  }

  return (
    <div>
      <Header />
      <Input 
        propSubmit={handleAddNewTask} 
        propNewTaskText={newTaskText} 
        propHandleNewTaskText={handleNewTaskText} 
      />
      <List tasks={tasks} />
    </div>
  )
}
import "./global.css"
import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { List } from "./components/List"
import { useState } from "react"

export function App() {

  const [tasks, setTasks] = useState([])

  function handleAddNewTask() {
    event.preventDefault()
    const taskText = event.target.taskName.value
    setTasks([...tasks, taskText])
    event.target.taskName.value = ''
  }

  return (
    <div>
      <Header />
      <Input submit={handleAddNewTask} />
      <List tasks={tasks} />
    </div>
  )
}
import "./global.css"
import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { List } from "./components/List"
import { useState } from "react"

export function App() {

  const [tasks, setTasks] = useState([])

  function handleAddNewTask() {
    event.preventDefault()
    setTasks([...tasks, tasks.length +1])
  }

  return (
    <div>
      <Header />
      <Input submit={handleAddNewTask} />
      <List tasks={tasks} />
    </div>
  )
}
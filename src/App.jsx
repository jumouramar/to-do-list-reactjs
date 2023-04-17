import "./global.css"
import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { List } from "./components/List"

export function App() {
  return (
    <div>
      <Header />
      <Input />
      <List />
    </div>
  )
}
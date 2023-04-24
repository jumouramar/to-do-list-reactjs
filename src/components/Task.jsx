import { useState } from "react"
import styles from "./Task.module.css"
import { Trash } from "phosphor-react"

export function Task({ content, propDeleteTask }) {

    const [isChecked, setIsChecked] = useState(false)

    function handleIsChecked() {
        setIsChecked(!isChecked)
    }

    function handleDeleteTask() {
        propDeleteTask(content)
    }

    return (
        <div className={styles.task}>
            <input 
                type="checkbox" 
                className="checkboxTask" 
                onChange={handleIsChecked} 
            /> 
            <p className={isChecked ? styles.cross : styles.notCross}>
                {content}
            </p>
            <button onClick={handleDeleteTask} title="Deletar tarefa" className={styles.trash}>
                <Trash size={20} />
            </button>
        </div>
    )
}
import { useState } from "react"
import styles from "./Task.module.css"
import { Trash } from "phosphor-react"

export function Task({ content, propDeleteTask, propCompletedTasksNumber, propSetCompletedTasksNumber }) {

    const [isChecked, setIsChecked] = useState(false)

    function handleIsChecked() {
        setIsChecked(!isChecked)
        if(isChecked == false) {
           propSetCompletedTasksNumber(propCompletedTasksNumber+1) 
        }
        else {
            propSetCompletedTasksNumber(propCompletedTasksNumber-1)
        }
        
    }

    function handleDeleteTask() {
        propDeleteTask(content)
        if(isChecked == true){
           propSetCompletedTasksNumber(propCompletedTasksNumber-1) 
        }
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
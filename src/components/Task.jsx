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
            <div>
                <label className={styles.checkcontainer}>
                    <input 
                        type="checkbox" 
                        onChange={handleIsChecked} 
                    /> 
                    <span className={styles.checkmark}></span> 
                </label>
                <p className={isChecked ? styles.cross : styles.notCross}>
                     {content}
                </p>
            </div>
            
            <button onClick={handleDeleteTask} title="Deletar tarefa" className={styles.trash}>
                <Trash size={17} />
            </button>
        </div>
    )
}
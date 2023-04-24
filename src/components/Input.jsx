import { Button } from "./Button"
import styles from "./Input.module.css"

export function Input({propSubmit, propNewTaskText, propHandleNewTaskText}) {
    return (
        <form onSubmit={propSubmit} className={styles.inputForm}>
            <textarea 
                name="taskName" 
                placeholder="Adicione uma nova tarefa"
                value={propNewTaskText}
                onChange={propHandleNewTaskText}
                required
            />
            <Button propNewTaskText={propNewTaskText}/>
        </form>
    )
}
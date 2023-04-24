import styles from "./Task.module.css"
import { Trash } from "phosphor-react"

export function Task({ content, propDeleteTask }) {

    function handleDeleteTask() {
        propDeleteTask(content)
    }

    return (
        <div className={styles.task}>
            <div className={styles.check}></div>
            <p>{content}</p>
            <button onClick={handleDeleteTask} title="Deletar tarefa" className={styles.trash}>
                <Trash size={20} />
            </button>
        </div>
    )
}
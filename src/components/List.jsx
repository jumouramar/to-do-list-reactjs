import styles from "./List.module.css"
import { Task } from "./Task"
import { ClipboardText } from "phosphor-react"

export function List({tasks}) {
    return(
        <div className={styles.tasks}>
            <div className={styles.info}>
                <div className={styles.createdTasks}>
                    <strong>Tarefas criadas</strong>
                    <p>0</p>
                </div>
                <div className={styles.completedTasks}>
                    <strong>Concluídas</strong>
                    <p>0</p>
                </div>
            </div>
            <div className={styles.listEmpty}>
                <ClipboardText size={56} color="#3D3D3D" weight="thin" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>

            <div className={styles.list}>
                {tasks.map(task => {
                    return <Task key={task} content={task} />
                })}
            </div>

        </div>
    )
}
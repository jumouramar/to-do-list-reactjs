import { useState } from "react"
import styles from "./List.module.css"
import { Task } from "./Task"
import { ClipboardText } from "phosphor-react"

export function List({ tasks, propDeleteTask, tasksNumber }) {

    const [completedTasksNumber, setCompletedTasksNumber] = useState(0)

    return(
        <div className={styles.tasksContainer}>
            <div className={styles.tasks}>
                <div className={styles.info}>
                    <div className={styles.createdTasks}>
                        <strong>Tarefas criadas</strong>
                        <p>{tasksNumber}</p>
                    </div>
                    <div className={styles.completedTasks}>
                        <strong>Concluídas</strong>
                        { tasks.length == 0 ?
                            (<p>0</p>)
                            :
                            (<p>{completedTasksNumber} de {tasksNumber}</p>)
                        }
                    </div>
                </div>
                { tasks.length == 0 ?
                    (<div className={styles.listEmpty}>
                        <ClipboardText size={56} color="#3D3D3D" weight="thin" />
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>)
                :
                    (<div className={styles.list}>
                        {tasks.map(task => {
                            return <Task 
                                key={task} 
                                content={task} 
                                propDeleteTask={propDeleteTask} propCompletedTasksNumber={completedTasksNumber}
                                propSetCompletedTasksNumber={setCompletedTasksNumber}
                                />
                        })}
                    </div>) 
                }
            </div>
        </div>
    )
}
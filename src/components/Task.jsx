import styles from "./Task.module.css"
import { Trash } from "phosphor-react"

export function Task({content}) {
    return (
        <div className={styles.task}>
            <div className={styles.check}></div>
            <p>{content}</p>
            <div className={styles.trash}>
                <Trash size={20} />
            </div>
        </div>
    )
}
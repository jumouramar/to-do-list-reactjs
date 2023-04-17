import styles from "./Task.module.css"
import { Trash } from "phosphor-react"

export function Task() {
    return (
        <div className={styles.task}>
            <div className={styles.check}></div>
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <div className={styles.trash}>
                <Trash size={20} />
            </div>
        </div>
    )
}
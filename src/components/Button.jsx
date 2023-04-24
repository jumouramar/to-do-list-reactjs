import styles from "./Button.module.css"
import { PlusCircle } from "phosphor-react"

export function Button({ propNewTaskText }) {
    return (
        <button disabled={propNewTaskText.length == 0} className={styles.createButton} type="submit">
            Criar
            <PlusCircle size={22}  />
        </button>
    )
}
import { Button } from "./Button"
import styles from "./Input.module.css"

export function Input({submit}) {
    return (
        <form onSubmit={submit} className={styles.inputForm}>
            <textarea placeholder="Adicione uma nova tarefa"></textarea> 
            <Button />
        </form>
    )
}
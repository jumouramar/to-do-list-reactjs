import styles from "./Input.module.css"

export function Input() {
    return (
        <form className={styles.inputForm}>
            <textarea placeholder="Adicione uma nova tarefa"></textarea> 
            <button type="submit">Criar</button>
        </form>
    )
}
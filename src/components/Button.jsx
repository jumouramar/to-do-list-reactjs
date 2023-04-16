import styles from "./Button.module.css"
import { PlusCircle } from "phosphor-react"

export function Button() {
    return (
        <button className={styles.createButton} type="submit">
            Criar
            <PlusCircle size={22}  />
        </button>
    )
}
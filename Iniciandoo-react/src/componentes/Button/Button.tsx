import styles from './Button.module.css'

function Button(){
    return(
        <button className={styles.btn}> 
            <span className={styles.title}>Meu butao</span> 
        </button>
    )
}
export default Button
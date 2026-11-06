import styles from './Button.module.css'

function Button({texto="Meu botao default" , desabilitado}){
    return(
        //<button className={styles.btn} disabled={desabilitado}> 
        <button className={ `${styles.btn}  ${desabilitado ? styles.desabilitado : ''}`} disabled={desabilitado}>
             
            <span className={styles.title}>{texto} - {desabilitado} - {typeof desabilitado}</span> 
        </button>
    )
}
export default Button
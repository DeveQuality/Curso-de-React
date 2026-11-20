import styles from './Button.module.css'                        /* importando o arquivo css */

function Button({texto="Meu botao default" , desabilitado}){        /* funcao com parametros */

    function btnClicado(){
        console.log('ola mundo tudo bem , estou aprendendo react' , texto)      
    }

    /* window.addEventListener('resize' , ()=>{
        console.log('resized')
    }) */

    return(
        //<button className={styles.btn} disabled={desabilitado}> 
        <button className={ 
            `${styles.btn}                                  /* estilo atribuido ao botao */
            ${desabilitado ? styles.desabilitado : ''}`}    /* uma condicao if else (condicao ternaria) */
            disabled={desabilitado}
            
            onClick={
                ()=>btnClicado()                            /* arrow function paro o botao criado acima  */
            }
            >
             
            {/* <span className={styles.title}>
                {texto} - 
                {desabilitado} - 
                {typeof desabilitado}
            </span>  */}

            <span className={styles.title}>
                {texto} 
            </span> 

        </button>
    )
}
export default Button
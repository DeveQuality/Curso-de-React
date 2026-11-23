import styles from './Button.module.css'                        /* importando o arquivo css */

/* window.addEventListener('resize' , ()=>{
        console.log('resized')
    }) */

function Button({texto="Meu botao default" , desabilitado , onClick}){        /* funcao com parametros */

    function btnClicado(){
        console.log('Clicado 3' , texto)  
        
        if(onClick && typeof onClick === "function"){
            onClick()
        }
    }

    return(
        //<button className={styles.btn} disabled={desabilitado}> 
        <button className={ 
            `${styles.btn}                                  /* estilo atribuido ao botao */
            ${desabilitado ? styles.desabilitado : ''}`}    /* uma condicao if else (condicao ternaria) */
            disabled={desabilitado}                            /* uma propriedade atribuida a um botao */
            
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
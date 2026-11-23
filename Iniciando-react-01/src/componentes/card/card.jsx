import Button from '../Button/Button'
import styles from  './card.module.css'

function Card({titulo ,descricao='descricao vazia'}){
    
    return(

        <div className={styles.card}>

            <h2 className={styles.title}>{titulo}</h2>

            <p>{descricao}</p> 

            <Button/>
        </div>
    )
}
export default Card
/* import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css' */

import { useState } from "react"
import Button from "./componentes/Button/Button"
import Card from "./componentes/card/card"


function App() {

  /*let contador = 0                                       criamos u contador que inicia do valor 0 */

  function incrementar(){                               /* criamos uma funcao para o botao incrementar */
   /*  contador++
    console.log('contador',contador) */                 /* controlo de fluxo o contador */

    gancho[1]( gancho[0] + 1 )                          /* neste exemplo pegamos o funcao do indice 1 , e fazemos  gancho do indice o some mais 1 */
  }

  const gancho = useState(0)                            /* o useState nos retorna dois valores (valor inicial-0 e uma funcao) */
  console.log(gancho)

  return (
    <>
        <p> Aprendendo useState</p>

      <Button  
        texto="Incrementar"   
        onClick={incrementar}
      />

      <Button  
        texto="Decrementar" 
      />

      <p> 
        contador: {gancho[0]}   {/* na tela teremos um valor com indice 0 */}
      </p>
      
      <Card  titulo={'Contador: ' + gancho[0]}/>            {/* temos uma concatenacao */}

    </>
  )
  
}

export default App

/* import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css' */

import Button from "./componentes/Button/Button"
import Card from "./componentes/card/card"


function App() {

  let contador = 0        /* criamos u contador que inicia do valor 0 */

  function incrementar(){     /* criamos uma funcao para o botao incrementar */
    contador++

    console.log('contador',contador)    /* controlo de fluxo o contador */
  }

  return (
    <>
      <Button  
        texto="Incrementariando"   
        clicando={incrementar}
      />

      <Button  
        texto="Decrementar" 
      />

      <p> 
        contador: {contador}
      </p>
      
    </>
  )
  
}

export default App

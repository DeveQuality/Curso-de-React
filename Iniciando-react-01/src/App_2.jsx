/* import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css' */

import Button from "./componentes/Button/Button"
import Card from "./componentes/card/card"




function App() {


  function buttonclicado(){
    console.log("botao clicado")
  }

  return (
    <>
      <Button  texto="Salvar 1"  desabilitado/>
      <Button  texto="Salvar 2" onclick={() => buttonclicado()} />
      <Button  desabilitado/>
      <Card titulo="te amo vida" descricao="descricao 1"/>
      <Card titulo="A vida e boa" descricao="descricao 2"/>
      <Card titulo="Eu amo programar" descricao="descricao 3"/>
    </>
  )







  
}

export default App

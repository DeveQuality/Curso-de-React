/* import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css' */

import Button from "./componentes/Button/Button"
import Card from "./componentes/card/card"




function App() {

  return (
    <>
      <Button/>
      <Button />
      <Button/>
      <Card titulo="te amo vida" descricao="descricao 1"/>
      <Card titulo="A vida e boa" descricao="descricao 2"/>
      <Card titulo="Eu amo programar" descricao="descricao 3"/>
    </>
  )
}

export default App

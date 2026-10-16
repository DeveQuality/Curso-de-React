/* import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css' */


function App() {

  let n =10
  let pessoas = ['Bernardo' , 'Arnaldo' , 'Sumbane']

  let contactos = [
    {nome:"Bene" , email:"bene@gmail.com"},
    {nome:"Joao" , email:"joao@gmail.com"},
    {nome:"Maria" , email:"maria@gmail.com"}
    
  ]

  return (
    <>
      <h1>Ola mundo</h1>

      <h2>Teste react , Estou aprendendo react praticando</h2>

      <h3>Teste de calculo  <br />
        10 x 20
      </h3>

      <p>valor : {n * 20}</p>

        
      <h1>Agora teste com uma lista</h1>

      <h2>vou carregar nomes de uma lista : </h2>

      <p>Nomes : {pessoas.join(', ')}</p>

      <div>
        {
          pessoas.map(
            (pessoas) => (
            <p>
              {pessoas}
            </p>    
          )
          )
        }  
      </div> 

      <div>
        
        <h3>Lista de contactos</h3>
        {contactos.map((contactos) => (
          <>
          <h4>{contactos.nome} --- {contactos.email}</h4>
          </>
        ))}
        
      </div>

    </>
  )
}

export default App

import { useState } from "react"
import './App.css'
import Logo from './assets/logo.png'
function App() {
  
  return (
    <>
     <div>
      <main className="container">
        <img className="logo" src={Logo} alt="logo da calculadora de gasolina ou alcool" />
        <h1 className="title" >Qual melhor opção?</h1>

        <form>
          <label>Álcool (preço por litro):</label>
          <input 
          className="input"
          placeholder="4,90"
          min='1'
          step='0.01'
          required
          type="number" />

          <label>Gasolina (preço por litro):</label>
          <input 
          className="input"
          placeholder="4,90"
          min='1'
          step='0.01'
          required
          type="number" />

          <input type="submit" className="button" value='calcular' />
        </form>
      </main>
     </div>
    </>
  )
}

export default App

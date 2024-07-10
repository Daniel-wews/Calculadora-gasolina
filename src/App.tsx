import { FormEvent, useState } from "react"
import './App.css'
import Logo from './assets/logo.png'

interface InfoProps{
  title:string;
  gasolina: string | number;
  alcool:string | number
}

function App() {
  
  const [gasolinaInput, setGasolinaInput] = useState(0)
  const [alcoolInput, setAlcoolInput] = useState(0)
  const [info, setInfo] = useState<InfoProps>()

  function calcular(event: FormEvent){
    event.preventDefault();

    let calculo = (alcoolInput / gasolinaInput)

    if(calculo <= 0.7){
      setInfo({
        title: 'Compensa usar Álcool',
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput),
      })
    }else{
      setInfo({
        title: 'Compensa usar Gasolina',
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput),
      })
    }
  }

  function formatarMoeda(valor: number){
    let valorFormatado = valor.toLocaleString('pt-br',
      {
        style:'currency',
        currency:"BRL"
      })
      return  valorFormatado
  }

  return (
    <>
     <div>
      <main className="container">
        <img className="logo" src={Logo} alt="logo da calculadora de gasolina ou alcool" />
        <h1 className="title" >Qual melhor opção?</h1>

        <form onSubmit={calcular}>
          <label>Álcool (preço por litro):</label>
          <input 
          className="input"
          placeholder="4,90"
          min='1'
          step='0.01'
          required
          type="number"
          value={alcoolInput}
          onChange={(e) => setAlcoolInput(Number(e.target.value))}
          />

          <label>Gasolina (preço por litro):</label>
          <input 
          className="input"
          placeholder="4,90"
          min='1'
          step='0.01'
          required
          type="number"
          value={gasolinaInput}
          onChange={(e) => setGasolinaInput(Number(e.target.value))}
          />

          <input type="submit" className="button" value='calcular' />
        </form>

       {info && Object.keys(info). length > 0 && (
         <section className="result">
         <h2 className="result-title">{info.title}</h2>
         <span>Álcool {info.alcool}</span>
         <span>Gasolina {info.gasolina}</span>
       </section>
       )}
      </main>
     </div>
    </>
  )
}

export default App

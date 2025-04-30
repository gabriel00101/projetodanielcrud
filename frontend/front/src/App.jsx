
import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {

const[btnCadastrar] =useState(true);
const[produtos, setProdutos] =useState([]);


  //UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/listar")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setProdutos(retorno_convertido));
  }, []);


return (    
<<<<<<< HEAD
      <div>        
        <Formulario botao={btnCadastrar}/>
        <Tabela vetor={produtos}/>
=======
      <div>
        <p>{JSON.stringify(produtos)}</p>
        <Formulario botao={btnCadastrar}/>
        <Tabela/>
>>>>>>> 99bdb9decdc39d05a010fd20233aac6e6e5b9c3e
      </div>
  )
}

export default App;

import './App.css';
import SayMyName from './Components/SayMyName';
import Pessoa from './Components/Pessoa';
import Frase  from './Components/Frase';
import List from './Components/List';

function App() {

  const nome = "Mariana"

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase/>
      <SayMyName nome="Guilherme" />
      <SayMyName nome="Marina" />
      <SayMyName nome ={nome} />
      <Pessoa 
        nome="Rodrigo" 
        idade="28" 
        profissao="Programador" 
        foto="https://via.placeholder.com/150"
        />
        <List/>
    </div>
  );
}

export default App;

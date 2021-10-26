import logo from './logo.svg';
import './App.css';
import Reloj from './componets/Saludar'


function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Reloj/>
       
      </header>
      
    </div>
  );
}

export default App;

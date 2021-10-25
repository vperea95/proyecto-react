import logo from './logo.svg';
import './App.css';
import Saludar from './componets/Saludar'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar/>
       
      </header>
      
    </div>
  );
}

export default App;

import logo from './logo_bandita.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bandita Café
        </p>
      </header>
      <div>
        <h1>MISIÓN</h1>
        <p>Proporcionar un lugar cómodo y tranquilo para dejar fluir las ideas en equipo y lograr los objetivos colectivos</p>
      </div>
      <div>
        <h1>VISIÓN</h1>
        <p>Lograr que los meetings sean todo menos tediosos y aburridos</p>
      </div>
    </div>
  );
}

export default App;

import logo from './logo_bandita.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p className="eslogan">"El lugar ideal para tus co-meetings"</p>
      <div>
        <h1>MISIÓN</h1>
        <p>Proporcionar un lugar cómodo y tranquilo para dejar fluir las ideas en equipo y lograr los objetivos colectivos</p>
      </div>
      <div>
        <h1>VISIÓN</h1>
        <p>Lograr que los meetings sean todo menos tediosos y aburridos</p>
      </div>
      <div>
        <h1>VALORES</h1>
          <div className="valores">
            <p>Transparencia</p>
            <p>Pasión</p>
            <p>Claridad</p>
            <p>Responsabipdad</p>
            <p>Escucha</p>
            <p>Puntuapdad</p>
            <p>Lealtad</p>
          </div>
      </div>
    </div>
  );
}

export default App;

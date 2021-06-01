import logo from './logo.svg';
import './App.css';
import MapView from './Map';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload, Zeze!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <MapView></MapView>
      </header>
    </div>
  );
}

export default App;

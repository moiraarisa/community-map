import './App.css';
import MapView from './Map';


function App() {
  return (
    <div className="App">
      <header className="App-header">
     
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          community map
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        
      </header>
      <div>
        <MapView></MapView>
      </div>
    </div>
  );
}

export default App;

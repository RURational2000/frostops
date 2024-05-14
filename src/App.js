import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          FrostOps
        </h1>
        <p>
          Provider of well thought out, engineered solutions
        </p>
        <button onClick={() => window.location = 'mailto:info@frost-ops.com'}>Contact us</button>
      <ul>
          <li>
            <a href="/add-on">BTS-600 Add on features</a>
          </li>
          <li>
            <a href="/canva">Custom canva pages</a>
          </li>
        </ul>
    
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

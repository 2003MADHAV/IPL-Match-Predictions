import logo from './images/ipl-logo.png'; // Import the IPL logo
import './App.css';
import PredictionForm from './components/PredictionForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>IPL 2025 Winner Prediction</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <PredictionForm />
      <h2 className="designer">
  Design By <a href="https://github.com/2003MADHAV" target="_blank" rel="noopener noreferrer">Madhav Kumar</a>
</h2>

    </div>
    
  );
}

export default App;

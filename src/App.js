import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">Dictionary App</header>
        <a href="#" className="btn btn-primary shadow">
          Search
        </a>
        <Dictionary />
      </div>
    </div>
  );
}

export default App;

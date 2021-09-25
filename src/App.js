import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">Dictionary App</header>
        <Dictionary />
        <div>
          Open-source{" "}
          <a
            href="https://github.com/louiseuna/dictionary-react-app"
            target="_blank"
            rel="noreferrer"
          >
            code
          </a>{" "}
          by Louise Dicks
        </div>
      </div>
    </div>
  );
}

export default App;

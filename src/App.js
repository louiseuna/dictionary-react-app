import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary />
        <footer>
          Open-source{" "}
          <a
            href="https://github.com/louiseuna/dictionary-react-app"
            target="_blank"
            rel="noreferrer"
          >
            code
          </a>{" "}
          by Louise Dicks
        </footer>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Totally Radical Weather App</h1>
        <Weather />
        <footer>
          <a
            href="https://github.com/meageliz/totally-radical-weather-app"
            target="_blank"
            rel="no-referrer"
          >
            Open-source code
          </a>{" "}
          created by Meag Gardner
        </footer>
      </div>
    </div>
  );
}

export default App;

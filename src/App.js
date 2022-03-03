import "./App.css";
import Weather from "./Weather";
import CoderCred from "./CoderCred";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <CoderCred />
      </div>
    </div>
  );
}

export default App;

import './App.css'
import StopWatch from "./Components/StopWatch/StopWatch";
import Counter from "./Components/Counter/Counter";

function App() {
  return (
      <div className="App">
        <StopWatch />
          {<Counter/>}
      </div>
  );
}

export default App;
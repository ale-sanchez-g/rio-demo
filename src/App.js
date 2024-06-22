import "./App.css";
import { useFlags } from "launchdarkly-react-client-sdk";
import Toggle from "./components/Toggle"; // Import the Toggle component

function App() {
  const { trunkBaseDev, reactExample } = useFlags();

  return (
    <div className="App">
      <header
        className="App-header"
        id="App-header"
        style={{ backgroundColor: trunkBaseDev ? "#00844B" : "#373841" }}
      >
        <p>
          The <b>trunk-base-dev</b> feature flag evaluates to{" "}
          <b>{trunkBaseDev ? "True" : "False"}</b>
        </p>
        {trunkBaseDev ? (
          <button
            className="funButton"
            id="tbd"
            onClick={() => console.log("Button clicked!")}
          >
            Click Me
          </button>
        ) : null}
        {reactExample ? <Toggle /> : null}
        <b>{reactExample ? "show-toggle" : "no-show-toggle"}</b>
      </header>
    </div>
  );
}

export default App;

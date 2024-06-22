import './App.css';
import { useFlags } from 'launchdarkly-react-client-sdk';

function App() {
  const { trunkBaseDev } = useFlags();

  return (
      <div className="App">
      <header className="App-header" id="App-header" style={{ backgroundColor: trunkBaseDev ? '#00844B' : '#373841' }}>
        <p>The trunkBaseDev feature flag evaluates to <b>{trunkBaseDev ? 'True' : 'False'}</b></p>
        {trunkBaseDev ? (<button class="funButton" id="tbd" onClick={() => console.log('Button clicked!')}>Click Me</button>) : null}
      </header>
    </div>
  );
}

export default App;
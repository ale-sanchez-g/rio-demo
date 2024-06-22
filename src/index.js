import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';
import reportWebVitals from './reportWebVitals';

(async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: '667366e5097a4c10009b193d',
    context: {
      kind: 'user',
      key: 'example-user-key',
      name: 'Alejandro',
    },
  });


  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
    <LDProvider>
      <App />
    </LDProvider>
    </React.StrictMode>,
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
})();

import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';

const App: FunctionComponent = ({}) => {
  return <h1>Checkout App from React</h1>;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

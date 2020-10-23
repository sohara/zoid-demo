import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { CheckoutComponent } from '../shared/zoid-checkout';

CheckoutComponent();

const App: FunctionComponent = (props) => {
  console.log({ props });
  return <h1>Checkout App from React</h1>;
};

// @ts-ignore
const props = window.xprops;
ReactDOM.render(
  <React.StrictMode>
    <App {...props} />
  </React.StrictMode>,
  document.getElementById('root')
);

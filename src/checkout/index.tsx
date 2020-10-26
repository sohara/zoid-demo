import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { CheckoutComponent } from '../shared/zoid-checkout';

CheckoutComponent;
console.log({ CheckoutComponent });

const checkoutInstance = CheckoutComponent();
console.log({ checkoutInstance });
checkoutInstance.event.on('hello', () => {
  console.log('got hello');
});

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

import React, { FunctionComponent, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { CheckoutComponent } from '../shared/zoid-checkout';
import { Modal } from './components/Modal';
import './style.css';

CheckoutComponent;

type Props = Record<string, any>;

type Xprops = {
  showContainer: (id: string) => void;
  hideContainer: (id: string) => void;
  onApproved: (transactionID: string) => void;
  options: Record<string, any>;
  uid: string;
  onProps: (props: Props) => void;
};
interface Window {
  xprops: Xprops;
}

declare var window: Window;

function useXProps() {
  const [xProps, setXProps] = useState(window.xprops);
  useEffect(() => {
    window.xprops.onProps((props: Xprops) => {
      setXProps({ ...props });
    });
  }, []);
  return xProps;
}

const App: FunctionComponent = () => {
  const props = useXProps();
  useEffect(() => {
    console.log({ props });
    props.showContainer(props.uid);
  }, []);
  return (
    <Modal close={() => props.hideContainer(props.uid)}>
      <h1 className="text-2xl font-bold mb-4">Checkout App from React</h1>
      <p className="mb-4">
        Checking out with {props.options.item} - {props.options.price}
      </p>
      <button
        onClick={() => props.onApproved('sdfsdhfsdgsd')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Authorize
      </button>
    </Modal>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

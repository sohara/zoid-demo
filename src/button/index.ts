import { ButtonComponent as ZoidButtonComponent } from '../shared/zoid-button';
import { CheckoutComponent } from '../shared/zoid-checkout';
import './style.css';

ZoidButtonComponent;

type Xprops = {
  showContainer: (id: string) => void;
  hideContainer: (id: string) => void;
  onApproved: (transactionID: string) => void;
  options: Record<string, any>;
};
interface Window {
  xprops: Xprops;
  parent: HTMLDocument;
}

declare const window: Window;

function buttonComponent() {
  const element = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const btn = document.createElement('button');

  let checkoutContainerId: string;

  const checkoutInstance = CheckoutComponent({
    showContainer(id: string) {
      console.log('CheckoutComponent showContainer called', id);
      checkoutContainerId = id;
      window.xprops.showContainer(id);
    },
    hideContainer(id: string) {
      console.log('CheckoutComponent showContainer called', id);
      window.xprops.hideContainer(id);
    },
    options: window.xprops.options,
    onApproved: window.xprops.onApproved,
  });

  let checkoutInstanceRendered = false;

  btn.innerHTML = 'Apply for financing';
  btn.className =
    'bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded';
  btn.onclick = () => {
    console.log('Button clicked in child');
    if (!checkoutInstanceRendered) {
      checkoutInstance.renderTo(window.parent, 'body').then(() => {
        console.log('rendered');
      });
      checkoutInstanceRendered = true;
    } else {
      window.xprops.showContainer(checkoutContainerId);
    }
    console.log({ checkoutInstance });
  };

  element.appendChild(h1);
  element.appendChild(p);
  element.appendChild(btn);

  return element;
}

document.body.appendChild(buttonComponent());

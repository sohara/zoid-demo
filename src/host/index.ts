import { ButtonComponent } from '../shared/zoid-button';
import { CheckoutComponent } from '../shared/zoid-checkout';
CheckoutComponent;

import './style.css';

type CheckoutOptions = {
  item: string;
  price: number;
  onApproved: (transactionID: string) => void;
};

type BreadFinance = {
  checkout: (options: CheckoutOptions) => void;
  options: CheckoutOptions;
};

interface Window {
  breadFinance: BreadFinance;
}

declare var window: Window;

function setupBreadGlobal() {
  const breadFinance = window.breadFinance || {};
  window.breadFinance = breadFinance;
  breadFinance.checkout = (options) => {
    breadFinance.options = options;
  };
}

setupBreadGlobal();

function showContainer(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = 'block';
  }
}

function hideContainer(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = 'none';
  }
}

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  const zoidButtonContainer = document.createElement('div');
  const zoidCheckoutContainer = document.createElement('div');

  zoidButtonContainer.id = 'zoid-button-container';
  zoidCheckoutContainer.id = 'zoid-checkout-container';

  element.appendChild(btn);
  element.appendChild(zoidButtonContainer);
  element.appendChild(zoidCheckoutContainer);

  return element;
}

document.addEventListener('DOMContentLoaded', () => {
  const buttonContainer =
    document.querySelector('div#bread-button-container') || document.body;
  buttonContainer.appendChild(component());

  const buttonInstance = ButtonComponent({
    foo: 'bar',
    showContainer,
    hideContainer,
    options: window.breadFinance.options,
    onApproved: window.breadFinance.options.onApproved,
  });

  buttonInstance.render('#zoid-button-container');
});

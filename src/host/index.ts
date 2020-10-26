import { ButtonComponent } from '../shared/zoid-button';
import { CheckoutComponent } from '../shared/zoid-checkout';
CheckoutComponent;

import './style.css';

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

const buttonContainer =
  document.querySelector('div#bread-button-container') || document.body;
buttonContainer.appendChild(component());

const buttonInstance = ButtonComponent({
  foo: 'bar',
  onInteraction: (val: string) => {
    console.log(`Interaction from child button component: ${val}`);
  },
});

buttonInstance.render('#zoid-button-container');

// CheckoutComponent({
//   foo: 'bar',
//   onInteraction: (val: string) => {
//     console.log(`Interaction from child checkout component: ${val}`);
//   },
// }).render('#zoid-checkout-container');

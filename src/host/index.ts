import { ButtonComponent } from '../shared/zoid-button';
import { CheckoutComponent } from '../shared/zoid-checkout';

import './style.css';
import { printMe } from './print';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  const zoidButtonContainer = document.createElement('div');
  const zoidCheckoutContainer = document.createElement('div');

  element.innerHTML = 'Hello Webpack';
  element.classList.add('hello');

  btn.innerHTML = 'Click me';
  btn.onclick = printMe;

  zoidButtonContainer.id = 'zoid-button-container';
  zoidCheckoutContainer.id = 'zoid-checkout-container';

  element.appendChild(btn);
  element.appendChild(zoidButtonContainer);
  element.appendChild(zoidCheckoutContainer);

  return element;
}

document.body.appendChild(component());

const buttonInstance = ButtonComponent({
  foo: 'bar',
  onInteraction: (val: string) => {
    console.log(`Interaction from child button component: ${val}`);
  },
});

buttonInstance.render('#zoid-button-container');

CheckoutComponent({
  foo: 'bar',
  onInteraction: (val: string) => {
    console.log(`Interaction from child checkout component: ${val}`);
  },
}).render('#zoid-checkout-container');

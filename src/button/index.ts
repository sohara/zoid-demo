import { ButtonComponent as ZoidButtonComponent } from '../shared/zoid-button';
import { CheckoutComponent } from '../shared/zoid-checkout';
import './style.css';
ZoidButtonComponent;

function buttonComponent() {
  const element = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const btn = document.createElement('button');

  // @ts-ignore
  // p.innerHTML = `Value of foo from parent: ${window.xprops.foo}`;

  const checkoutInstance = CheckoutComponent({
    foo: 'bar',
    onInteraction: (val: string) => {
      console.log(`Interaction from child checkout component: ${val}`);
    },
  });

  checkoutInstance.renderTo(window.parent, 'body');

  btn.innerHTML = 'Apply for financing';
  btn.className =
    'bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded';
  btn.onclick = () => {
    console.log('Button clicked in child');
    // @ts-ignore
    window.xprops.onInteraction('blah');
    checkoutInstance.event.trigger('hello', 'stuff');
  };

  element.appendChild(h1);
  element.appendChild(p);
  element.appendChild(btn);

  return element;
}

document.body.appendChild(buttonComponent());

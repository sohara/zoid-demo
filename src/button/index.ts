import { ButtonComponent as ZoidButtonComponent } from '../shared/zoid-button';
ZoidButtonComponent();

function buttonComponent() {
  const element = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const btn = document.createElement('button');

  h1.innerHTML = 'Button Iframe';
  // @ts-ignore
  p.innerHTML = `Value of foo from parent: ${window.xprops.foo}`;

  btn.innerHTML = 'Click me';
  btn.onclick = () => {
    console.log('Button clicked in child');
    // @ts-ignore
    window.xprops.onInteraction('blah');
  };

  element.appendChild(h1);
  element.appendChild(p);
  element.appendChild(btn);

  return element;
}

document.body.appendChild(buttonComponent());

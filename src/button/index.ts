function buttonComponent() {
  const element = document.createElement('div');
  const h1 = document.createElement('h1');
  const btn = document.createElement('button');

  h1.innerHTML = 'Button Iframe';

  btn.innerHTML = 'Click me';
  btn.onclick = () => {
    console.log('Button clicked');
  };

  element.appendChild(h1);
  element.appendChild(btn);

  return element;
}

document.body.appendChild(buttonComponent());

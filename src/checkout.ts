function checkoutComponent() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  btn.innerHTML = 'Click me';
  btn.onclick = () => {
    console.log('Button clicked');
  };

  element.appendChild(btn);

  return element;
}

document.body.appendChild(checkoutComponent());

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello Webpackz';
  return element;
}

document.body.appendChild(component());

import * as zoid from 'zoid/dist/zoid.frameworks';

const CLASS = {
  VISIBLE: 'zoid-visible',
  INVISIBLE: 'zoid-invisible',
};

const { EVENT } = zoid;

interface ContainerTemplateArg {
  uid: string;
  doc: HTMLDocument;
  frame: HTMLElement;
  prerenderFrame: HTMLElement;
  props: Record<string, string>;
  event: Record<
    string,
    (event: string, callback: (props: any) => void) => void
  >;
  dimensions: Record<string, string>;
}

export const CheckoutComponent = zoid.create({
  tag: 'checkout-component',
  url: 'http://localhost:8080/checkout',
  props: {
    showContainer: {
      type: 'function',
    },
    hideContainer: {
      type: 'function',
    },
    options: {
      type: 'object',
    },
    onApproved: {
      type: 'function',
    },
  },
  containerTemplate: function ({
    uid,
    frame,
    prerenderFrame,
    doc,
    props,
    event,
    dimensions: { width, height },
    ...rest
  }: ContainerTemplateArg): HTMLElement {
    console.log({ rest });
    const div = doc.createElement('div');
    div.setAttribute('id', uid);
    div.addEventListener('click', () => console.log('hello'));
    prerenderFrame.addEventListener('click', () => console.log('hello'));
    const style = doc.createElement('style');
    if (props.cspNonce) {
      style.setAttribute('nonce', props.cspNonce);
    }

    style.appendChild(
      doc.createTextNode(`
            #${uid} {
                display: none;
            }
            #${uid} > iframe {
                display: block;
                position: fixed;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                transition: opacity .2s ease-in-out;
                z-index: 21111;
            }
            #${uid} > iframe.${CLASS.INVISIBLE} {
                opacity: 0;
            }
            #${uid} > iframe.${CLASS.VISIBLE} {
                opacity: 1;
        }
        `)
    );

    div.appendChild(frame);
    div.appendChild(prerenderFrame);
    div.appendChild(style);

    prerenderFrame.classList.add(CLASS.VISIBLE);
    frame.classList.add(CLASS.INVISIBLE);

    event.on(EVENT.RENDERED, () => {
      prerenderFrame.classList.remove(CLASS.VISIBLE);
      prerenderFrame.classList.add(CLASS.INVISIBLE);

      frame.classList.remove(CLASS.INVISIBLE);
      frame.classList.add(CLASS.VISIBLE);

      setTimeout(() => {
        prerenderFrame?.parentNode?.removeChild(prerenderFrame);
      }, 1);
    });

    event.on(EVENT.RESIZE, ({ width: newWidth, height: newHeight }) => {
      if (typeof newWidth === 'number') {
        div.style.width = toCSS(newWidth);
      }

      if (typeof newHeight === 'number') {
        div.style.height = toCSS(newHeight);
      }
    });

    return div;
  },
});

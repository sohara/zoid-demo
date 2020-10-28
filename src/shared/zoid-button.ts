import * as zoid from 'zoid/dist/zoid.frameworks';

export const ButtonComponent = zoid.create({
  tag: 'button-component',
  url: 'http://localhost:8080/button',
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
});

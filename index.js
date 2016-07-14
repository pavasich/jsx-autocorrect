module.exports = function jsxAutocorrect() {
  return {
    visitor: {
      JSXIdentifier: {
        exit: function jsxAutocorrect__exit(a) {
          switch (a.node.name) {
            case 'class':
              a.node.name = 'className';
              break;
            case 'enable-background':
              a.node.name = 'enableBackground';
              break;
            case 'for':
              a.node.name = 'htmlFor';
              break;
          }
        },
      },
    },
  };
};

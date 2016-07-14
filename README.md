# jsx-autocorrect

A babel plugin that enables you to use `class`, `for`, and `enable-background` as jsx attributes. Go nuts!

### Example
```html
<input class="camouflage" name="cuttlefish" ... />
<label for="cuttlefish">
    <svg viewBox="0 0 25 25" enable-background="new 0 0 25 25">
        ...
```
Transpiled:
```html
<input className="camouflage" name="cuttlefish" ... />
<label htmlFor="cuttlefish">
    <svg viewBox="0 0 25 25" enableBackground="new 0 0 25 25">
        ...
```

### Install

```
npm install --save-dev jsx-autocorrect
```

with .babelrc:
```json
{
  "presets": ["es2015", "react"],
  "plugins": ["jsx-autocorrect"]
}
```

with webpack
```js
module.exports = { 
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel',
        query: {
          plugins: ['jsx-autocorrect'],
        },
      },
    ],
  },
  ...
}
```

Feel free to suggest any additions!

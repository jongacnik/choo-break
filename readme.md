<h1 align="center">choo-break</h1>

<div align="center">
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square" alt="Stability" />
  </a>
  <a href="https://www.npmjs.com/package/choo-break">
    <img src="https://img.shields.io/npm/v/choo-break.svg?style=flat-square" alt="NPM version" />
  </a>
</div>

<br />

Trigger re-renders at breakpoints

## Usage:

```js
var choo = require('choo')
var html = require('choo/html')
var choobreak = require('choo-break')

var app = choo()
app.use(choobreak())
app.route('/', function (state, emit) {
  return html`<body>${state.breakpoint}</body>`
})
app.mount('body')
```

## API

### `plugin = choobreak(breakpoints, render)`

- `breakpoints` desired breakpoints
- `render` should app re-render on breakpoint change

```js
choobreak({
  xs: 0,
  sm: 768,
  md: 1024,
  lg: 1280
}, true)
```

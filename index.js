var breakjs = require('breakjs')
var x = require('xtend')

module.exports = plugin

function plugin (breakpoints, render) {
  breakpoints = x({
    xs: 0,
    sm: 768,
    md: 1024,
    lg: 1280
  }, breakpoints)

  render = render === undefined
    ? true
    : render

  return function (state, emitter) {
    var layout = breakjs(breakpoints)

    state.breakpoint = layout.current()
    
    layout.addChangeListener(function (breakpoint) {
      state.breakpoint = breakpoint
      if (render) emitter.emit('render')
    })
  }
}

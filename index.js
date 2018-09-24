var breakjs = require('breakjs')

module.exports = plugin

function plugin (breakpoints, render) {
  breakpoints = breakpoints || {
    xs: 0,
    sm: 768,
    md: 1024,
    lg: 1280
  }

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

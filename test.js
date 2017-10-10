// var test = require('tape')
var choo = require('choo')
var html = require('choo/html')
var choobreak = require('.')

var app = choo()
app.use(choobreak())
app.route('/', function (state, emit) {
  return html`<body>${state.breakpoint}</body>`
})
app.mount('body')

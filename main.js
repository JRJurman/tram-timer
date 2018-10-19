const Tram = require('tram-one')
require("babel-polyfill")

window.engine = {}
const app = new Tram({
  webEngine: window.engine
})
app.addRoute('/', require('./pages/home'))
app.addRoute('/404', require('./pages/404'))
app.addActions({
  canPush: require('./actions/canPush'),
  push: require('./actions/push')
})
app.addActions({
  scroller: require('./actions/scroller'),
  timer: require('./actions/timer'),
  ticker: require('./actions/ticker'),
  clock: require('./actions/clock'),
})
app.start('.main')

// app.addListener((store, actions, actionName, actionArg) => {
//   console.log(actionName, actionArg)
// })

app.engine.actions.requestPermission()

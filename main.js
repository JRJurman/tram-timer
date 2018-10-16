const Tram = require('tram-one')
require("babel-polyfill")

const app = new Tram()
app.addRoute('/', require('./pages/home'))
app.addRoute('/404', require('./pages/404'))
app.addActions({
  canPush: require('./actions/canPush'),
  push: require('./actions/push')
})
app.addActions({
  scroller: require('./actions/scroller'),
  timer: require('./actions/timer')
})
app.start('.main')

app.engine.actions.requestPermission()

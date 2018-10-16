const Tram = require('tram-one')
const html = Tram.html({
  'timer-button': require('../elements/timer-button'),
  'tick-wheel': require('../elements/tick-wheel'),
  'scroll-control': require('../elements/scroll-control')
})

module.exports = (store, actions) => {
  const triggerPush = (title) => () => {
    actions.notification({title, body: 'Timer Ended'});
  }

  const disabledstate = store.canPush === 'granted' ? '' : 'disabled'

  const scrollStyle = `
    height: 100px;
    border: solid;
  `

  const wheelStyle = `
    position: fixed;
    bottom: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    max-width: 800px;
  `

  const minutesControlStyle = `
    position: fixed;
    bottom: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    // color: rgb(0,0,0,0);
  `

  const secondsControlStyle = `
    position: fixed;
    bottom: 0;
    left: 0;
    height: 70vh;
    width: 70vh;
    max-width: 70vw;
    // color: rgb(0,0,0,0);
  `

  const timeValue = `${store.timer.minutes}:${store.timer.seconds}`

  return html`
    <div>
      <tick-wheel style=${wheelStyle} time=${timeValue} outerwheel=${store.scroller.minuteScroll} innerwheel=${store.scroller.secondScroll} />
      <scroll-control setscroll=${actions.setMinuteScroll} style=${scrollStyle} style=${minutesControlStyle} />
      <scroll-control setscroll=${actions.setSecondScroll} style=${scrollStyle} style=${secondsControlStyle} />
    </div>
  `
}

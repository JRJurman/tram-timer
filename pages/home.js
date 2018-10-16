const Tram = require('tram-one')
const html = Tram.html({
  'timer-button': require('../elements/timer-button'),
  'tick-wheel': require('../elements/tick-wheel'),
  'scroll-control': require('../elements/scroll-control')
})

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
`

const secondsControlStyle = `
  position: fixed;
  bottom: 0;
  left: 0;
  height: 70vh;
  width: 70vh;
  max-width: 70vw;
`

const buttonStyle = `
  position: fixed;
  top: 0;
  right: 0;
`

module.exports = (store, actions) => {
  const triggerPush = () => {
    actions.startTimer(200)
  }

  const disabledstate = store.canPush === 'granted' ? '' : 'disabled'

  const timeValue = `${store.timer.minutes}:${store.timer.seconds}`

  return html`
    <div>
      <tick-wheel style=${wheelStyle} time=${timeValue} outerwheel=${store.scroller.minuteScroll} innerwheel=${store.scroller.secondScroll} />
      <scroll-control class="minute-scroll" setscroll=${actions.setMinuteScroll} style=${minutesControlStyle} />
      <scroll-control class="second-scroll" setscroll=${actions.setSecondScroll} style=${secondsControlStyle} />
      <timer-button triggerpush=${triggerPush} style=${buttonStyle} ${disabledstate} delay=0>Start</timer-button>
    </div>
  `
}

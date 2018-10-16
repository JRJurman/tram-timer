module.exports = {
  init: () => ({seconds: 0, minutes: 0}),
  setSecondScroll: (timer, secondScroll) => Object.assign({}, timer, {seconds: Math.floor(secondScroll/6)}),
  setMinuteScroll: (timer, minuteScroll) => Object.assign({}, timer, {minutes: Math.floor(minuteScroll/6)}),
  decrementSecond: (timer, _, actions) => {
    if (timer.seconds === 0 && timer.minutes === 0) {
      actions.notification({title: "Timer Ended!", body: 'Timer Ended'});
      actions.pauseTimer()
    }
    if (timer.seconds === 0 && timer.minutes !== 0) actions.decrementMinute()
    return timer
  }
}

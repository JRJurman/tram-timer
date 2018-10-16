module.exports = {
  init: () => null,
  pauseTimer: (ticker) => {
    clearInterval(ticker)
    return null
  },
  startTimer: (ticker, delay, actions) => {
    return setInterval(actions.tick, delay)
  }
}

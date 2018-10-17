module.exports = {
  init: () => new Date(),
  startTimer: () => new Date(),
  tick: (lastTime, _, actions) => {
    const newTime = new Date()
    if ((newTime - lastTime) > 1000) {
      // TODO - investigate why we might not log sub functions
      // TODO - make pause button
      // TODO - look at web workers here: https://github.com/Pjaerr/PWA-Timer
        actions.decrementSecond()
      return newTime
    }
    return lastTime
  }
}

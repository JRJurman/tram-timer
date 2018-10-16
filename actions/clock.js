module.exports = {
  init: () => new Date(),
  startTimer: () => new Date(),
  tick: (lastTime, _, actions) => {
    const newTime = new Date()
    if ((newTime - lastTime) > 1000) {
      actions.decrementSecond()
      return newTime
    }
    return lastTime
  }
}

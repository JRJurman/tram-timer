module.exports = {
  init: () => ({secondScroll: 0, minuteScroll: 0}),
  setSecondScroll: (scroll, secondScroll) => Object.assign({}, scroll, {secondScroll: secondScroll}),
  setMinuteScroll: (scroll, minuteScroll) => Object.assign({}, scroll, {minuteScroll: minuteScroll}),
}

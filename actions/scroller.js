module.exports = {
  init: () => ({secondScroll: 0, minuteScroll: 0}),
  setSecondScroll: (scroll, secondScroll) => Object.assign({}, scroll, {secondScroll: secondScroll}),
  setMinuteScroll: (scroll, minuteScroll) => Object.assign({}, scroll, {minuteScroll: minuteScroll}),

  // I dislike this, but because we can't set scroll on a DOM element
  // we change it here by className (which will trigger the appropriate scroll triggers)
  decrementSecond: (scroll) => {
    const secondScrollControl = document.querySelector('.scroll-control.second-scroll')
    secondScrollControl.scrollBy({behavior: 'smooth', top: -20}) // defined in scroll-control element
    return scroll
  },
  decrementMinute: (scroll) => {
    const minuteScrollControl = document.querySelector('.scroll-control.minute-scroll')
    minuteScrollControl.scrollBy({behavior: 'smooth', top: -20}) // defined in scroll-control element
    const secondScrollControl = document.querySelector('.scroll-control.second-scroll')
    secondScrollControl.scrollBy({behavior: 'smooth', top: 20*59}) // reset the seconds to 60
    return scroll
  }
}

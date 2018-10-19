const Tram = require('tram-one')
const html = Tram.html()

const height = 20 // change value in scroller.js

module.exports = (attrs) => {
  const containerStyle = `
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    ${attrs.style || ''}
  `

  const loopScroll = event => attrs.setscroll(event.currentTarget.scrollTop*(6/height))

  const options = [...Array(90).keys()]
    .map(() => html`<div />`)

  return html`
    <div>
      <style>
        .scroll-control div {
          scroll-snap-align: start;
          height: ${height}px;
          display: block;
          text-align: right;
        }
      </style>
      <div class="scroll-control ${attrs.className || ''}" style=${containerStyle} onscroll=${loopScroll}>
        ${options}
      </div>
    </div>
  `
}

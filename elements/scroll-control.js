const Tram = require('tram-one')
const html = Tram.html()

module.exports = (attrs) => {
  const height = 20 // change value in the styles.css as well
  const containerStyle = `
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    ${attrs.style || ''}
  `

  const options = [...Array(120).keys()]
    .map(option => html`<div />`)

  const loopScroll = event => {
    console.log(event.currentTarget.scrollTop)
    attrs.setscroll(event.currentTarget.scrollTop*(6/height))
  }

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
      <div class="scroll-control" style=${containerStyle} onscroll=${loopScroll}>
        ${options}
      </div>
    </div>
  `
}

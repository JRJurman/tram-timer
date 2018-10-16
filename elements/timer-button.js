const Tram = require('tram-one')
const html = Tram.html()

module.exports = (attrs, children) => {
  const delayedPush = event => {
    setTimeout(attrs.triggerpush, attrs.delay*1000)
  }
  const buttonStyle = `
    font-size: 3em;
    border-radius: 0.4em;
    margin: 0.4em;
  `
  const disabled = attrs.disabled ? 'disabled' : ''
  return html`
    <button style=${buttonStyle} onclick=${delayedPush} ${disabled}>
      ${children}
    </button>
  `
}

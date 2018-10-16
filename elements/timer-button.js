const Tram = require('tram-one')
const html = Tram.html()

module.exports = (attrs, children) => {
  const buttonStyle = `
    font-size: 10vh;
    height: 13vh;
    border-radius: 0.4em;
    margin: 0.4em;
    font-family: inherit;
    outline: none;
    background: orange;
    color: white;
    ${attrs.style || ''}
  `
  const disabled = attrs.disabled ? 'disabled' : ''
  return html`
    <button style=${buttonStyle} onclick=${attrs.triggerpush} ${disabled}>
      ${children}
    </button>
  `
}

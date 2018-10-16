const Tram = require('tram-one')
const html = Tram.html()

module.exports = (attrs, children) => {
  const buttonStyle = `
    font-size: 10vh;
    line-height: 14vh;
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
      <div style="margin-top: -0.2em;">${children}</div>
    </button>
  `
}

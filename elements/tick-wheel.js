const Tram = require('tram-one')
const svg = Tram.svg({
  tick: require('./tick')
})

module.exports = (attrs, children) => {

  const tickStyle = degree => `
    transform-origin: bottom left;
    transform: rotate(${degree}deg);
  `

  // build outer ticks (wider, further from the center)
  const outerTicks = [...Array(60).keys()]
    .map(tick => tick*6)
    .map(tick => svg`<tick tick=${tick} size="large" rotation=${attrs.outerwheel} />`)

  // build inner ticks (thinner, closer to the center)
  const innerTicks = [...Array(60).keys()]
    .map(tick => tick*6)
    .map(tick => svg`<tick tick=${tick} size="small" rotation=${attrs.innerwheel} />`)

  const selectTicks = [
    svg`<rect x="84" y="97" width="12" height="6" rx="3" ry="3" stroke="grey" fill="white" style=${tickStyle(-30)} />`,
    svg`<rect x="59" y="98" width="12" height="4" rx="3" ry="3" stroke="grey" fill="white" style=${tickStyle(-30)} />`
  ]

  const selectLine = svg`<rect x="0" y="100" width="200" height="0.5" stroke="grey" fill="none" style=${tickStyle(-30)} />`

  const setTime = svg`<text x="5" y="95">${attrs.time}</text>`

  return svg`
    <svg viewBox="0 0 100 100" style=${attrs.style} preserveAspectRatio="xMinYMid meet">
      <!-- ${selectLine} -->
      ${selectTicks}
      <g style=${tickStyle(-attrs.outerwheel)}>
        ${outerTicks}
      </g>
      <g style=${tickStyle(-attrs.innerwheel)}>
        ${innerTicks}
      </g>
      ${setTime}
    </svg>
  `
}

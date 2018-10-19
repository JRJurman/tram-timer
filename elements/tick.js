const Tram = require('tram-one')
const svg = Tram.svg()

const sizes = {
  "small": {
    x: 60, y: 99, rx: 2, ry: 2,
    width: 10, height: 2
  },
  "large": {
    x: 85, y: 98, rx: 2, ry: 2,
    width: 10, height: 4
  }
}

const tickStyle = degree => `
  transform-origin: bottom left;
  transform: rotate(${degree}deg);
`

const tickColor = ((tick, rotation) => {
  if (264 < tick && tick < 330 && rotation < 60) {
    return 'grey'
  }
  if ((tick % 5) === 0) {
    return 'orange'
  }
  return 'black'
})

module.exports = (attrs, children) => {
  const tick = parseInt(attrs.tick)

  const color = tickColor(tick, attrs.rotation)

  return svg`
    <rect
      x=${sizes[attrs.size].x} y=${sizes[attrs.size].y}
      rx=${sizes[attrs.size].rx} ry=${sizes[attrs.size].ry}
      width=${sizes[attrs.size].width} height=${sizes[attrs.size].height}
      fill=${color} style=${tickStyle(tick)}
    />
  `
}

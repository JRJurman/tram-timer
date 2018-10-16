const Tram = require('tram-one')
const svg = Tram.svg()

module.exports = (attrs, children) => {
  const tickStyle = degree => `
    transform-origin: bottom left;
    transform: rotate(${degree}deg);
  `

  const tick = parseInt(attrs.tick)

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

  return svg`
    <rect
      x=${sizes[attrs.size].x} y=${sizes[attrs.size].y}
      rx=${sizes[attrs.size].rx} ry=${sizes[attrs.size].ry}
      width=${sizes[attrs.size].width} height=${sizes[attrs.size].height}
      fill=${!(tick % 5) ? 'orange' : 'black'}
      style=${tickStyle(tick - parseInt(attrs.rotation))}
    />
  `
}
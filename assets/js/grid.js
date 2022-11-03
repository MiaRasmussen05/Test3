export function randomGridPosition() {
    return {
      x: Math.floor(Math.random() * 30) + 1,
      y: Math.floor(Math.random() * 30) + 1
    }
  }
  
  export function outsideGrid(position) {
    return (
      position.x < 1 || position.x > 30 ||
      position.y < 1 || position.y > 30
    )
  }
let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

function getInputDirection() {
  lastInputDirection = inputDirection
  return inputDirection
}
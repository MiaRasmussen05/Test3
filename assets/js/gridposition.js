function randomGridPosition() {

  if (window.matchMedia("(min-width: 1281px)").matches) {
    return {
      x: Math.floor(Math.random() * 30) + 1,
      y: Math.floor(Math.random() * 30) + 1
    } 
  } else if (window.matchMedia("(max-width: 1280px)").matches) {
    return {
      x: Math.floor(Math.random() * 28) + 1,
      y: Math.floor(Math.random() * 28) + 1
    }
  } else if (window.matchMedia("(max-width: 992px)").matches) {
    return {
      x: Math.floor(Math.random() * 26) + 1,
      y: Math.floor(Math.random() * 26) + 1
    }
  } else if (window.matchMedia("(max-width: 748px)").matches) {
    return {
      x: Math.floor(Math.random() * 22) + 1,
      y: Math.floor(Math.random() * 22) + 1
    }
  } else if (window.matchMedia("(max-width: 548px)").matches) {
    return {
      x: Math.floor(Math.random() * 20) + 1,
      y: Math.floor(Math.random() * 20) + 1
    }
  } else if (window.matchMedia("(max-width: 350px)").matches) {
    return {
      x: Math.floor(Math.random() * 18) + 1,
      y: Math.floor(Math.random() * 18) + 1
    }
  } else {
    return {
      undefined
    } 
  }
};
  
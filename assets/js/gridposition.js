function randomGridPosition() {

  if (window.innerWidth > 1280) {
    return {
      x: Math.floor(Math.random() * 30) + 1,
      y: Math.floor(Math.random() * 30) + 1
    } 
  } else if (window.innerWidth < 1280) {
    return {
      x: Math.floor(Math.random() * 28) + 1,
      y: Math.floor(Math.random() * 28) + 1
    }
  } else if (window.innerWidth < 992) {
    return {
      x: Math.floor(Math.random() * 26) + 1,
      y: Math.floor(Math.random() * 26) + 1
    }
  } else if (window.innerWidth < 748) {
    return {
      x: Math.floor(Math.random() * 22) + 1,
      y: Math.floor(Math.random() * 22) + 1
    }
  } else if (window.innerWidth < 548) {
    return {
      x: Math.floor(Math.random() * 20) + 1,
      y: Math.floor(Math.random() * 20) + 1
    }
  } else if (window.innerWidth < 350) {
    return {
      x: Math.floor(Math.random() * 18) + 1,
      y: Math.floor(Math.random() * 18) + 1
    }
  } else {
    return {
      x: Math.floor(Math.random() * 0) + 1,
      y: Math.floor(Math.random() * 0) + 1
    } 
  }
};
  
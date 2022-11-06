function outsideGrid(position) {

    if (window.matchMedia("(min-width: 1281px)").matches) {
        return (
            position.x < 1 || position.x > 20 ||
            position.y < 1 || position.y > 20
        );
    } else if (window.matchMedia("(max-width: 1280px)").matches) {
        return (
            position.x < 1 || position.x > 28 ||
            position.y < 1 || position.y > 28
        );
    } else if (window.matchMedia("(max-width: 992px)").matches) {
        return (
            position.x < 1 || position.x > 26 ||
            position.y < 1 || position.y > 26
        );
    } else if (window.matchMedia("(max-width: 748px)").matches) {
        return (
            position.x < 1 || position.x > 22 ||
            position.y < 1 || position.y > 22
        );
    } else if (window.matchMedia("(max-width: 548px)").matches) {
        return (
            position.x < 0 || position.x > 20 ||
            position.y < 0 || position.y > 20
        );
    } else if (window.matchMedia("(max-width: 350px)").matches) {
        return (
            position.x < 1 || position.x > 18 ||
            position.y < 1 || position.y > 18
        );
    } else {
        return (
            undefined
        );
    }
}
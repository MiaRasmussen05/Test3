function outsideGrid(position) {

    if (window.innerWidth > 1280) {
        return (
            position.x < 1 || position.x > 20 ||
            position.y < 1 || position.y > 20
        );
    } else if (window.innerWidth < 1280) {
        return (
            position.x < 1 || position.x > 28 ||
            position.y < 1 || position.y > 28
        );
    } else if (window.innerWidth < 992) {
        return (
            position.x < 1 || position.x > 26 ||
            position.y < 1 || position.y > 26
        );
    } else if (window.innerWidth < 748) {
        return (
            position.x < 1 || position.x > 22 ||
            position.y < 1 || position.y > 22
        );
    } else if (window.innerWidth < 548) {
        return (
            position.x < 0 || position.x > 20 ||
            position.y < 0 || position.y > 20
        );
    } else if (window.innerWidth < 350) {
        return (
            position.x < 1 || position.x > 18 ||
            position.y < 1 || position.y > 18
        );
    } else {
        return (
            position.x < 1 || position.x > 30 ||
            position.y < 1 || position.y > 30
        );
    }
}
function selectRegionNum() {
    var east = document.getElementById("east").checked;
    var north = document.getElementById("north").checked;
    var south = document.getElementById("south").checked;
    var num = 0;
    if (east) {
        num++;
    }
    if (north) {
        num++;
    }
    if (south) {
        num++;
    }
    return num;
}

function selectProductNum() {
    var phone = document.getElementById("phone").checked;
    var laptop = document.getElementById("laptop").checked;
    var broadcast = document.getElementById("broadcast").checked;
    var num = 0;
    if (phone) {
        num++;
    }
    if (laptop) {
        num++;
    }
    if (broadcast) {
        num++;
    }
    return num;
}
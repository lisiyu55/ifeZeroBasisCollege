function changeRegion() {  //判断是否全选框被点击选择，显示该类别所有内容

    var allregion = document.getElementById("allregion").checked;

    if (allregion) {
        document.getElementById("east").checked = true;
        document.getElementById("north").checked = true;
        document.getElementById("south").checked = true;
    }
    emptyTable();
    initialTable();

}

function changeProduct() {   //判断是否全选框被点击选择，显示该类别所有内容

    var allproduct = document.getElementById("allproduct").checked;
    if (allproduct) {
        document.getElementById("phone").checked = true;
        document.getElementById("laptop").checked = true;
        document.getElementById("broadcast").checked = true;
    }
    emptyTable();
    initialTable();

}
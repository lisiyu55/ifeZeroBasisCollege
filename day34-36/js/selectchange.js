function selectChange1() {         //selectchange1、2、3、4、5、6单独拉出来是为了控制地区或者商品中只有一个多选框选中，
    //用户还要点击取消时，要设置这个操作无效
    var east = document.getElementById("east").checked;
    var north = document.getElementById("north").checked;
    var south = document.getElementById("south").checked;
    if (!east && !north && !south) {
        document.getElementById("east").checked = true;
    }
    selectChange();
}

function selectChange2() {
    var east = document.getElementById("east").checked;
    var north = document.getElementById("north").checked;
    var south = document.getElementById("south").checked;
    if (!east && !north && !south) {
        document.getElementById("north").checked = true;
    }
    selectChange();
}

function selectChange3() {
    var east = document.getElementById("east").checked;
    var north = document.getElementById("north").checked;
    var south = document.getElementById("south").checked;
    if (!east && !north && !south) {
        document.getElementById("south").checked = true;
    }
    selectChange();
}

function selectChange4() {
    var phone = document.getElementById("phone").checked;
    var laptop = document.getElementById("laptop").checked;
    var broadcast = document.getElementById("broadcast").checked;
    if (!phone && !laptop && !broadcast) {
        document.getElementById("phone").checked = true;
    }
    selectChange();
}

function selectChange5() {
    var phone = document.getElementById("phone").checked;
    var laptop = document.getElementById("laptop").checked;
    var broadcast = document.getElementById("broadcast").checked;
    if (!phone && !laptop && !broadcast) {
        document.getElementById("laptop").checked = true;
    }
    selectChange();
}

function selectChange6() {
    var phone = document.getElementById("phone").checked;
    var laptop = document.getElementById("laptop").checked;
    var broadcast = document.getElementById("broadcast").checked;
    if (!phone && !laptop && !broadcast) {
        document.getElementById("broadcast").checked = true;
    }
    selectChange();
}

//console.log(document.getElementById("selectBar").value);
function selectChange() {
    var phone = document.getElementById("phone").checked;
    var laptop = document.getElementById("laptop").checked;
    var broadcast = document.getElementById("broadcast").checked;
    var east = document.getElementById("east").checked;
    var north = document.getElementById("north").checked;
    var south = document.getElementById("south").checked;
    if (phone && laptop && broadcast) {   //判断是否地区或者商品的所有项已经被选择，来确定全选框对应的状态
        document.getElementById("allproduct").checked = true;
    }
    else {
        document.getElementById("allproduct").checked = false;
    }
    if (east && north && south) {
        document.getElementById("allregion").checked = true;
    }
    else {
        document.getElementById("allregion").checked = false;
    }
    emptyTable();
    allData=initialTable();
    initDraw(allData);
}
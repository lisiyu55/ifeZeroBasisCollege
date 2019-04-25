function initialTable() {
    var table = document.createElement("table");
    var bodys = document.getElementsByTagName("body");
    var body = bodys[0];
    var region1, region2, region3, product1, product2, product3 = "";

    if (document.getElementById("allregion").checked) { //判断是否全选框被点击选择，显示该类别所有内容
        region1 = document.getElementById("east").value;
        region2 = document.getElementById("north").value;
        region3 = document.getElementById("south").value;
    }
    else {
        if (document.getElementById("east").checked) {
            region1 = document.getElementById("east").value;
        }
        if (document.getElementById("north").checked) {
            region2 = document.getElementById("north").value;
        }
        if (document.getElementById("south").checked) {
            region3 = document.getElementById("south").value;
        }
    }

    if (document.getElementById("allproduct").checked) {   //判断是否全选框被点击选择，显示该类别所有内容
        product1 = document.getElementById("phone").value;
        product2 = document.getElementById("laptop").value;
        product3 = document.getElementById("broadcast").value;
    }
    else {
        if (document.getElementById("phone").checked) {
            product1 = document.getElementById("phone").value;
        }
        if (document.getElementById("laptop").checked) {
            product2 = document.getElementById("laptop").value;
        }
        if (document.getElementById("broadcast").checked) {
            product3 = document.getElementById("broadcast").value;
        }
    }

    body.appendChild(table);
    if (selectRegionNum() == 1 && selectProductNum() > 1) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerHTML = "地区";
        var td2 = document.createElement("td");
        td2.innerHTML = "商品";
        tr.appendChild(td1);
        tr.appendChild(td2);
        for (var i = 0; i < 12; i++) {
            var td = document.createElement("td");
            td.innerHTML = (i + 1) + "月";
            tr.appendChild(td);
        }
        table.appendChild(tr);

        for (var j = 0; j < data.length; j++) {
            var tr = document.createElement("tr");
            if ((data[j].region == region1 || data[j].region == region2 || data[j].region == region3) && (data[j].product == product1 || data[j].product == product2 || data[j].product == product3)) {
                var tr = document.createElement("tr");
                var td1 = document.createElement("td");
                td1.innerHTML = data[j].region;
                tr.appendChild(td1);
                var td2 = document.createElement("td");
                td2.innerHTML = data[j].product;
                tr.appendChild(td2);
                for (var i = 0; i < 12; i++) {
                    var td = document.createElement("td");
                    td.innerHTML = data[j].sale[i];
                    tr.appendChild(td);
                }
                table.appendChild(tr);
            }
        }
        var stable = document.getElementsByTagName("table")[0];
        var j = 1;
        var t = 0;
            for (t = j; j < stable.rows.length - 1; j++) {
                if (stable.rows[j].cells[0].innerHTML != stable.rows[j + 1].cells[0].innerHTML)
                    break;
            }
            if (t != j) {
                for (var q = t + 1; q <= j; q++) {
                    stable.rows[q].removeChild(stable.rows[q].cells[0]);
                }
                var n = (j - t + 1) + "";
                stable.rows[t].cells[0].setAttribute("rowspan", n);
            }
            
        

    }
    else {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerHTML = "商品";
        var td2 = document.createElement("td");
        td2.innerHTML = "地区";
        tr.appendChild(td1);
        tr.appendChild(td2);
        for (var i = 0; i < 12; i++) {
            var td = document.createElement("td");
            td.innerHTML = (i + 1) + "月";
            tr.appendChild(td);
        }
        table.appendChild(tr);
        for (var j = 0; j < data.length; j++) {
            var tr = document.createElement("tr");
            if ((data[j].region == region1 || data[j].region == region2 || data[j].region == region3) && (data[j].product == product1 || data[j].product == product2 || data[j].product == product3)) {
                var tr = document.createElement("tr");

                var td1 = document.createElement("td");
                td1.innerHTML = data[j].product;
                tr.appendChild(td1);
                var td2 = document.createElement("td");
                td2.innerHTML = data[j].region;
                tr.appendChild(td2);

                for (var i = 0; i < 12; i++) {
                    var td = document.createElement("td");
                    td.innerHTML = data[j].sale[i];
                    tr.appendChild(td);
                }
                table.appendChild(tr);
            }
        }

        var stable = document.getElementsByTagName("table")[0];
        var j = 1;
        var t = 0;
        i = 0;

        while (j < stable.rows.length - 1) {
            for (t = j; j < stable.rows.length - 1; j++) {
                if (stable.rows[j].cells[0].innerHTML != stable.rows[j + 1].cells[0].innerHTML)
                    break;
            }
            if (t != j) {
                for (var q = t + 1; q <= j; q++) {
                    stable.rows[q].removeChild(stable.rows[q].cells[0]);
                }
                var n = (j - t + 1) + "";
                stable.rows[t].cells[0].setAttribute("rowspan", n);
            }
            j++;
        }


    }



}

function emptyTable() {//清空表格
    var body = document.getElementsByTagName("body");
    var table = document.getElementsByTagName("table");
    body[0].removeChild(table[0]);
}
function draw() {//绘制出表格下方固定的两块区域分别为barGraph,lineChart,并且分别创建子元素svg,canvas
    var body = document.getElementsByTagName("body");
    var graph = document.createElement("div");
    graph.setAttribute("class", "graph");
    var barGraph = document.createElement("div");
    barGraph.setAttribute("class", "barGraph");
    var lineChart = document.createElement("div");
    lineChart.setAttribute("class", "lineChart");
    var xmlns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(xmlns, "svg");
    svg.setAttributeNS(null, "id", "bar-graph");
    svg.setAttributeNS(null, "width", "600");
    svg.setAttributeNS(null, "height", "500");
    barGraph.appendChild(svg);
    var canvas = document.createElement("canvas");
    lineChart.appendChild(canvas);
    canvas.setAttribute("id", "canvas");
    canvas.width = 600;
    canvas.height = 500;
    lineChart.appendChild(canvas);
    graph.appendChild(barGraph);
    graph.appendChild(lineChart);
    body[0].appendChild(graph);
}



function initDraw(allData) {
    var graph = document.getElementsByClassName("graph");
    var body = document.getElementsByTagName("body");
    var table = document.getElementsByTagName("table");
    if (graph[0]) {
        body[0].removeChild(graph[0]);
    }
    draw();
    var add = function () {
        this.style.backgroundColor = "aqua";

    };
    // var del = function () {
    //     this.style.backgroundColor = "white";
    // };

    //初始状态是对于所选表单中所有数据均以折线形式显示出来，每条显示不同颜色
    //对于表单所选择的初始数据，我们需要循环每一行数据去绘制折线，同时控制折线颜色（可以定义一个颜色序列，共九种颜色，依次赋值）

    var color = ["red", "green", "black", "white", "blue", "orange", "brown", "pink", "purple"];
    //这里的allData应该是复选框所对应的全部十二个月的数据
    drawLineChart(allData);
    barGraphic(allData);
    //这里对应之前每一行数据绘制柱状图和折线图
    // for(var k=0;k<allData.length;k++){
    //     drawLineChart(allData[k], false,color[k%allData.length]);
    //     
    // }

    var getData = function () {//m的格式与data里面结构不一样，不能直接使用绘制柱状图与折线图
        td = this.getElementsByTagName("td");
        // input=this.getElementsByTagName("input")
        var j = 0;
        var data = [[]];
        for (var i = td.length - 1; j < 12; i--) {//通过读取被选中表格行内数据存储到data数组里面（反向存储）
            //console.log(td[i]);
            // if (isNaN(parseInt(td[i].innerHTML))) {
            //     if (isNaN(parseInt(td[i].firstChild.nextSibling.value))) {
            //         data[0][j] = parseInt(td[i].firstChild.value);
            //     }
            //     else {
            //         data[0][j] = parseInt(td[i].firstChild.nextSibling.value);
            //     }
            // }
            // else {
            //     data[0][j] = parseInt(td[i].innerHTML);
            // }
            data[0][j] = td[i].firstChild.nextSibling.value;
            j++;
        }

        // for (var i = input.length - 1; j < 12; i--) {//通过读取被选中表格行内数据存储到data数组里面（反向存储）
        //     //console.log(td[i]);
        //     data[0][j] = parseInt(input[i].value);
        //     j++;
        // }
        //将存储的数据反向转换回正常顺序
        data = reverseData(data);
        //利用数据绘制折线图以及柱状图
        //在绘制之前，需要确定SVG以及canvas的位置,宽度均为550，高度均为450

        //在这里是对于鼠标hover时的情况，需要消除掉canvas里面原有的折线，重新绘制
        //设置一个布尔数控制是否清除canvas内容，重新绘制折线
        clearCanvas();

        drawLineChart(data);
        barGraphic(data);

    }
    var del = function () {
        saveStorage();
        var data = getSaveData();
        clearCanvas();

        drawLineChart(data);
        barGraphic(data);

    }

    var showEdit = function () {
        var btn = this.getElementsByTagName("button");
        if (btn.length == 0) {
            btn[2].style.display = "inline-block";
        }
        else if (btn[1].style.display == "inline") {
            return;
        }
        else {
            btn[2].style.display = "inline-block";
        }
    }

    var delEdit = function () {
        var btn = this.getElementsByTagName("button");
        btn[2].style.display = "none";
    }


    for (var m = table[0].firstChild.nextSibling; m != null; m = m.nextSibling) {
        m.onmouseover = getData;
        m.onmouseout = del;
        for (var t = m.firstChild; t != null; t = t.nextSibling) {
            if (!isNaN(parseInt(t.innerHTML))) {
                var text = document.createTextNode("");
                var btn = document.createElement("button");
                btn.innerHTML = "编辑";
                btn.setAttribute("class", "btn");
                var btn1 = document.createElement("button");
                btn1.innerHTML = "确定";
                btn1.setAttribute("class", "btn1");
                var btn2 = document.createElement("button");
                btn2.innerHTML = "取消";
                btn2.setAttribute("class", "btn2");
                var input = document.createElement("input");
                var num = t.innerHTML;
                input.value = num;
                input.setAttribute("class", "input");
                //t.appendChild(text);
                t.appendChild(input);
                t.appendChild(btn1);
                t.appendChild(btn2);
                t.appendChild(btn);
                btn1.style.display = "none";
                btn2.style.display = "none";
                input.style.display = "none";
                btn.style.display = "none";
                t.onmouseover = showEdit;
                t.onmouseout = delEdit;

            }

        }
    }
    var btn = document.getElementsByClassName("btn");
    var btn1 = document.getElementsByClassName("btn1");
    var btn2 = document.getElementsByClassName("btn2");
    var input = document.getElementsByClassName("input");
    for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = function () {
            // btn[i].parentNode.innerHTML = "<input value= \"" + input[i].value + "\"" + "class=" + "\"input\">" + "<button class=" + "\"btn1\"" + ">确定</button><button class=" + "\"btn2\"" + ">取消</button><button class=" + "\"btn\"" + ">编辑</button>";
            //btn[i].parentNode.childNodes.item(0).data="";
            //input[i].value=btn[i].parentNode.childNodes.item(0).data;
            //btn[i].parentNode.removeChild(btn[i].parentNode.childNodes.item(0));
            btn[i].parentNode.childNodes.item(0).data = "";
            btn1[i].style.display = "inline";
            btn2[i].style.display = "inline";
            input[i].style.display = "inline";
            btn[i].style.display = "none";
            btn1[i].onclick = function () {
                btn[i].parentNode.childNodes.item(0).data = input[i].value;
                btn1[i].style.display = "none";
                btn2[i].style.display = "none";
                input[i].style.display = "none";
                btn[i].style.display = "none"


            }


        }

    }



}

function reverseData(data) {

    var data1 = [[]];
    for (var i = 0; i < data[0].length; i++) {
        data1[0][data[0].length - i - 1] = data[0][i];
    }
    return data1;
}

function clearCanvas() {
    var c = document.getElementById("canvas");
    var cxt = c.getContext("2d");
    cxt.fillStyle = "aqua";
    cxt.beginPath();
    cxt.fillRect(0, 0, c.width, c.height);
    cxt.closePath();
}

function saveStorage() {
    var data = [[]];
    var str = "";
    tr = document.querySelectorAll("tr");
    for (let i = 1; i < tr.length; i++) {
        td = tr[i].querySelectorAll("td");
        str += td[0].innerText + " ";
        str += td[1].innerText + " ";
        for (let j = 2; j < td.length; j++) {
            if (!isNaN(td[j].innerText)) {
                if (j == td.length - 1) {
                    str += td[j].innerText;
                }
                else {
                    str += td[j].innerText + " ";
                }

            }
            else {
                if (j == td.length - 1) {
                    str += td[j].childNodes.item(1).value;
                }
                else {
                    str += td[j].childNodes.item(1).value + " ";
                }

            }
        }


    }

    if (typeof (Storage !== "undefined")) {
        localStorage.setItem("data", str);
    }
    else {
        console.log("Not support Storage");
    }
}

function getSaveData() {
    var savedata = new Object();
    saveData.product = "";
    saveData.region = "";
    saveData.sale = [];
    // saveData.sale=[];
    var str = localStorage.getItem("data");
    data = str.split(" ");
    for (let j = 0; j < parseInt(data.length / 14); j++) {
        saveData[j].product=data[j * 12];
        saveData[j].product=data[j * 12+1];
        for (let i = 2; i < 12; i++) {
            savedata[j].sale[i] = parseInt(data[j * 12 + i]);
        }
    }
    return savedata;

}


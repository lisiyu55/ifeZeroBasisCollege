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
            data[0][j] = parseInt(td[i].innerHTML);
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
        clearCanvas();
        drawLineChart(allData);
        barGraphic(allData);
    }

    var showEdit = function () {
        var btn=this.getElementsByTagName("button");
        btn[0].style.display = "block";
    }

    for (var m = table[0].firstChild.nextSibling; m != null; m = m.nextSibling) {
        m.onmouseover = getData;
        m.onmouseout = del;
    }

    var m=table[0].firstChild.nextSibling;
    for (var t = m.firstChild.nextSibling.nextSibling; t != null; t = t.nextSibling) {
        var btn = document.createElement("button");
        btn.innerHTML = "编辑";
        t.appendChild(btn);
        btn.style.display = "none";
        t.onmouseover = showEdit;
        // t.onmouseout = del;
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


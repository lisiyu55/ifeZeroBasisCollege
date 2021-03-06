function barGraphic(data) {

    var area_width = 600;//横轴的起始点x值是30，y值是450。结束点x值是570，y值是450
    var area_height = 400;//纵轴的起始点x值是30，y值是450.结束点x值是30，y值是50
    var bar_width = 40;
    var bar_gap = 4;
    var rect_color = "#27a1ea";
    var bar_color = "#000";
    var max = 0;


    let barHtml = [];
    barHtml.push("<line x1=" + 30 + " y1=" + 450 + " x2=" + 30 + " y2=" + 50 + " stroke=" + bar_color + " stroke-width='2'/>");
    barHtml.push("<line x1=" + 25 + " y1=" + 55 + " x2=" + 30 + " y2=" + 50 + " stroke=" + bar_color + " stroke-width='2'/>");
    barHtml.push("<line x1=" + 35 + " y1=" + 55 + " x2=" + 30 + " y2=" + 50 + " stroke=" + bar_color + " stroke-width='2'/>");
    barHtml.push("<line x1=" + 565 + " y1=" + 445 + " x2=" + 570 + " y2=" + 450 + " stroke=" + bar_color + " stroke-width='2'/>");
    barHtml.push("<line x1=" + 565 + " y1=" + 455 + " x2=" + 570 + " y2=" + 450 + " stroke=" + bar_color + " stroke-width='2'/>");
    barHtml.push("<line x1=" + 30 + " y1=" + 450 + " x2=" + 570 + " y2=" + 450 + " stroke=" + bar_color + " stroke-width='2'/>");

    
    var month = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一", "十二"];

    for (let i = 0; i < 12; i++) {
        if (i == 0) {
            barHtml.push("<line x1=" + Math.floor(30 + (i + 1) * (bar_gap + bar_width / 2)) + " y1=" + 450 + " x2=" + Math.floor(30 + (i + 1) * (bar_gap + bar_width / 2)) + " y2=" + 455 + " stroke=" + bar_color + " stroke-width='2'/>");
            barHtml.push("<text x=" + Math.floor(20 + (i + 1) * (bar_gap + bar_width / 2)) + " y=" + 470 + " >" + month[i] + "</text>");
        }
        else {
            barHtml.push("<line x1=" + Math.floor(30 + (i + 1) * bar_gap + (i + 1 - 0.5) * bar_width) + " y1=" + 450 + " x2=" + Math.floor(30 + (i + 1) * bar_gap + (i + 1 - 0.5) * bar_width) + " y2=" + 455 + " stroke=" + bar_color + " stroke-width='2'/>");
            barHtml.push("<text x=" + Math.floor(20 + (i + 1) * bar_gap + (i + 1 - 0.5) * bar_width) + " y=" + 470 + " >" + month[i] + "</text>");
        }

    }
    max = maxData(data);

    var real_ratio = (area_height - 50) / max;//每个sale单位所占的像素值
    var color = ["green", "blue", "orange", "purple"];
    var h_gap = area_height / 8;
    for (let i = 0; i < 7; i++) {

        barHtml.push("<line x1=" + 30 + " y1=" + (450 - (i + 1) * h_gap) + " x2=" + 25 + " y2=" + (450 - (i + 1) * h_gap) + " stroke=" + bar_color + " stroke-width='2'/>");
        barHtml.push("<text x=" + 0 + " y=" + (455 - (i + 1) * h_gap) + " >" + Math.floor(((i + 1) * h_gap) / real_ratio) + "</text>");
    }

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            height = data[i][j] * real_ratio;
            x = (j + 1) * bar_gap + i * bar_width / data.length + 30 + j * bar_width;
            y = 450 - data[i][j] * real_ratio;
            barHtml.push("<rect width=" + bar_width / data.length + " height=" + height + " x=" + x + " y=" + y + " fill=" + color[Math.floor(j / 3)] + " stroke=black"+" />");

        }

    }

    var barGraph = document.getElementById("bar-graph");
    barGraph.innerHTML = barHtml.join("");

}

function maxData(data) {
    var max = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            if (parseInt(data[i][j]) > parseInt(max)) {
                max = data[i][j];
            }
        }
    }
    return max;
}
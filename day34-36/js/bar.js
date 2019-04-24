function barGraphic(data) {

    var area_width = 800;//横轴的起始点x值是100，y值是500。结束点x值是900，y值是500
    var area_height = 400;//纵轴的起始点x值是100，y值是500.结束点x值是100，y值是100
    var bar_width = 30;
    var bar_gap = 30;
    var rect_color = "#27a1ea";
    var bar_color = "#000";
    var max = 0;


    let barHtml = [];
    barHtml.push("<line x1=" + 100 + " y1=" + 500 +" x2=" + 100 + " y2=" + 100 + " stroke=" + bar_color + " stroke-width='2'/>");
    barHtml.push("<line x1=" + 90 + " y1=" + 110 +" x2=" + 100 + " y2=" + 100 + " stroke=" + bar_color + " stroke-width='2'/>");
    barHtml.push("<line x1=" + 110 + " y1=" + 110 +" x2=" + 100 + " y2=" + 100 + " stroke=" + bar_color + " stroke-width='2'/>");
    barHtml.push("<line x1=" + 890 + " y1=" + 490 +" x2=" + 900 + " y2=" + 500 + " stroke=" + bar_color + " stroke-width='2'/>");
    barHtml.push("<line x1=" + 890 + " y1=" + 510 +" x2=" + 900 + " y2=" + 500 + " stroke=" + bar_color + " stroke-width='2'/>");
    barHtml.push("<line x1=" + 100 + " y1=" + 500 +" x2=" + 900 + " y2=" + 500 + " stroke=" + bar_color + " stroke-width='2'/>");

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].sale.length; j++) {
            if (data[i].sale[j] > max) {
                max = data[i].sale[j];
            }
        }

    }
    var real_ratio = (area_height - 50) / max;//每个sale单位所占的像素值

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].sale.length; j++) {
            height = data[i].sale[j] * real_ratio;
            x = (j + 1) * bar_gap + j * bar_width + 100;
            y = 500 - data[i].sale[j] * real_ratio;
            barHtml.push("<rect width=" + bar_width + " height=" + height + " x=" + x + " y=" + y + " fill=" + rect_color + " />");

        }
    }
    var barGraph = document.getElementById("bar-graph");
    barGraph.innerHTML = barHtml.join("");

}
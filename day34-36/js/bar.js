function barGraphic(data) {

    var area_width = 600;//横轴的起始点x值是30，y值是450。结束点x值是570，y值是450
    var area_height = 400;//纵轴的起始点x值是30，y值是450.结束点x值是30，y值是50
    var bar_width = 25;
    var bar_gap = 15;
    var rect_color = "#27a1ea";
    var bar_color = "#000";
    var max = 0;


    let barHtml = [];
    barHtml.push("<line x1=" + 30 + " y1=" + 450 +" x2=" + 30 + " y2=" + 50 + " stroke=" + bar_color + " stroke-width='2'/>");
    barHtml.push("<line x1=" + 25 + " y1=" + 55 +" x2=" + 30 + " y2=" + 50 + " stroke=" + bar_color + " stroke-width='2'/>");
    barHtml.push("<line x1=" + 35 + " y1=" + 55 +" x2=" + 30 + " y2=" + 50 + " stroke=" + bar_color + " stroke-width='2'/>");
    barHtml.push("<line x1=" + 565 + " y1=" + 445 +" x2=" + 570 + " y2=" + 450 + " stroke=" + bar_color + " stroke-width='2'/>");
    barHtml.push("<line x1=" + 565 + " y1=" + 455 +" x2=" + 570 + " y2=" + 450 + " stroke=" + bar_color + " stroke-width='2'/>");
    barHtml.push("<line x1=" + 30 + " y1=" + 450 +" x2=" + 570 + " y2=" + 450 + " stroke=" + bar_color + " stroke-width='2'/>");

    // for (let i = 0; i < data.length; i++) {
    //     for (let j = 0; j < data[i].sale.length; j++) {
    //         if (data[i].sale[j] > max) {
    //             max = data[i].sale[j];
    //         }
    //     }
    // }

    for (let i = 0; i < data.length; i++) {
       
            if (data[i] > max) {
                max = data[i];
            }
        
    }

    var real_ratio = (area_height - 50) / max;//每个sale单位所占的像素值

    // for (let i = 0; i < data.length; i++) {
    //     for (let j = 0; j < data[i].sale.length; j++) {
    //         height = data[i].sale[j] * real_ratio;
    //         x = (j + 1) * bar_gap + j * bar_width + 100;
    //         y = 500 - data[i].sale[j] * real_ratio;
    //         barHtml.push("<rect width=" + bar_width + " height=" + height + " x=" + x + " y=" + y + " fill=" + rect_color + " />");

    //     }
    // }

    for (let i = 0; i < data.length; i++) {
        
            height = data[i] * real_ratio;
            x = (i + 1) * bar_gap + i * bar_width + 30;
            y = 450 - data[i] * real_ratio;
            barHtml.push("<rect width=" + bar_width + " height=" + height + " x=" + x + " y=" + y + " fill=" + rect_color + " />");

    }

    var barGraph = document.getElementById("bar-graph");
    barGraph.innerHTML = barHtml.join("");

}
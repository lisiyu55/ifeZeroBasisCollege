function barGraphic(data) {

    var area_width = 800;
    var area_height = 600;
    var bar_width = 50;
    var bar_internal = 60;
    var rect_color = aqua;
    var bar_color = black;
    var max = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i] > max) {
            max = data[i];
        }
    }

    var real_ratio = (area_height - 1) / max;
   
}
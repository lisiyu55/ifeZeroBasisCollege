function drawLineChart(data) {
    //由于allData传过来的是各个行的数据
    var canvas = document.getElementById("canvas");
    var gap = 550 / 13;
    var height = 400;
    var max = 0;
    // for (let i = 0; i < data.length; i++) {
    //     for (let j = 0; j < data[i].sale.length; j++) {
    //         if (data[i].sale[j] > max) {
    //             max = data[i].sale[j];
    //         }
    //     }
    // }

    
    max = maxData(data);
    // for (let i = 0; i < data.length; i++) {
    //     if (data[i] > max) {
    //         max = data[i];
    //     }
    // }
    var real_ratio = (height - 50) / max;//每个sale单位所占的像素值

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        
       
        var h_gap = height / 8;
        
        var color=["red","green","black","white","blue","orange","brown","pink","purple"];
        var index=parseInt(Math.random()*8);
        //读取数据，绘制折线
        for (let i = 0; i < data.length; i++) {
            var c=color[(index+1)%8];
            index++;
            for (let j = 0; j < data[i].length - 1; j++) {
                var x1 = 30 + (j + 1) * gap;
                var y1 = 450 - data[i][j] * real_ratio;
                var x2 = 30 + (j + 2) * gap;
                var y2 = 450 - data[i][j + 1] * real_ratio;
                var bool = false;
                if (j == data[i].length - 2) {
                    bool = true;
                }
                drawLineDot(x1, y1, x2, y2, bool, c);
            }
        }
       drawXAxis(gap);
        drawYAxis(h_gap, real_ratio);
        //绘制x轴
        ctx.beginPath();
        ctx.moveTo(30, 450);
        ctx.lineTo(570, 450);
        ctx.lineTo(565, 445);
        ctx.moveTo(570, 450);
        ctx.lineTo(565, 455);
        ctx.stroke();
        //绘制y轴
        ctx.moveTo(30, 450);
        ctx.lineTo(30, 50);
        ctx.lineTo(25, 55);
        ctx.moveTo(30, 50);
        ctx.lineTo(35, 55);
        ctx.stroke();
        ctx.closePath;
    }
}

function maxData(data) {
    var max = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            if (data[i][j] > max) {
                max = data[i][j];
            }
        }
    }
    return max;
}

function drawLineDot(x1, y1, x2, y2, bool, color) {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {

        var ctx = canvas.getContext('2d');
        ctx.strokeStyle = color;
        //绘制一个圈（靠前面那个点的） 
        ctx.beginPath();
        ctx.arc(x1, y1, 5, 0, Math.PI * 2, true);
        ctx.stroke();
        //绘制一条直线
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
        if (bool) {
            ctx.beginPath();
            ctx.arc(x2, y2, 5, 0, Math.PI * 2, true);
            ctx.strokeStyle = color;
            ctx.stroke();
            ctx.closePath();
        }
    }
}



function drawXAxis(gap) {//绘制x轴的坐标单元
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.strokeStyle = "black";
        ctx.fillStyle = "black";
        ctx.beginPath();
        var month = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
        for (var i = 0; i < 12; i++) {
            ctx.moveTo(30 + (i + 1) * gap, 450);
            ctx.lineTo(30 + (i + 1) * gap, 455);
            ctx.fillText(month[i], 20 + (i + 1) * gap, 470);
        }
        ctx.stroke();
        ctx.closePath();

    }
}

function drawYAxis(h_gap, real_ratio) {//绘制y轴的坐标单元
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.strokeStyle = "black";
        ctx.fillStyle = "black";
        ctx.beginPath();
        for (var i = 0; i < 7; i++) {
            ctx.moveTo(30, 450 - (i + 1) * h_gap);
            ctx.lineTo(25, 450 - (i + 1) * h_gap);
            ctx.fillText(Math.floor(((i + 1) * h_gap) / real_ratio), 5, 450 - (i + 1) * h_gap);
        }
        ctx.stroke();
        ctx.closePath();

    }
}
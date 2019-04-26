function drawLineChart(data,bool,color) {
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

    if(bool){
        clearCanvas();
    }

    for (let i = 0; i < data.length; i++) {
        if (data[i] > max) {
            max = data[i];
        }
    }
    var real_ratio = (height - 50) / max;//每个sale单位所占的像素值

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
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
        ctx.strokeStyle=color;
        ctx.stroke();
        ctx.closePath;
        //读取数据，绘制折线
        // for (let i = 0; i < data.length; i++) {
        //     for (let j = 0; j < data[i].sale.length - 1; j++) {
        //         var x1 = 100 + (j + 1) * gap;
        //         var y1 = 500 - data[i].sale[j] * real_ratio;
        //         var x2 = 100 + (j + 2) * gap;
        //         var y2 = 500 - data[i].sale[j + 1] * real_ratio;
        //         var bool = false;
        //         if (j == data[i].sale.length - 2) {
        //             bool = true;
        //         }
        //         drawLineDot(x1, y1, x2, y2, bool);
        //     }
        // }

        for (let i = 0; i < data.length-1; i++) {
            
                var x1 = 30 + (i + 1) * gap;
                var y1 = 450 - data[i] * real_ratio;
                var x2 = 30 + (i + 2) * gap;
                var y2 = 450 - data[i+1] * real_ratio;
                var bool = false;
                if (i == data.length - 2) {
                    bool = true;
                }
                drawLineDot(x1, y1, x2, y2, bool);
            
        }
    }
}

function drawLineDot(x1, y1, x2, y2, bool) {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
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
            ctx.stroke();
            ctx.closePath();
        }


    }
}

function clearCanvas()  
{  
    var c=document.getElementById("canvas");  
    var cxt=c.getContext("2d");  
       
    cxt.fillStyle="aqua";  
    cxt.beginPath();  
    cxt.fillRect(0,0,c.width,c.height);  
    cxt.closePath();  
}
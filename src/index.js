
var canvas = document.getElementById("canvas");
if(canvas.getContext){
    var context = canvas.getContext('2d');
    context.beginPath();
    context.arc(50,50,48,0,2*Math.PI,false);
    context.arc(50,50,45,0,2*Math.PI,false);
    context.moveTo(50,50);
    context.lineTo(50,16);
    context.moveTo(50,50);
    context.lineTo(82,50);
    context.stroke();
    /* 这三个文字属性要放在前面，否则没有效果 */
    context.font='12px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('12',50,12);
    context.fillText('3',88,50);
    context.fillText('6',50,88);
    context.fillText('9',12,50);
}

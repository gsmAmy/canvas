

var drawing = document.getElementById('drawing');
if(drawing.getContext){
	var context = drawing.getContext("2d");
    /* 属性先设置才能绘制，否则没有效果 */
	//fill
	context.fillStyle = 'red';
	context.fillRect(0,0,50,50);
	context.fillStyle = 'rgba(0,0,0,0.5)';
	context.fillRect(10,10,20,20);
	//stroke
	context.strokeStyle = '#000';
	context.strokeRect(30,30,50,50);
	context.strokeStyle = 'rgba(0,0,0,0.5)';
	context.strokeRect(50,50,20,20);
	//clear
	context.clearRect(40,40,10,10);

	//路径
	context.beginPath();
    context.arc(150,50,48,0,2*Math.PI,false);
    context.arc(150,50,45,0,2*Math.PI,false);
    context.moveTo(150,50);
    context.lineTo(150,16);
    context.moveTo(150,50);
    context.lineTo(182,50);
    context.stroke();

    //text
    context.font='12px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('12',150,12);
    context.fillText('3',188,50);
    context.fillText('6',150,88);
    context.fillText('9',112,50);

	//绘制图片
	var image = document.getElementById("myimg");
	context.drawImage(image,200,200,120,120);

	//阴影
	context.shadowOffsetX = 5;
	context.shadowOffsetY = 5;
	context.shadowBlur = 3;
	context.shadowColor = 'rgba(0,0,0,0.5)';
	context.fillStyle = 'ff0000';
	context.fillRect(100,100,100,100);

	//线性渐变
	var gradient = context.createLinearGradient(320,320,400,400);
	gradient.addColorStop(0,'white');
	gradient.addColorStop(1,'black');
	context.fillStyle = gradient;
	context.fillRect(320,320,100,100);

	//放射渐变
	var gradientRa = context.createRadialGradient(370,150,10,370,150,30);
	gradientRa.addColorStop(0,'white');
	gradientRa.addColorStop(1,'black');
	context.fillStyle = gradientRa;
	context.fillRect(320,100,100,100);

	//模式 即重复图片
	var loveImg = document.getElementById('xinimg');
	var pattern = context.createPattern(loveImg,'repeat');
	context.fillStyle = pattern;
	context.fillRect(0,320,150,150);

	//合成
	context.shadowOffsetX = 0;
	context.shadowOffsetY = 0;
	context.fillStyle = "#ff0000";
	context.fillRect(430,200,100,100);
	// context.globalAlpha = 0.5;
	context.globalCompositionOperation = 'destination-over';
	context.fillStyle = 'rgba(0,0,255,1)';
	context.fillRect(480,250,100,100);
}




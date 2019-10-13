var items = document.getElementsByClassName("item");
var goPrevBtn = document.getElementById("goPrev");
var goNextBtn = document.getElementById("goNext");
var points = document.getElementsByClassName("point");
var list = document.getElementsByClassName("list");
	
var index = 0;	//当前显示的图片索引
//显示指定索引的图片
var goIndex = function() {
	for(var i = 0 ; i < items.length ; i++) {
		items[i].classList.remove("active");
		points[i].classList.remove("active");
	}
	items[index].classList.add("active");
	points[index].classList.add("active");
};
//播放下一张图片
var goNext = function() {
	index++;
	if(index > items.length - 1) {
		index = 0;
	}
	goIndex();
};
goNextBtn.onclick = function() {
	goNext();
	//点击按钮后清除原有的定时器，等待1s后再次设置定时器
	setTimeout(function(){
		clearInterval(timer);
		timer = setInterval(function() {
			goNext();
		}, 2000);
	}, 1000);
};
//播放上一张图片
var goPrev = function() {
	index--;
	if(index < 0) {
		index = items.length - 1;
	}
	goIndex();
};
goPrevBtn.onclick = function() {
	goPrev();
	setTimeout(function(){
		clearInterval(timer);
		timer = setInterval(function() {
			goNext();
		}, 2000);
	}, 1000);
};
//点击小圆点，播放某一张指定图片
for(let i = 0 ; i < points.length ; i++) {
	points[i].onclick = function() {
		index = i;
		goIndex();
		setTimeout(function(){
			clearInterval(timer);
			timer = setInterval(function() {
				goNext();
			}, 2000);
		}, 1000);
	}
}
//设置定时器，2s间隔自动播放
/*注意每次重设定时器前都要先清除定时器*/
var timer = setInterval(function() {
		goNext();
	}, 2000);
list[0].onmouseout = function() {
	clearInterval(timer);
	timer = setInterval(function() {
		goNext();
	}, 2000);
};
list[0].onmouseover = function() {
	clearInterval(timer);
};
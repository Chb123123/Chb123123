function animtion(ojb, target, callback) {
	clearInterval(ojb.move);
	ojb.move = setInterval(function () {
		// 定义元素的步长
		var setp = (target - ojb.offsetLeft) / 10;
		if (setp >= 0) {
			Math.ceil(setp);
		} else {
			Math.floor(setp);
		}
		// 判断元素是否到达指定位置 如果到达则停止计时器
		if (ojb.offsetLeft == target) {
			clearInterval(ojb.move);
		}
		
		// ojb.style.left = ojb.offsetLeft + 1 + "px";
		// X += 1;
		ojb.style.left = ojb.offsetLeft + setp + "px";
	}, 10);
    // 判断是否有回调函数，如果有，则调用函数
		if (callback) {
			callback();
		}
}

window.addEventListener("load", function () {
	// 获取两个左右的点击按钮
	var arrowL = document.querySelector(".arrow_l");
	var arrowR = document.querySelector(".arrow_r");
	var num = 0;
	var w = document.querySelector(".w");
	// 克隆第一张图片
	// console.log(w.children[0])	
	// 获取小圆圈父盒子的节点
	var circles = document.querySelector(".circle");
	var circle1 = 0;
	arrowL.addEventListener("click", function () {
		// console.log(num);
		// 无缝连接 如果走到最后一张 此时让我们装图片的盒子快速恢复第一张
		if (num == 0) {
			w.style.left = "-3000px";
			console.log(num)
			num = 5;
			
			
		}
		console.log(num)
		animtion(w, -600 * num);
		num--;
		console.log(w.style.left)
		
	// console.log(circle);
		// 点击右侧按钮 小圆圈跟随一起变化 可以在声明一个变量控制小圆圈的播放
		circle1++;
		// console.log(circle1);
		// 如果circle == 4 则将circle == 0
		if (circle1 < 0) {
			circle1 = 5;
		}
		// 先消除小圆圈的current类名
		for (var i = 0; i < circles.children.length; i++) {
			circles.children[i].className = "";
			// console.log(circles.children[i])
		}
		console.log(circles.children[circle1])
		circles.children[circle1].className = "current";
	});
	// console.log(num);
	arrowR.addEventListener("click", function () {
		console.log(num);
		if (num == -(w.children.length - 1) || num == w.children.length - 1) {
			w.style.left = 0;
			num = 0;
		}
		num++;
		animtion(w, -600 * num);
	});
	// console.log(arrowL, arrowR);
	// 获取装图片盒子的节点

	// console.log(w);
	// 获取大盒子的节点
	var contanier = document.querySelector(".contanier");
	// 获取装小圆圈的盒子
	var circle = document.querySelector(".circle");
	// 动态生成小圆圈，让小圆圈的数量和轮播图的图片相等
	// 利用循环自动生成小圆圈
	// 将小圆圈添加在 盒子里面
	for (var i = 0; i < w.children.length; i++) {
		var lis = document.createElement("li"); // 创建自动生成节点的函数
		// 将创建好的小圆圈添加一个自定义属性
		lis.setAttribute("data-index", i);
		circle.append(lis);
		// 小圆圈的排他思想 在创建小圆圈的同时给他们创建点击事件，在点击的时候先清除所有小圆圈的className 在留下点击的小圆圈的className
		lis.addEventListener("click", function () {
			for (var i = 0; i < circle.children.length; i++) {
				circle.children[i].className = "";
			}
			this.className = "current";
			// 点击小圆圈，移动相应的图片
			// console.log(this.getAttribute('data-index'))
			// 获取当前小圆点的自定义索引值 并把需要移动的距离赋值给num
			var num = this.getAttribute("data-index") * -600;
			// console.log(num);
			// 使用动画函数
			animtion(w, num);
		});
	}
	var first = w.children[0].cloneNode(true);
	w.appendChild(first);
	// 把小圆圈里面的第一个元素底色设为白色
	circle.children[0].className = "current";
	// 鼠标经过盒子显示两个点击按钮
	contanier.addEventListener("mouseover", function () {
		arrowL.style.display = "block";
		arrowR.style.display = "block";
	});
	// 鼠标离开，隐藏两个点击按钮
	contanier.addEventListener("mouseout", function () {
		arrowL.style.display = "none";
		arrowR.style.display = "none";
	});
	// 鼠标点击，图片变化
	// arrowL.addEventListener("click", function () {
	// 	animtion(w, -650);
	// });
	// 鼠标离开，自动播放轮播图

	var num = 1;
	// // console.log(w.children.length)
	// var two = setInterval(function () {
	// 	// console.log(num);
	// 	var one = setInterval(function () {
	// 		w.style.left = w.offsetLeft - 30 + "px";
	// 		if (w.offsetLeft == -(600 * num)) {
	// 			clearInterval(one);
	// 			num++;
	// 		}
	// 		if (num > 5) {
	// 			w.style.left = 0;
	// 			num = 1;
	// 			clearInterval(one);
	// 		}
	// 		// console.log(this)
	// 		// console.log(w.style.left);
	// 		// if (w.offsetLeft == -600 * (w.children.length - 1)) {
	// 		// 	clearInterval(two);
	// 		// }
	// 		// console.log(w.style.left);
	// 	}, 10);
	// 	// for(var i = 0;i < w.children.length;i++){
	// 	// 	console.log(this)
	// 	// }
	// 	// console.log(num);
	// }, 2000);

	// 鼠标经过轮播图，计时器停止，轮播图暂停
	
	// 鼠标离开 ，计时器开始 轮播图开始播放
	w.addEventListener("mouseout", function () {
		two = setInterval(function () {
			// console.log(num);
			var one = setInterval(function () {
				w.style.left = w.offsetLeft - 30 + "px";
				if (w.offsetLeft == -(600 * num)) {
					clearInterval(one);
					num++;
				}
				if (num > 5) {
					w.style.left = 0;
					num = 1;
					clearInterval(one);
				}
				// console.log(this)
				// console.log(w.style.left);
				// if (w.offsetLeft == -600 * (w.children.length - 1)) {
				// 	clearInterval(two);
				// }
				// console.log(w.style.left);
			}, 10);
			// for(var i = 0;i < w.children.length;i++){
			// 	console.log(this)
			// }
			// console.log(num);
		}, 2000);
	});
	w.addEventListener("mouseover", function () {
		clearInterval(two);
	});
	console.log(location.href)
});

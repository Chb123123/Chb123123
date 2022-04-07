$(function () {
	// 禁止用户右键和选中
	// contextmenu 主要控制应该何时显示上下文菜单，主要由于程序员取消默认的上下文菜单
	document.addEventListener("contextmenu", function (e) {
		e.preventDefault();
	});
	// 禁止鼠标选中(selectstart 开始选中)
	document.addEventListener("selectstart", function (event) {
		event.preventDefault();
	});
	load();
	// console.log(typeof toDolist);
	$("#input").on("keydown", function (event) {
		// 判断用户按下哪个鼠标 如果按下回车 则输入框的内容添加到 li 里面
		// console.log(event.keyCode)
		if (event.keyCode == 13) {
			if($("#input").val() == ''){
                alert('不能输入空白内容')
            }else{
                // 先读取本地存储
			var local = Obtain();
			console.log(local);
			// 点击回车生成一个对象
			local.push({ title: $("#input").val(), done: false });
			// 将更新完的数组添加到本地存储
			savaLoacl(local);
			// 将输入完成的输入框清空
			$("#input").val("");
			// 将更新的本地存储更新在页面上
			load();
            }
		}
	});
	// 点击删除按钮 删除当前点击的 li
	$(".conduct-container").on("click", ".remove", function () {
		// 获取本地存储 将点击删除的 li 从本地存储当中删除
		var data = Obtain();
		var index = $(this).parent().data("index");
		console.log(index);
		data.splice(index, 1);
		savaLoacl(data);
		load();
	});
	$(".finish-container").on("click", ".remove", function () {
		var data = Obtain();
		var index = $(this).parent().data("index");
		console.log(index);
		data.splice(index, 1);
		savaLoacl(data);
		load();
	});
	// 点击正在进行复选框按钮 将打勾的复选框 li 添加在已经完成里面
	$(".conduct-container").on("change", "input[type=checkbox]", function () {
		// 获取当前的索引号
		var index = $(this).parent().data("index");
		var data = Obtain();
		// 点击复选框 如果打勾 则将 done 的值变为 true
		data[index].done = true;
		savaLoacl(data);
		load();
	});
	// 点击已完成复选框 将取消 打勾的小 li 添加在 正在进行里面
	$(".finish-container").on("click", "input[type=checkbox]", function () {
		var index = $(this).parent().data("index");
		var data = Obtain();
		// 点击复选框 如果打勾 则将 done 的值变为 false
		data[index].done = false;
		savaLoacl(data);
		load();
	});
	// 鼠标经过hello 背景变色
	var bgColor = ["red", "green", "purple", "blue", "pink"];
	var num_color = 0;
	$(".hello").on({
		mouseover: function () {
			if (num_color == 5) {
				num_color = 0;
			}
			$(this).css("background-color", bgColor[num_color]);
			$(this).css("color", "white");
			num_color++;
		},
		mouseout: function () {
			$(this).css("background-color", "");
			$(this).css("color", "#555");
		},
	});

	// 声明一个函数 用来获取本地存储
	function Obtain() {
		var todo = localStorage.getItem("todolist");
		if (todo !== null) {
			var data = JSON.parse(todo);
			// data.reverse()
			return data;
		} else {
			return [];
		}
	}
	// 保存本地存储函数
	function savaLoacl(data) {
		localStorage.setItem("todolist", JSON.stringify(data));
	}
	// 将本地存储数据渲染到页面
	function load() {
		// 先将原有的 li 删除
		$(".finish-container").children().remove();
		$(".conduct-container").children().remove();
		var data = Obtain();
		$(data).each(function (i, e) {
			if ($(this)[0].done) {
				var lis = $(
					"<li data-index=" +
						i +
						"><a href='javascript:;' class='remove' title='删除目标'>一</a></li>"
				);
				var spans = $("<span></span>");
				// 将对象的元素添加到span 里面
				spans.text($(this)[0].title);
				lis.prepend(spans);
				// 生成复选框
				var inputs = $(
					'<input type = checkbox name="" id="" checked="checkde" title="未完成目标"/>'
				);
				lis.prepend(inputs);
				$(".finish-container").prepend(lis);
			} else {
				// 生成 li
				var lis = $(
					"<li data-index=" +
						i +
						"><a href='javascript:;' class='remove' title='删除目标'>一</a></li>"
				);
				var spans = $("<span></span>");
				// 将对象的元素添加到span 里面
				spans.text($(this)[0].title);
				lis.prepend(spans);
				// 生成复选框
				var inputs = $(
					'<input type = checkbox name="" id="" title="已完成目标"/>'
				);
				lis.prepend(inputs);
				$(".conduct-container").prepend(lis);
			}
		});
		// 未完成数量
		var num = $(".conduct-container").children().length;
		$(".conduct h3").children("span").text(num);
		// 已完成数量
		var num1 = $(".finish-container").children().length;
		$(".finish h3").children("span").text(num1);
	}
});

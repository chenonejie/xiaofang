;(function(){
	window.onload = function(){
		//字体设置
		fontSelf();
	}
	window.onresize = function () {
		fontSelf();
	};
	function fontSelf() {
		var wHtml = document.getElementById('html');
		var w = document.documentElement.clientWidth;
		w =  w > 768 ? 768 : document.documentElement.clientWidth;
		wHtml.style.fontSize = w * 0.045 + 'px';
	};
	//页面加载
	LodeAjax();
	$("nav ul li:eq(0)").click(
		LodeAjax
	);
	function LodeAjax(){
		$(".content").empty(); 
		$('.glide').animate({left:"0"},200);
		$.ajax({
			type:"post",
			url:"http://222.24.14.111:8080/container/task",
			async:true,
			success:function(message){
				var obj = eval(message);
				for(var attr in obj){
					var $content = $('.content');
					var $li = $("<li class='clearfix'></li>");
					$content.append($li);
					var $Img = $("<img src=''>");
					$li.append($Img);
					$Img.attr("src",obj[attr]['Pic']);
					var $introduce = $('<div class="introduce"></div>');
					$li.append($introduce);
					var $p = $('<p class="name">任务名称:</p>');
					$introduce.append($p);
					var $span = $('<span></span>');
					$p.append($span);
					var $a = $("<a href='#'></a>");
					$span.append($a);
					$a.html(obj[attr]['address']);
					var $p = $('<p class="time">时间:</p>');
					$introduce.append($p);
					var $span = $('<span></span>');
					$p.append($span);
					$span.html(obj[attr]['time']);
					var $button = $('<button class="receive"></button>');
					$li.append($button);
					//发送接受任务的taskNo
					$button.attr('id',obj[attr]['taskNo']);
					if(obj[attr]['state'] == 1){
						$button.html('接受任务');
						$button.addClass('receive');
						
					}else if(obj[attr]['state'] == 2){
						$button.html('正在检修');
						$button.addClass('accepted');
					}else if(obj[attr]['state'] == 3){
						$button.html('已完成');
						$button.addClass('done');
					}
				}
				//接受任务按钮
				$('.receive').on('click',function(){
					var $this = $(this);
					$.ajax({
						type:"get",
						url:"http://222.24.14.111:8080/container/task?taskNo="+$(this).attr('id'),
						async:true,
						success:function(){
							$this.html('正在检修');
							$this.addClass('accepted');
						}
					});
				});
				//点击a链接变色
				$('.content li .introduce p a').click(function(){
					$(this).css('color','#93cef1');
					$(this).parent().css('color','#93cef1');
				})
			}
		});
	}
	//点击维保管理
	$("nav ul li:eq(1)").click(function(){
		$(".content").empty(); 
		$.ajax({
			type:"post",
			url:"http://222.24.14.111:8080/container/maintence",
			async:true,
			success:function(message){
				var obj = eval(message);
				for(var attr in obj){
					var $content = $('.content');
					var $li = $("<li class='clearfix'></li>");
					$content.append($li);
					var $Img = $("<img src=''>");
					$li.append($Img);
					$Img.attr("src",obj[attr]['Pic']);
					var $introduce = $('<div class="introduce"></div>');
					$li.append($introduce);
					var $p = $('<p class="name">任务名称:</p>');
					$introduce.append($p);
					var $span = $('<span></span>');
					$p.append($span);
					var $a = $("<a href='#'></a>");
					$span.append($a);
					$a.html(obj[attr]['address']);
					var $p = $('<p class="time">时间:</p>');
					$introduce.append($p);
					var $span = $('<span></span>');
					$p.append($span);
					$span.html(obj[attr]['time']);
					var $button = $('<button></button>');
					$li.append($button);
					$button.attr('id',obj[attr]['taskNo']);
					$button.html('开始检修');
					$button.addClass('receive');
				}
				$('.receive').click(function(){
					$.ajax({
						type:"post",
						url:"http://222.24.14.111:8080/container/maintence?taskNo="+$(this).attr('id'),
						async:true,
					});
				})
				//点击a链接变色
				$('.content li .introduce p a').click(function(){
					$(this).css('color','#93cef1');
					$(this).parent().css('color','#93cef1');
				})
			}
		});
		$('.glide').animate({left:"50%"},200);
	})
})();


/*样例
 * //1.任务管理字段--task
 * 		//请求（post）
		 * 	//Pic--图片网络地址
		 *  //address--地址
		 *  //time--时间
		 * 	//taskNo--任务编号
		 *  //state--任务管理状态 ，分为三种状态
		 * 		1--接受任务
		 * 		2--正在检修
		 * 		3--已完成
		 * task = [{
			"Pic":"A.jpg",
			"address":"A号楼",
			"time":"2014-10-10",
			"taskNo":"000001",
			"state":1},
			{",
			"time":"2014-11-10",
			"taskNo":"000
			"Pic":"B.jpg",
			"address":"B号楼002",
			"state":2},
			{
			"Pic":"C.jpg",
			"address":"C号楼",
			"time":"2014-11-10",
			"taskNo":"000003",
			"state":3
			}
		]
		//发送（get）
			task--接受任务的编号
	//2.维保管理字段--maintence
		请求（post）
			//Pic--图片网络地址
		 *  //address--地址
		 *  //time--时间
		 * 	//taskNo--任务编号
			maintence = [{
				"Pic":"A.jpg",
				"address":"A号楼",
				"time":"2014-10-10",
				"taskNo":"000001",
				},
				{
				"Pic":"B.jpg",
				"address":"B号楼",
				"time":"2014-11-10",
				"taskNo":"000002",
				},
				{
				"Pic":"C.jpg",
				"address":"C号楼",
				"time":"2014-11-10",
				"taskNo":"000003",
				}
			]
		发送（get）
			maintence -- 点击开始维修后返回的任务编号
*/
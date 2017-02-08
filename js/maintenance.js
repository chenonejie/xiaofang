var taskID,state;
$('.finish').addClass('disabled');
$('.finish').on('click',function(){
	if(state == 0){
		/*$.ajax({
			method:'post',
			url:'',
			data:taskID,
			success:function(){
				window.location.href ="maintenanceFinish.html";
			},
			error:function(){
				console.log('error');
			}
			
		});*/
	}else{
		alert('还有未完成的任务');
	}
})

$("input[type='button']").on('click', function () {
   $('#form').submit();
});
$('.gas i:last-child').on("click",function(){
	$(this).toggleClass('color');//判断是否有color这个类如果没有就加上，有就删除
	for(var i = 0; i < $('.gas i:last-child').length; i ++){
		if(!$('.gas i:last-child').eq(i).hasClass('color')){
			state = 1;
			$('.finish').addClass('disabled');
			break;
		}
	}
	if(i == $('.gas i:last-child').length){
		state = 0;
		$('.finish').removeClass('disabled');
	}
})
//var Index =[
//	{
//		"taskTitle":"灭火器",
//		"describeContent":"喷灌处有磨损，此处灭火器存储量不足",
//		"fireImg":"../img/fireHydrant.jpg"
//		"pipelineMaintenance":"管道已经维修完成"
//	}
//];
//A(Index);
//function A(Index){
//						$('.task-title').html(Index[0]['taskTitle']);
// 						$('.content').html(Index[0]['describeContent']);
// 						$('.fireHydrant').attr("src",Index[0]['fireImg']);
//}
$('document').ready(function(){
	$ajax({
				type: "get",
   				url: 'http://123.206.204.163.2333/erbao/classify/goodsItem',
   				dataType:'json',
   				async:true,
   				success:function(result){
   					var data = JSON.parse(resut);
   				//	taskID = data.
   					$.each(data,function(commentIndex, comment){
   						$('.task-title').html(comment['taskTitle']);
   						$('.content').html(comment['describeContent']);
   						$('.fireHydrant').attr('src', comment['fireImg']);
   						$('.makeupGas').html(comment['makeupGas']);
   						$('.pipelineMaintenance').html(['pipelineMaintenance']);
   					})
   				},
   				error:function(jqXHR){
   					alert('服务器连接失败'+jqXHR.status);
   				}
   				
	})	
})

//$('.finish').click(function(){
//	type:"post",
//	url:"",
//	dataType:"json",
//	async:true,
//	success:function(result){
//		console.log();
//		
//	}
//	
//})
window.onload = function(){
   //字体设置
   fontSelf();
};
window.onresize = function () {
   fontSelf();
};
function fontSelf() {
   var wHtml = document.getElementById('html');
   var w = document.documentElement.clientWidth;
   w =  w > 768 ? 768 : document.documentElement.clientWidth;
   wHtml.style.fontSize = w * 0.045 + 'px';
}
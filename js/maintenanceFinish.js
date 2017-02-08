$('.finish').on('click',function(){
	console.log($('.write').val());
	
	if($('.write').val() == "" ){
		alert('请添加描述');
	}
	
})
//上传照片
$("input[type='file']").on('change', function () {

   $('#form').submit();
   $ajax({
   	type: "get",
     url: 'http://123.206.204.163.2333/erbao/classify/goodsItem',
     dataType:'json',
     async:true,
     success:function(result){
     	var data = JSON.parse(resut);
     	each(data,function(commentIndex,comment){
     		$('.img').attr('src',comment['fireImg']);
     	})
     	
     }
   })
});
//var mainTenance =[
//	{
//		'maintenanceName':"未修下水道",
//		'maintenanceAddress':"陕西省西安市西安邮电大学B楼西北角"
//	}
//
//]
//attr(mainTenance);
//function attr(mainTenance){
//	$('.task-title').html(mainTenance[0]['maintenanceName']);
//	$('.addresss').html(mainTenance[0]['maintenanceAddress']);
//}
$(document).ready(function(){
	$.ajax({
				type: "get",
     				url: 'http://123.206.204.163.2333/erbao/classify/goodsItem',
     				dataType:'json',
     				async:true,
     				success:function(result){
     					var data = JSON.parse(resut);
     					$.each(data,function(commentIndex,comment){
     						$('.task-title').html(comment['maintenanceName']);
     						$('address').html(comment['maintenanceAddress']);
     					})
     				},
     				error:function(jqXHR){
   					alert('服务器连接失败'+jqXHR.status);
   				}
	})
})


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
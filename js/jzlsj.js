$(function(){
	$('.img li:first').siblings().hide();
	$('.title li:first').siblings().hide();
	$('.rbox li:first').css('background','#FF4F01');
	var t;
	var index = 0;
	t = setInterval(play,1000);
	function play(){
		index++;
		if (index>5) {
			index = 0;
		}
		$('.img li').eq(index).show().siblings().hide();
		$('.title li').eq(index).show().siblings().hide();
		$('.rbox li').eq(index).css('background','#FF4F01').siblings().css('background','#fff');
	}
	$('.img li,.title li,.rbox li').mouseover(function(){
		clearInterval(t);
	}).mouseout(function(){
		t = setInterval(play,1000);
	})
	$('.rbox li').mouseover(function(){
		clearInterval(t);
		$(this).css('background','#FF4F01').siblings().css('background','#fff');
		var index = $(this).index();
		$('.img li').eq(index).show().siblings().hide();
		$('.title li').eq(index).show().siblings().hide();
	})
})
function resize(){
	$('html').css('font-size',($(window).width())/10+'px');
};
$(function(){
	$('.img li:first').show();
	$('.maptitle li:first').show();
	$('.mapli li:first').css('background','red');
	var t;
	var index = 0;
	t = setInterval(play,2000);
	function play(){
		index++;
		if (index>5) {
			index = 0;
		}
		$('.img li').eq(index).show().siblings().hide();
		$('.maptitle li').eq(index).show().siblings().hide();
		$('.mapli li').eq(index).css('background','red').siblings().css('background','#0068b7');
	}
	$(".map").on("touchstart", function(e) {
		clearInterval(t);  
	    // 判断默认行为是否可以被禁用
	    if (e.cancelable) {
	        // 判断默认行为是否已经被禁用
	        if (!e.defaultPrevented) {
	            e.preventDefault();
	        }
	    }   
	    startX = e.originalEvent.changedTouches[0].pageX,
	    startY = e.originalEvent.changedTouches[0].pageY;
	});
	$(".map li").on("touchend", function(e) {         
	    // 判断默认行为是否可以被禁用
	    if (e.cancelable) {
	        // 判断默认行为是否已经被禁用
	        if (!e.defaultPrevented) {
	            e.preventDefault();
	        }
	    }               
	    moveEndX = e.originalEvent.changedTouches[0].pageX,
	    moveEndY = e.originalEvent.changedTouches[0].pageY,
	    X = moveEndX - startX,
	    Y = moveEndY - startY;
	    //左滑
	    if ( X > 0 ) {
	    	var index = $(this).index();
	    	$('.img li').eq(index-1).show().siblings().hide();
			$('.maptitle li').eq(index-1).show().siblings().hide();
			$('.mapli li').eq(index-1).css('background','red').siblings().css('background','#0068b7');
			t = setInterval(play,2000); 
	    }
	    //右滑
	    else if ( X < 0 ) {
	        var index = $(this).index();
	        if (index<4) {
		        $('.img li').eq(index+1).show().siblings().hide();
			    $('.maptitle li').eq(index+1).show().siblings().hide();
			    $('.mapli li').eq(index+1).css('background','red').siblings().css('background','#0068b7');
	        }else{
	       		$('.img li').eq(0).show().siblings().hide();
			    $('.maptitle li').eq(0).show().siblings().hide();
			    $('.mapli li').eq(0).css('background','red').siblings().css('background','#0068b7');
	        }
		   t = setInterval(play,2000);    
	    }
	});
})
$(function(){
	var a = true;
	$('.search').click(function(){
		a = !a;
		if (a) {
			$('.searbg').hide();
		}else{
			$('.searbg').show();
		}
	})
})

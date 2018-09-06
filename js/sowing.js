$(function(){
	$('#bs').mouseover(function(){
		$(this).addClass('point');
		$(this).siblings().removeClass('point');
		$('#bscont').show();
		$('#bscont').siblings().hide();
		$('#bslink').show();
		$('#xqlink,#bmlink,#splink').hide();
	});
	$('#xq').mouseover(function(){
		$(this).addClass('point');
		$(this).siblings().removeClass('point');
		$('#xqcont').show();
		$('#xqcont').siblings().hide();
		$('#xqlink').show();
		$('#bslink,#bmlink,#splink').hide();
	});
	$('#bm').mouseover(function(){
		$(this).addClass('point');
		$(this).siblings().removeClass('point');
		$('#bmcont').show();
		$('#bmcont').siblings().hide();
		$('#bmlink').show();
		$('#xqlink,#bslink,#splink').hide();
	});
	$('#sp').mouseover(function(){
		$(this).addClass('point');
		$(this).siblings().removeClass('point');
		$('#spcont').show();
		$('#spcont').siblings().hide();
		$('#splink').show();
		$('#xqlink,#bmlink,#bslink').hide();
	});
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
});
$(function(){
	$('.somemore:first').show();
	$('.somemore2:first').show();
	$('.art:first').show();
	$('.art2:first').show();
	$('#p1').mouseover(function(){
		$(this).addClass('xborder');
		$(this).siblings().removeClass('xborder');
		$('#a1').show();
		$('#a2,#a3,#a4').hide();
		$('#art1').show();
		$('#art2,#art3,#art4').hide();
	})
	$('#p2').mouseover(function(){
		$(this).addClass('xborder');
		$(this).siblings().removeClass('xborder');
		$('#a2').show();
		$('#a1,#a3,#a4').hide();
		$('#art2').show();
		$('#art1,#art3,#art4').hide();
	})
	$('#p3').mouseover(function(){
		$(this).addClass('xborder');
		$(this).siblings().removeClass('xborder');
		$('#a3').show();
		$('#a2,#a1,#a4').hide();
		$('#art3').show();
		$('#art2,#art1,#art4').hide();
	})
	$('#p4').mouseover(function(){
		$(this).addClass('xborder');
		$(this).siblings().removeClass('xborder');
		$('#a4').show();
		$('#a2,#a3,#a1').hide();
		$('#art4').show();
		$('#art2,#art3,#art1').hide();
	})
	$('#p5').mouseover(function(){
		$(this).addClass('xborder');
		$(this).siblings().removeClass('xborder');
		$('#a5').show();
		$('#a6,#a7').hide();
		$('#art5').show();
		$('#art6,#art7').hide();
	})
	$('#p6').mouseover(function(){
		$(this).addClass('xborder');
		$(this).siblings().removeClass('xborder');
		$('#a6').show();
		$('#a5,#a7').hide();
		$('#art6').show();
		$('#art5,#art7').hide();
	})
	$('#p7').mouseover(function(){
		$(this).addClass('xborder');
		$(this).siblings().removeClass('xborder');
		$('#a7').show();
		$('#a6,#a5').hide();
		$('#art7').show();
		$('#art6,#art5').hide();
	})
})
$(function(){
	$('#fta1').show();
	$('#ftdl1').show();
	$('#ft1').mouseover(function(){
		$(this).addClass('boxshow').removeClass('boxhide');
		$(this).siblings().addClass('boxhide').removeClass('boxshow');
		$('#fta1').show();
		$('#fta2').hide();
		$('#ftdl1').show();
		$('#ftdl2').hide();
	})
	$('#ft2').mouseover(function(){
		$(this).addClass('boxshow').removeClass('boxhide');
		$(this).siblings().addClass('boxhide').removeClass('boxshow');
		$('#fta2').show();
		$('#fta1').hide();
		$('#ftdl2').show();
		$('#ftdl1').hide();
	})
	$('#rx1').mouseover(function(){
		$(this).addClass('boxhide2');
		$('#rx2').removeClass('boxhide2');
		$('#rxbox1').show();
		$('#rxbox2').hide();
	})
	$('#rx2').mouseover(function(){
		$(this).addClass('boxhide2');
		$('#rx1').removeClass('boxhide2');
		$('#rxbox2').show();
		$('#rxbox1').hide();
	})
})
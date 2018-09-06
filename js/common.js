<!--
var timeout         = 500;
var closetimer		= 0;
var ddmenuitem      = 0;

// open hidden layer
function mopen(id)
{	
	// cancel close timer
	mcancelclosetime();

	// close old layer
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
	// get new layer and show it
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.visibility = 'visible';

}
// close showed layer
function mclose()
{
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}

// go close timer
function mclosetime()
{
	closetimer = window.setTimeout(mclose, timeout);
}

// cancel close timer
function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

// close layer when click-out
document.onclick = mclose; 

 
// var agent = navigator.userAgent;
// if(agent.search(/iPhone|Android/) > 0){
//   location.href = '/m';
// }
// -->
// 栏目固定
$(function(){
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		if (scrollTop>=200) {
			$('#hbottom').css({"top":"0","position":"fixed"});
			$('#nav').css({"top":"0","position":"fixed","left":"50%","margin-left":"-620px"});
			$('#goTop').css('display','inherit');
		}else{
			$('#hbottom,#nav').css({"top":"inherit","position":"relative","left":"0","margin":"0 auto"});
			$('#goTop').css('display','none');
		}
	})
}) 

//图片自动滚动
$(function(){
    $('#Marquee_x').jcMarquee({ 'marquee':'x','margin_right':'10px','speed':20 });
});

function s_click(obj) {
    var num = 0;
    for (var i = 0; i < obj.options.length; i++) {
        if (obj.options[i].selected == true) {
            num++;
        }
    }
    if (num == 1) {
        var url = obj.options[obj.selectedIndex].value;
        window.open(url);
    }
}
function replace(str){
	document.getElementById('quote').innerHTML = str;
}
$(function(){
	$('body').click(function(e) {
	    var target = $(e.target);
	    if(!target.is('#quote') && !target.is('#search')) {
	        if ( $('#search').is(':visible') ) {  
	            $('#search').hide();
	            $('#sjimg img').attr('src','picture/dsj.png');                  
	        }
	    }else{
	    	$('#search').show();
			$('#sjimg img').attr('src','picture/zsj.png');
	    }
	});
})
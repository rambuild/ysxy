$(function(){
	$("#slider").easySlider( {
			slideSpeed: 500,
			paginationSpacing: "15px",
			paginationDiameter: "16px",
			paginationPositionFromBottom: "30px",
			slidesClass: ".slides",
			controlsClass: ".controls",
			paginationClass: ".pagination"					
	});
	$('#slider').hover(function(){
		$('.controls').fadeIn();
	},function(){
		$('.controls').fadeOut();
	})
	/*导航栏*/
	$('.nav .nav-list').hover(function(){
		$(this).find('.nav-items').show();
	},function(){
		$(this).find('.nav-items').hide();
	})
	/*时间控件年月日*/
	function getYear(date){
		return date+1900;
	}
	function RunGLNL2746(){          
		var today=new Date();          
		var d=new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
		var nian = getYear(today.getYear())+"年"+(today.getMonth()+1)+"月" +today.getDate()+"日";
		$('.time').html(nian+"&nbsp;&nbsp;&nbsp;&nbsp;"+d[today.getDay()]);
	}RunGLNL2746();
	/*时间控件时分秒*/
	function formatTime(date){
		if(date<=12){
			date = date;
		}else{
			date = date-12;
		}
		return date;
	}
	function addzero(date){
		if(date<10){
			date = '0' + date;
		}
		return date
	}
	function time(){
		var now = new Date(),
			now_hour_noformat = now.getHours(),
			now_hour = formatTime(now.getHours()),
			now_min = now.getMinutes(),
			now_sec = now.getSeconds();
		var noon = '';
		if(now_hour_noformat > 12){
			noon = '下午'
		}else if(now_hour == 12){
			noon = '中午'
		}else{
			noon = '上午'
		}
		$('.time_detail').html("&nbsp;&nbsp;"+noon+addzero(now_hour)+':'+addzero(now_min)+':'+addzero(now_sec))
	}
	time()
	setInterval(function(){
		time()
	},1000)
})
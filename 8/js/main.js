$(function(){
	function init(){
		var width = $('.nav>ul').width();
		$('.nav-items').css({
			"width":width
		})
	}
	init();
	$('.nav .nav-list').hover(function(){
		$(this).find('.nav-items').show();
	},function(){
		$(this).find('.nav-items').hide();
	})
	/*banner特效*/
	 function c() {
        a.bullets.eq(0).addClass("firsrCurrent")
    }
    var b, a = new Swiper(".apple-banner .swiper-container", {
        autoplay: 3e3,
        speed: 1e3,
        loop: !0,
        runCallbacksOnInit: !1,
        watchSlidesProgress: !0,
        pagination: ".apple-banner .swiper-pagination",
        paginationClickable: !0,
        paginationBulletRender: function(a, b, c) {
            return '<li class="' + c + '"><span><i></i></span></li>'
        },
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        onProgress: function(a) {
            var b, c, d, e, f, g;
            for (b = 0; b < a.slides.length; b++) {
                for (c = a.slides.eq(b), d = c[0].progress, d > 0 ? (e = .9 * d * a.width, scale = 1 - .1 * d, d > 1 && (scale = .9), txtPositionX = 0, txtPositionY = 30 * d + "px") : (e = 0, scale = 1, txtPositionX = 1e3 * -d + "px", txtPositionY = 0), f = c.find(".txt"), g = 0; g < f.length; g++) f.eq(g).transform("translate3d(" + txtPositionX + "," + txtPositionY + ",0)");
                c.transform("translate3d(" + e + "px,0,0) scale(" + scale + ")")
            }
        },
        onSetTransition: function(a, b) {
            var c, d, e;
            for (c = 0; c < a.slides.length; c++) for (slide = a.slides.eq(c), slide.transition(b), d = slide.find(".txt"), e = 0; e < d.length; e++) d.eq(e).transition(b)
        },
        onSlideChangeStart: function(a) {
            a.autoplaying && (a.bullets.eq(a.realIndex - 1).addClass("replace"), a.bullets.eq(a.realIndex - 1).removeClass("current firsrCurrent"), a.bullets.eq(a.realIndex).addClass("current"), 0 == a.realIndex && a.bullets.removeClass("replace"))
        },
        onAutoplayStop: function(a) {
            a.$(".autoplay").removeClass("autoplay")
        }
    });
    for (b = 0; b < a.slides.length; b++) a.slides[b].style.zIndex = b;
    setTimeout(c, 1)
	/**********banner*****/
    function setHeight(){
        var width = $('.show_list').width();
            $('.show_list').css({
            "height":width
        })
    }setHeight();  
    $('.nav .nav-list').hover(function(){
        $(this).addClass('actives').siblings().removeClass('actives')
    }, function(){
        $('.nav-list').removeClass('actives').eq(0).addClass('actives')
    })
    /*HOVER预览特效*/
    $('.show_1').hover(function(e){
            var step = 10;
            var tip = '<div class="tip"><img src="./images/show_1.jpg"></div>'
            $('body').append(tip)
            $('.tip').css({
                    "position":"absolute",
                    "left":e.pageX+step+'px',
                    "top":e.pageY+step+'px'
                })
        },function(){
            $('.tip').remove()
        }).mousemove(function(e){
            var step = 10;
            $('.tip').css({
                    "position":"absolute",
                    "left":e.pageX+step+'px',
                    "top":e.pageY+step+'px'
                })
        })
        $('.show_2').hover(function(e){
            var step = 10;
            var tip = '<div class="tip"><img src="./images/show_2.jpg"></div>'
            $('body').append(tip)
            $('.tip').css({
                    "position":"absolute",
                    "left":e.pageX+step+'px',
                    "top":e.pageY+step+'px'
                })
        },function(){
            $('.tip').remove()
        }).mousemove(function(e){
            var step = 10;
            $('.tip').css({
                    "position":"absolute",
                    "left":e.pageX+step+'px',
                    "top":e.pageY+step+'px'
                })
        })
        $('.show_3').hover(function(e){
            var step = 10;
            var tip = '<div class="tip"><img src="./images/show_3.jpg"></div>'
            $('body').append(tip)
            $('.tip').css({
                    "position":"absolute",
                    "left":e.pageX+step+'px',
                    "top":e.pageY+step+'px'
                })
        },function(){
            $('.tip').remove()
        }).mousemove(function(e){
            var step = 10;
            $('.tip').css({
                    "position":"absolute",
                    "left":e.pageX+step+'px',
                    "top":e.pageY+step+'px'
                })
        })
})
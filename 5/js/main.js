$(function(){
	


    $('#slider').hover(function(){
        $('.controls').fadeIn();
    },function(){
        $('.controls').fadeOut();
    })
    $('.nav .nav-list').hover(function(){
        $(this).find('.nav-items').show();
    },function(){
        $(this).find('.nav-items').hide();
    })
    $('.nav .nav-list').hover(function(){
        $(this).addClass('actives').siblings().removeClass('actives')
    }, function(){
        $('.nav_bar li').removeClass('actives');
    })
    function initH(){
        var a = $('.newslist').width();
        $('.newslist').css({
            height:a
        })
    }
    initH();
    function setHeight(){
        var width = $('.show_list').width();
            $('.show_list').css({
            "height":width
        })
    }setHeight();
})

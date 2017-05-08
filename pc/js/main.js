//创建全局

var init = function () {
	nav();
	banner();
}

//banner图片切换
function banner() {
	var index = 0;
	var nextIndex;
	var timmer = null;
	var len = $(".banner ul li").length;

	function autoPlay() {
		timmer = setInterval(slider, 7000)
	}

	function slider() {
		if(index == len) {
			index = 0
		}
		nextIndex = index + 1;
		if(index == len - 1) {
			nextIndex = 0;
		}
		$(".banner ul li").eq(index).fadeOut(1000).removeClass("move");
		$(".banner ul li").eq(nextIndex).fadeIn(1000).addClass("move");
		index++;
	}
	$(".banner").hover(function() {
		$(".banner span").fadeIn(300);
	}, function() {
		$(".banner span").fadeOut(300);
	});
	$(".banner .prev").click(function() {
		if(index == 0) {
			nextIndex = len - 1;
		}
		if(index == -1) {
			index = len - 1;
		}
		nextIndex = index - 1;
		$(".banner ul li").eq(index).fadeOut(1000).removeClass("move");
		$(".banner ul li").eq(nextIndex).fadeIn(1000).addClass("move");
		index--;
		clearInterval(timmer);
		autoPlay();
	})
	$(".banner .next").click(function() {
		slider();
		clearInterval(timmer);
		autoPlay();
	})
	autoPlay();
};

//轮播图	

var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	paginationClickable: true,
	effect: 'fade',
	spaceBetween: 30,
	autoplay: 5000,
	autoplayDisableOnInteraction: false //用户操作swiper之后，是否禁止autoplay。默认为true：停止。     
});

//设置导航
var nav = function(){
	$('.nav-list li').hover(function() {
		$('ul', this).slideDown(300);
		$(this).children('a:first').addClass("active");

	}, function() {
		$('ul', this).slideUp(100);
		$(this).children('a:first').removeClass("active");
	});
};
//回到顶部
$(window).scroll(function(){
	if($(window).scrollTop()>100){
		$('.r-fixed').addClass('ani')
	}else{
		$('.r-fixed').removeClass('ani')
	}
});
$('.backTop').click(function() {
	$("html,body").animate({scrollTop:0}, 500);
}); 

init();

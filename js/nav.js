	$(function(){
		$(window).scroll(function() {
			var top = $(document).scrollTop();
			if (top < 80) $(".header-wrap").css({top: '0', position: 'relative'});
			else $(".header-wrap").css({top: '0px', position: 'fixed'});
		});
	});
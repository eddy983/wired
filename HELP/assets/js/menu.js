$(document).ready(function () {

		$(document).on("scroll", onScroll);

		$('a[href^="#"]').on('click', function (e) {
		  e.preventDefault();
			$(document).off("scroll");
			 $('a').each(function () {
				$(this).removeClass('active');
			})
			$(this).addClass('active');
			 var target = this.hash,
			 menu = target;
			 $target = $(target);
		   $('html, body').stop().animate({
				'scrollTop': $target.offset().top+2
			}, 600, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
		
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.main_menu ol li a').each(function () {
        var currLink = $(this);
       var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.main_menu ol li a').removeClass("selected");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

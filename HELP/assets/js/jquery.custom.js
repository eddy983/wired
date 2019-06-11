/*------------------------------------------------------------------
jQuery document ready
-------------------------------------------------------------------*/
$(document).ready(function () {
	
	if (jQuery.isFunction(jQuery.fn.niceScroll) ) {
		$(".sidebar").niceScroll({
			cursorcolor:'#848396',
			cursorborder:'none'
		});
	}	

	
});
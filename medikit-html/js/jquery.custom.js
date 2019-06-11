/*------------------------------------------------------------------
jQuery document ready
-------------------------------------------------------------------*/
$(document).ready(function () {
	"use strict";
	if (jQuery.isFunction(jQuery.fn.scrolla)) {
		$('.animate').scrolla();
	}
	
	// Modal login and signup
	$('.modal-toggle').on('click', function(e) {
	  e.preventDefault();
	  var modalopen = $(this).data("openpopup");
	  $('.modal--'+modalopen).toggleClass('modal--visible');
	  var modaltype = $(this).data("popup");
	  $('.modal__content--'+modaltype).toggleClass('modal__content--visible');
			$('.modal__switch').on('click', function(e) {
			  $('.modal__content').removeClass('modal__content--visible');
			  var modaltypeb = $(this).data("popup");
			  $('.modal__content--'+modaltypeb).toggleClass('modal__content--visible');
			});
	});

	$('.modal__overlay--toggle').on('click', function(e) {
	  e.preventDefault();
	  $('.modal').removeClass('modal--visible');
	  $('.modal__content').removeClass('modal__content--visible');
	});

	
});
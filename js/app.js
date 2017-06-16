$(function() {
	alert ('jQuery подключен и отлично работает!');

	$("#header__button").click(function(e) {
		$(this).toggleClass("hamburger--open");

		var dropDown = $(this).parent().next();

		$('.dropmn').not(dropDown).slideUp('slow');

		dropDown.slideToggle('slow');

		e.preventDefault();
	});
});
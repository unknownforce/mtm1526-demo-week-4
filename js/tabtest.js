// JavaScript Document

$(document).ready(function() {
	
	$('.tab-buttons a').on('click', function (ev) {
		var tabToShow = $(this).attr('href');
		console.log(tabToShow);
		
		$(tabToShow) // $('#tab-1')
		
		
	});
});
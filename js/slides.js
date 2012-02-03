// JavaScript Document

$(document).ready(function() {
	
	$('.slides img:not(:first-child)').hide();
	
	
	$('#next').on('click', function () {
		var current = $('.slides .current').index();
		var next = current + 1;
		
		if (next > $('.slides img').length - 1){
			next = 0;
		}
		
		$('.slides .current').fadeOut(500, function() {
			$('.slides img').eq(next).fadeIn(500).addClass('current');
			
			$(this).removeClass('current'); //made it shorter -> $('.slides .current').removeClass('current');'
			//$('.slides img').eq(next).addClass('current'); --> took off .addClass('current') and added it onto line 16.
		});
				
		console.log(next);
	});
	
	$('#prev').on('click', function () {
		var current = $('.slides .current').index();
		/*var prev = current - 1;
		
		if (prev < 0){
			prev = $('.slides img').length - 1;
		}
		*/
		
		
		$('.slides .current').fadeOut(500, function() {
			$('.slides img').eq(-1).fadeIn(500).addClass('current');
			
			$(this).removeClass('current'); //made it shorter -> $('.slides .current').removeClass('current');'
			//$('.slides img').eq(next).addClass('current'); --> took off .addClass('current') and added it onto line 16.
		});
				
		//console.log(prev);
	});
});
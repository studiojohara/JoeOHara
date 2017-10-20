$('.actions').click(function() {
	$('body').css('background-color', '#343d46');
	$('body, p, h3').css('color', '#ffffff');
});

$('.slideUp').click(function() {
	$('.slideUpBox').slideUp('slow');
});

$('.slideDown').click(function() {
	$('.slideDownBox').slideDown('fast');
});

$('.toggle').click(function() {
	$('.toggleBox').slideToggle('800');
});

$('#showBoxes').click(function() {
	$('.box').show();
});

$('#hideBoxes').click(function() {
	$('.box').hide();
});

$('h2.clickMe').click(function(event) {
$('ul').children().css({
	'font-weight' : 'bold' ,
	'font-size' : 16
	});
});

$('img').click(function(event) {
	$('img').attr('src', 'http://www.zastavki.com/pictures/originals/2013/_SWAG_on_a_gray_background_047286_.png');
});




//http://www.zastavki.com/pictures/originals/2013/_SWAG_on_a_gray_background_047286_.png
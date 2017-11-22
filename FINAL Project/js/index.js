$(document).ready(function() {

var headerHeight = $('header').height();
$('body').css('margin-top', headerHeight+'px');

$('.hamburgerMenu').click(function() {
	$('.menu').slideToggle('800');
});

    //smooth window scroll
    $("nav a").click(function(e) {
        var id = $(this).attr('href');
        var headerHeight = $('header').height();

        $('html, body').animate({
            scrollTop: $(id).offset().top - headerHeight
        }, 1500);

        e.preventDefault();
    });

});
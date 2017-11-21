$(document).ready(function() {

$('.hamburgerMenu').click(function() {
	$('.menu').slideToggle('800');
});

    //Window scroll
$("nav.toggleNav a").click(function(e) {
    var id = $(this).attr('href');

     $('html, body').animate({
        scrollTop: $(id).offset().top
     }, 2000);

       e.preventDefault();
});

    $('a.external-url').live('click', function(e){
  window.open(this.href);
  e.preventDefault(); //or return false;
});

})
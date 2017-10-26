//check form submit

//get valueof input field

//if cityType, then change background

//check background change

//stop form from submitting

$(document).ready(function() {
	$('form').submit(function(event) {
		var inputField = $('input').val();

        console.log(inputField);

});

$('body').attr('class');

if(inputfield == 'New York' || inputfield == 'NYC' || inputfield == 'New York City') {
	$('body').css('background' 'url"/images/nyc.jpg"')
}

        event.preventDefault();
    });
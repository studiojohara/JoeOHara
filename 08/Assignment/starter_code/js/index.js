var linkElements = document.getElementsByTagName('a');


//stops links from jumping on page
for (var i=0; i<linkElements.length; i++) {
	linkElements[i].onclick = function(event) {
		event.preventDefault();
	}
}

//toggle between readmore and readless
var readMoreElement = document.getElementsByClassName('readmore');
var readLessElement = document.getElementsByClassName('readless');
var showThisElement = document.getElementsByID('show-this-on-click');

//console.dir(readMoreElement); //array
//console.dir(readLessElement); //array
//console.dir(showThisElement); //object


readMoreElement[0].onclick = function() {
	readMoreElement[0].style.display = 'none';
	readLessElement[0].style.display = 'block';
	showThisElement.style.display = 'block';
};

readLessElement[0].onclick = function () {
	readMoreElement[0].style.display = 'block';
	readLessElement[0].style.display = 'none';
	showThisElement.style.display = 'none';
};

//show learn more text
var learnMoreElement = document.getElementsByClassName('learnmore')
var learnMoreTextElement = document.getElementsById('learnmoretext')

console.dir(learnMoreElement);
console.dir(learnMoreTextElement);

learnMoreElement[0].onclick = function(event) {
	learnMoreElement[0].style.display = 'none';
	learnMoreTextElement.style.display = 'block';
	event.preventDefault();
}
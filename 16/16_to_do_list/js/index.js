$(document).ready(function() {

	var itemCount = 0;

	//do something when the form is submitted
	$('#addTodoList').submit(addTodoListItem);
	$('#clearList').click(emptyTodoList);
	$('#clearCompletedList').click(removeCompletedTodoListItems);
	$('#todos').on('click', '.remove', removeTodoListItem);
	$('#todos').on('click', '.edit', editTodoListItem);
	$('#todos').on('blur', '.editor', saveEditedTodoListItem);
	$('#todos').on('click', 'li', markTodoListItemAsComplete)



	//API Functions
	function addTodoListItem() {
		//get the value of the input field
		var item = $('#addTodoItem').val();

		//append the item to the unordered list
		$('#todos').append('<li><span class="item">'+item+'</span><a class="edit">Edit</a><a class="remove">Remove</a></li>');

		updateNumberOfTodoListItems();
	}



	function removeTodoListItem() {
		$(this).parents('li').remove();
	}



	function editTodoListItem() {
		var editClicked = $(this).parents('li');
		var itemContent = $(this).siblings('.item').text();

		$(editClicked).html('<form class="editor" action=""><input type="text" value=" '+itemContent+' "/></form>');
	}



	function saveEditedTodoListItem() {
		var newItem = $(this).find('input').val();
		var listItem = $(this).parents('li');

		$(listItem).html('<li><span class="item">'+newItem+'</span><a class="edit">Edit</a><a class="remove">Remove</a></li>');
	}



	function markTodoListItemAsComplete() {
		$(this).toggleClass('done');

		updateNumberOfTodoListItems();
	}



	function emptyTodoList() {
		$('#todos').empty();

		updateNumberOfTodoListItems();

	}




	function removeCompletedTodoListItems() {
		$('.done').remove();
	}




	function updateNumberOfTodoListItems() {
		var count = $('#todos li').not('.done').length;
		$('#count').html(count);

	}





});











		//console.log('i am working')




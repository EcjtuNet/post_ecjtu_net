$(document).ready(function() {
	var nav = $('#nav'),
		south = $('#south'),
		north = $('#north'),
		sort = $('#sort'),
		type = $('#sort').find('a');
	// console.log(type);
	type.bind('click', function(event) {
		event.preventDefault();
		URL = "../api.php/list?type=" + $(this).text();
		// console.log(URL);
	});
});
$(document).ready(function() {
	var nav = $('#nav'),
		south = $('#south'),
		north = $('#north'),
		sort = $('#sort'),
		type = $('#sort').find('a');
	// console.log(type);
	south.bind('click', function(event) {
		event.preventDefault();
		$.ajax({
			url: "http://post.ecjtu.net/api.php/list?area=南区",
			type: 'GET',
			dataType: 'jsonp',
			jsonpCallback: 'func',
		})
		$('#page ul li').removeClass('select')
			.eq(0).addClass('select');
	});
	north.bind('click', function(event) {
		event.preventDefault();
		$.ajax({
			url: "http://post.ecjtu.net/api.php/list?area=北区",
			type: 'GET',
			dataType: 'jsonp',
			jsonpCallback: 'func',
		})
		$('#page ul li').removeClass('select')
			.eq(0).addClass('select');
	});
	type.bind('click', function(event) {
		event.preventDefault();
		var URL = "http://post.ecjtu.net/api.php/list?type=" + $(this).text();
		// console.log(URL);
		$.ajax({
			url: URL,
			type: 'GET',
			dataType: 'jsonp',
			jsonpCallback: 'func',
		})
		$('#page ul li').removeClass('select')
			.eq(0).addClass('select');
	});
});
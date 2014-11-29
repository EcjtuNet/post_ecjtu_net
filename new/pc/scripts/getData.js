$(document).ready(function() {
	var searchInfo = {
		page: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		limit: 10,
		type: ['包裹', '挂号信', '印刷品', '汇款单', '退件'],
		area: ['南区', '北区'],
		key: '',
		time_before: '',
		time_after: ''
	}
	getData();
	/*var JSONP = document.createElement('script');
		JSONP.type = 'text/javascript';
		JSONP.src = URL;
	document.getElementsByTagName('head')[0].appendChild(JSONP);
	$.ajax({
		url: URL,
		type: 'GET',
		dataType: 'json',
		data: '',
		success: function (data) {
			console.log(data)
		},
	})
	.done(function() {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});*/
});

function getData () {
	$.get(URL, function(data) {
		console.log(data);
	});
}

function pageDisp (box) {
	for (var i = 0; i < box.children('ul').length; i++) {
		listDisp(i);
	};
}

function listDisp (value) {
	var num = $(this).children('.num'),
		name = $(this).children('.name'),
		sn = $(this).children('.sn'),
		sort = $(this).children('.sort'),
		date = $(this).children('.date');
	num.text(data[i].info_id);
	name.text(data[i].addressee);
	sn.text(data[i].area);
	sort.text(data[i].type);
	date.text(data[i].time);
}
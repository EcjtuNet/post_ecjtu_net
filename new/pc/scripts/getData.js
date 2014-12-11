$(document).ready(function() {
	var URL = "http://post.ecjtu.net/api.php/list?";
	getData(URL);
});

function getData (url) {
	var lmt = "&limit=12";
	$.ajax({
		url: url + 'page=1' + lmt,
		type: 'GET',
		dataType: 'jsonp',
		data: '',
		jsonpCallback: 'func',
	})
	// .done(function() {
	// 	console.log("success");
	// })
	// .fail(function() {
	// 	console.log("error");
	// })
	// .always(function() {
	// 	console.log("complete");
	// });
}

function func (json) {
	var dispBox = $('#list ul');
	var page = Math.floor(json.length % $('#list ul').length);
	dispInfo(dispBox, json);
	URL = "http://post.ecjtu.net/api.php/list?";
}

function dispInfo (parent, data) {
	var cal, // 存放到件日期
		idx; // 存放序号
	var num = parent.find('.num'),  // 序号
		name = parent.find('.name'),// 姓名
		sn = parent.find('.sn'),    // 校区
		sort = parent.find('.sort'),// 类型
		date = parent.find('.date');// 到件日期
	// console.log(num);
	for (var i = 0; i < parent.length; i++) {
		idx = data.indexOf(data[i]) + 1;
		num.eq(i).text(idx);

		name.eq(i).text(data[i].addressee);
		sn.eq(i).text(data[i].area);
		sort.eq(i).text(data[i].type);

		cal = data[i].time.substr(0, 10);
		date.eq(i).text(cal);
	};
}
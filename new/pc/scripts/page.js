$(document).ready(function() {
	var	pageBox = $('#page'),
		pageList = $('#page ul li'),
		arrowPre = $('#arrowPre'),
		arrowNex = $('#arrowNex');
	var page, pageEnd;
	pageEnd = 10;
	pageEndIn(pageList, pageEnd);
	pageClick(pageList, 'select');
	arrowClick(arrowPre, arrowNex, pageList, 'select');
});

function pageEndIn (list, num) {
	var i = list.length - 1;
	// console.log(list.eq(i-1))
	list.eq(i).children('a').text(num);
}

function pageClick(list, className) { // 单击页码切换分页
	list.bind('click', function(event) {
		event.preventDefault();
		$(this).parent().children().removeClass(className);
		$(this).addClass(className);
	});
}

function arrowClick(pre, nex, list, className) { // 单击箭头切换分页
	var arrowTop = false,
		arrowBot = false;
	var i;
	var len = list.length;
	// console.log(len)
	pre.click(function(event) {
		event.preventDefault();
		for (i = 0; i < len; i++) {
			// console.log(list.eq(i))
			if (list.eq(i).hasClass(className)) {
				// console.log(i);
				break;
			}
		}
		// console.log()
		if (list.eq(i-1).length != 0 && i > 0) {
			list.eq(i).removeClass(className)
			list.eq(i-1).addClass(className);
		};
	});
	nex.click(function(event) {
		event.preventDefault();
		for (i = 0; i < len; i++) {
			// console.log(list.eq(i))
			if (list.eq(i).hasClass(className)) {
				// console.log(i);
				break;
			}
		}
		if (list.eq(i+1).length != 0) {
			// console.log(i);
			// console.log(list.eq(i+1))
			list.eq(i).removeClass(className)
			list.eq(i+1).addClass(className);
		}
	});
}
$(document).ready(function() {
	function getJson(){// 获取数据
		function toArray(obj) {
			var arr = [];
			for (i in obj) {
				if(obj.hasOwnProperty(i)) arr.push(obj[i]);
			}
			return arr;
		}
	}
	function mustache(){
		var template = "<ul>{{#list}}<li class='info'><ul><li>{{addressee}}</li><li>{{area}}</li><li>{{type}}</li><li>{{time}}</li></ul></li>{{/list}}</ul>";
		var views = Mustache.render(template, list);
		$('#list').html(views);
	}
	function hasSortbg(){// 去除sort背景&缩回菜单
		$(this).siblings('.sortbg').removeClass('sortbg');
		$('#southLogo').removeClass('southLogoFocus');
		$('#northLogo').removeClass('northLogoFocus');
		$('.nav').delay(200).animate({"right": "-43%"}, 200).removeClass('menuplay');
		$('.bg').removeClass('addbg');
	}
	function notSortbg(){// 添加sort背景&缩回菜单
		$(this).addClass('sortbg').siblings().removeClass('sortbg');
		$('#southLogo').removeClass('southLogoFocus');
		$('#northLogo').removeClass('northLogoFocus');
		$('.nav').delay(200).animate({"right": "-43%"}, 200).removeClass('menuplay');
		$('.bg').removeClass('addbg');
	}
	$.getJSON('http://post.ecjtu.net/api.php/list?callback=?&limit=40&page=1', function(data) {
		getJson();
		mustache();
	});

	$contentLoadTriggered = false;
	$('#list').scroll( function() {
		var i = 1;		
		if($('#list').scrollTop() + $('#list').height() >= $(document).height()){
				var i = i+1;
					var back = window['back'] = function(data) {
						getJson();
				};
				$.getScript('http://post.ecjtu.net/api.php/list?callback=back&limit=40&page='+i);

		}		
	});	
    /*$('#search input').on('focus', function (event) {// 搜索框的focus事件
    	$(this).parent().animate({"width": "200%"}, 300);
    });*/

	$('.searchBar a').on('click', function (event) {// 控制搜索菜单的弹出
		event.preventDefault();
		$(this).parents('#header').siblings('.nav').addClass('menuplay menuoff').animate({"right":"0%"}, 200);
		$('.bg').addClass('addbg');
	});
	$('.bg').on('click',function (event) {// 控制搜索菜单的缩回
		$('.nav').animate({"right": "-43%"}, 200).removeClass('menuplay');
		$('.bg').removeClass('addbg');
	});

	/*		南北区搜索		*/
	$('#south a').on('click', function (event) {// 控制南区搜索项
		event.preventDefault();
		if ($(this).siblings('#southLogo').hasClass('southLogoFoucus')) {
			$(this).parent().siblings().children('#northLogo').removeClass('northLogoFocus');
			$('.nav').delay(200).animate({"right": "-43%"}, 200).removeClass('menuplay');
			$('.bg').removeClass('addbg');
		} else {
			$(this).siblings('#southLogo').addClass('southLogoFocus');
			$(this).parent().siblings().children('#northLogo').removeClass('northLogoFocus');
			$('#sort li').removeClass('sortbg');
			$('.nav').delay(200).animate({"right": "-43%"}, 200).removeClass('menuplay');
			$('.bg').removeClass('addbg');
		}
		$.getJSON('http://post.ecjtu.net/api.php/list?callback=?&limit=40&area=南区&page=1', function(data) {		
			getJson();
			mustache();
		});
	});
	$('#north a').on('click', function (event) {// 控制北区搜索项
		event.preventDefault();
		if ($(this).siblings('#northLogo').hasClass('northLogoFocus')) {
			$(this).parent().siblings().children('#southLogo').removeClass('southLogoFocus');
			$('.nav').delay(200).animate({"right": "-43%"}, 200).removeClass('menuplay');
			$('.bg').removeClass('addbg');
		} else {
			$(this).siblings('#northLogo').addClass('northLogoFocus');
			$(this).parent().siblings().children('#southLogo').removeClass('southLogoFocus');
			$('#sort li').removeClass('sortbg');
			$('.nav').delay(200).animate({"right": "-43%"}, 200).removeClass('menuplay');
			$('.bg').removeClass('addbg');
		}
		$.getJSON('http://post.ecjtu.net/api.php/list?callback=?&limit=40&area=北区&page=1', function(data) {
			getJson();
			mustache();
		});
	});

	/*		邮件类别分类搜索		*/
	$('#sort li#parcel').on('click', function (event) {// 包裹分类项
		event.preventDefault();
		if ( $(this).hasClass('sortbg')) {
			hasSortbg();
		} else {
			notSortbg();
		}
		$.getJSON('http://post.ecjtu.net/api.php/list?callback=?&limit=40&type=包裹&page=1', function(data) {
			getJson();
			mustache();
		});
	});

	$('#sort li#post').on('click', function (event) { // 挂号信分类项
		event.preventDefault();
		if ( $(this).hasClass('sortbg')) {
			hasSortbg();
		} else {
			notSortbg();
		}
		$.getJSON('http://post.ecjtu.net/api.php/list?callback=?&limit=40&type=挂号信&page=1', function(data) {
			getJson();
			mustache();
		});
	});

	$('#sort li#print').on('click', function (event) {// 印刷品分类项
		event.preventDefault();
		if ( $(this).hasClass('sortbg')) {
			hasSortbg();
		} else {
			notSortbg();
		}
		$.getJSON('http://post.ecjtu.net/api.php/list?callback=?&limit=40&type=印刷品&page=1', function(data) {		
			getJson();
			mustache();
		});
	});

	$('#sort li#order').on('click', function (event) {// 汇款单分类项
		event.preventDefault();
		if ( $(this).hasClass('sortbg')) {
			hasSortbg();
		} else {
			notSortbg();
		}
		$.getJSON('http://post.ecjtu.net/api.php/list?callback=?&limit=40&type=汇款单&page=1', function(data) {
			getJson();
			mustache();
		});
	});

	$('#sort li#return').on('click', function (event) {// 退件分类项
		event.preventDefault();
		if ( $(this).hasClass('sortbg')) {
			hasSortbg();
		} else {
			notSortbg();
		}
		$.getJSON('http://post.ecjtu.net/api.php/list?callback=?&limit=40&type=退件&page=1', function(data) {
			getJson();
			mustache();
		});
	});

});
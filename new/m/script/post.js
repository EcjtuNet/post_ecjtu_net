$(document).ready(function() {

	var count = 1;
	function loaded(assort){
		

		function draw() {
			count++;
			var back = window['back'] = function(data) {
				function toArray(obj) {
					var arr = [];
					for (i in obj) {
						if(obj.hasOwnProperty(i)) arr.push(obj[i]);
					}
					return arr;
				}
				var list = {list: toArray(data)};
				var template = "<ul>{{#list}}<li class='info'><ul><li>{{addressee}}</li><li>{{area}}</li><li>{{type}}</li><li>{{time}}</li></ul></li>{{/list}}</ul>";
				var views = Mustache.render(template, list);
				$('#list').append(views);
			};
			$.getScript('http://post.ecjtu.net/api.php/list?callback=back&'+assort+'&limit=40&page='+count);	
		}

		if(count === 1) {
			if( $('#list').scrollTop() + $('#list').height() >= 890 ){
				draw();
				console.log(count)
			}
		} else {
			if ($('#list').scrollTop() + $('#list').height() >= 890*count) {
				draw();
				console.log(count)
			}
		}
	}


	$.getJSON('http://post.ecjtu.net/api.php/list?callback=?&limit=40&page=1', function(data) {
		function toArray(obj) {
			var arr = [];0.
			for (i in obj) {
				if(obj.hasOwnProperty(i)) arr.push(obj[i]);
			}
			return arr;
		}
		var list = {list: toArray(data)};
		var template = "<ul>{{#list}}<li class='info'><ul><li>{{addressee}}</li><li>{{area}}</li><li>{{type}}</li><li>{{time}}</li></ul></li>{{/list}}</ul>";
		var views = Mustache.render(template, list);
		$('#list').append(views);
	});
	$('#list').bind('scroll', function(){
		$contentLoadTriggered = false;
		var count = 1;
		loaded('');
	});
	

	
    // $('#search input').on('focus', function (event) {// 搜索框的focus事件
    // 	  $(this).parent().css("width","200%");
    // });
	
	$('.searchBar').on('click', function (event) {// 控制搜索菜单的弹出
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
		$('#list ul').html('');
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
		var count = 1;
		$.getJSON('http://post.ecjtu.net/api.php/list?callback=?&limit=40&area=南区&page=1', function(data) {
			function toArray(obj) {
				var arr = [];
				for (i in obj) {
					if(obj.hasOwnProperty(i)) arr.push(obj[i]);
				}
				return arr;
			}
			var list = {list: toArray(data)};
			var template = "<ul>{{#list}}<li class='info'><ul><li>{{addressee}}</li><li>{{area}}</li><li>{{type}}</li><li>{{time}}</li></ul></li>{{/list}}</ul>";
			var views = Mustache.render(template, list);
			$('#list').append(views);
		});
		$('#list').bind('scroll', function(){
			$contentLoadTriggered = false;

			loaded('area=南区');
		});
		
	});
	$('#north a').on('click', function (event) {// 控制北区搜索项
		event.preventDefault();
		$('#list ul').html('');
		var count = 1;
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
			function toArray(obj) {
				var arr = [];
				for (i in obj) {
					if(obj.hasOwnProperty(i)) arr.push(obj[i]);
				}
				return arr;
			}
			var list = {list: toArray(data)};
			var template = "<ul>{{#list}}<li class='info'><ul><li>{{addressee}}</li><li>{{area}}</li><li>{{type}}</li><li>{{time}}</li></ul></li>{{/list}}</ul>";
			var views = Mustache.render(template, list);
			$('#list').append(views);
		});
		$('#list').bind('scroll', function(){
			$contentLoadTriggered = false;
			loaded('area=北区');
		});
	});


	/*		邮件类别分类搜索		*/
	function hasSortbg(){		
		$('#southLogo').removeClass('southLogoFocus');
		$('#northLogo').removeClass('northLogoFocus');
		$('.nav').delay(200).animate({"right": "-43%"}, 200).removeClass('menuplay');
		$('.bg').removeClass('addbg');		
	}
	function notSortbg(){
		$('#southLogo').removeClass('southLogoFocus');
		$('#northLogo').removeClass('northLogoFocus');
		$('.nav').delay(200).animate({"right": "-43%"}, 200).removeClass('menuplay');
		$('.bg').removeClass('addbg');
	}
	$('#sort li#parcel').on('click', function (event) {// 包裹分类项
		event.preventDefault();
		$('#list ul').html('');
		var count = 1;
		if ( $(this).hasClass('sortbg')) {
			$(this).siblings('.sortbg').removeClass('sortbg');
			hasSortbg();
		} else {
			$(this).addClass('sortbg').siblings().removeClass('sortbg');
			notSortbg();
		}
		$.getJSON('http://post.ecjtu.net/api.php/list?callback=?&limit=40&type=包裹&page=1', function(data) {		
			function toArray(obj) {
				var arr = [];
				for (i in obj) {
					if(obj.hasOwnProperty(i)) arr.push(obj[i]);
				}
				return arr;
			}
			var list = {list: toArray(data)};
			var template = "<ul>{{#list}}<li class='info'><ul><li>{{addressee}}</li><li>{{area}}</li><li>{{type}}</li><li>{{time}}</li></ul></li>{{/list}}</ul>";
			var views = Mustache.render(template, list);
			$('#list').append(views);
		});
		$('#list').bind('scroll', function(){
			$contentLoadTriggered = false;
			loaded('type=包裹');
		});
		
	});

	$('#sort li#post').on('click', function (event) { // 挂号信分类项
		event.preventDefault();
		$('#list ul').html('');
		var count = 1;
		if ( $(this).hasClass('sortbg')) {
			$(this).siblings('.sortbg').removeClass('sortbg');
			hasSortbg();
		} else {
			$(this).addClass('sortbg').siblings().removeClass('sortbg');
			notSortbg();
		}

		$.getJSON('http://post.ecjtu.net/api.php/list?callback=?&limit=40&type=挂号信&page=1', function(data) {
		
			function toArray(obj) {
				var arr = [];
				for (i in obj) {
					if(obj.hasOwnProperty(i)) arr.push(obj[i]);
				}
				return arr;
			}
			var list = {list: toArray(data)};
			var template = "<ul>{{#list}}<li class='info'><ul><li>{{addressee}}</li><li>{{area}}</li><li>{{type}}</li><li>{{time}}</li></ul></li>{{/list}}</ul>";
			var views = Mustache.render(template, list);
			$('#list').append(views);
		});
		$('#list').bind('scroll', function(){
			$contentLoadTriggered = false;
			loaded('type=挂号信');
		});
		
	});

	$('#sort li#print').on('click', function (event) {// 印刷品分类项
		event.preventDefault();
		$('#list ul').html('');
		var count = 1;
		if ( $(this).hasClass('sortbg')) {
			$(this).siblings('.sortbg').removeClass('sortbg');
			hasSortbg();
		} else {
			$(this).addClass('sortbg').siblings().removeClass('sortbg');
			notSortbg();
		}
		$.getJSON('http://post.ecjtu.net/api.php/list?callback=?&limit=40&type=印刷品&page=1', function(data) {
		
			function toArray(obj) {
				var arr = [];
				for (i in obj) {
					if(obj.hasOwnProperty(i)) arr.push(obj[i]);
				}
				return arr;
			}
			var list = {list: toArray(data)};
			var template = "<ul>{{#list}}<li class='info'><ul><li>{{addressee}}</li><li>{{area}}</li><li>{{type}}</li><li>{{time}}</li></ul></li>{{/list}}</ul>";
			var views = Mustache.render(template, list);
			$('#list').append(views);
		});
		$('#list').bind('scroll', function(){
			$contentLoadTriggered = false;
			loaded('type=印刷品');
		});
		
	});

	$('#sort li#order').on('click', function (event) {// 汇款单分类项
		event.preventDefault();
		$('#list ul').html('');
		var count = 1;
		if ( $(this).hasClass('sortbg')) {
			$(this).siblings('.sortbg').removeClass('sortbg');
			hasSortbg();
		} else {
			$(this).addClass('sortbg').siblings().removeClass('sortbg');
			notSortbg();
		}
		$.getJSON('http://post.ecjtu.net/api.php/list?callback=?&limit=40&type=汇款单&page=1', function(data) {
		
			function toArray(obj) {
				var arr = [];
				for (i in obj) {
					if(obj.hasOwnProperty(i)) arr.push(obj[i]);
				}
				return arr;
			}
			var list = {list: toArray(data)};
			var template = "<ul>{{#list}}<li class='info'><ul><li>{{addressee}}</li><li>{{area}}</li><li>{{type}}</li><li>{{time}}</li></ul></li>{{/list}}</ul>";
			var views = Mustache.render(template, list);
			$('#list').append(views);
		});
		$('#list').bind('scroll', function(){
			$contentLoadTriggered = false;
			loaded('type=汇款单');
		});
			
	});

	$('#sort li#return').on('click', function (event) {// 退件分类项
		event.preventDefault();
		$('#list ul').html('');
		var count = 1;
		if ( $(this).hasClass('sortbg')) {
			$(this).siblings('.sortbg').removeClass('sortbg');
			hasSortbg();
		} else {
			$(this).addClass('sortbg').siblings().removeClass('sortbg');
			notSortbg();
		}
		$.getJSON('http://post.ecjtu.net/api.php/list?callback=?&limit=40&type=退件&page=1', function(data) {
		
			function toArray(obj) {
				var arr = [];
				for (i in obj) {
					if(obj.hasOwnProperty(i)) arr.push(obj[i]);
				}
				return arr;
			}
			var list = {list: toArray(data)};
			var template = "<ul>{{#list}}<li class='info'><ul><li>{{addressee}}</li><li>{{area}}</li><li>{{type}}</li><li>{{time}}</li></ul></li>{{/list}}</ul>";
			var views = Mustache.render(template, list);
			$('#list').append(views);
		});
		$('#list').bind('scroll', function(){
			$contentLoadTriggered = false;
			loaded('type=退件');
		});
		
	});


/*		搜索框搜索行为		*/
	$('#btn').on('click', function(){
		$('.nav').animate({"right": "-43%"}, 200).removeClass('menuplay');
		$('.bg').removeClass('addbg');
		var name = $(this).siblings("input").val();
		$.getJSON('http://post.ecjtu.net/api.php/list?callback=?&key='+name, function(data){
			function toArray(obj) {
				var arr = [];
				for (i in obj) {
					if(obj.hasOwnProperty(i)) arr.push(obj[i]);
				}
				return arr;
			}
		
				var list = {list: toArray(data)};
				if (toArray(data).length > 0){
					var template = "<ul>{{#list}}<li class='info'><ul><li>{{addressee}}</li><li>{{area}}</li><li>{{type}}</li><li>{{time}}</li></ul></li>{{/list}}</ul>";
					var views = Mustache.render(template, list);				
					$('#list').html('');
					$('#list').append(views);
				} else {
					$('#error').css('display', 'block');
					
				}
			
		});
	});
	/*		错误提示框行为		*/
	$('#errorForm button').on('click', function(){
		$('#error').css('display', 'none');
	});

});

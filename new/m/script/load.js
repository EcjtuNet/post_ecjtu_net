$(document).ready(function() {
	var count = 1;	
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
		$.getScript('http://post.ecjtu.net/api.php/list?callback=back&limit=40&area=南区&page='+count);
	}
	/*		南北区搜索		*/
	$('#south a').on('click', function (event) {// 控制南区搜索项	
		event.preventDefault();
		$('#list').html('');
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
		
		$contentLoadTriggered = false;
		$('#list').bind('scroll', function() {
			
			if(count === 1) {
				if( $('#list').scrollTop() + $('#list').height() >= 894 ){
					initScrool = $('#list').scrollTop();
					draw();
				}
			} else {
				if ($('#list').scrollTop() + $('#list').height() >= 890*count) {

					draw();
					console.log($('#list').scrollTop() + $('#list').height())
					console.log(count)
					console.log(890*count)					
				}
			}
		});
	});
	$('#north a').on('click', function (event) {// 控制北区搜索项
		event.preventDefault();
		$('#list').html('');
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
		
		$contentLoadTriggered = false;
		$('#list').bind('scroll', function() {

			if(count === 1) {
				if( $('#list').scrollTop() + $('#list').height() >= 894 ){
					initScrool = $('#list').scrollTop();
					draw();
				}
			} else {
				if ($('#list').scrollTop() + $('#list').height() >= 898*count) {
					draw();
				}
			}
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
		$('#list').html('');
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
		var count = 1;	
		$contentLoadTriggered = false;
		$('#list').bind('scroll', function() {
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
				$.getScript('http://post.ecjtu.net/api.php/list?callback=back&limit=40&type=包裹&page='+count);
			}
			if(count === 1) {
				if( $('#list').scrollTop() + $('#list').height() >= 894 ){
					draw();
				}
			} else {
				if ($('#list').scrollTop() + $('#list').height() >= 890*count) {
					draw();
				}
			}
		});			
	});

	$('#sort li#post').on('click', function (event) { // 挂号信分类项
		event.preventDefault();
		$('#list').html('');
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
		var count = 1;	
		$contentLoadTriggered = false;
		$('#list').bind('scroll', function() {
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
				$.getScript('http://post.ecjtu.net/api.php/list?callback=back&limit=40&type=挂号信&page='+count);
			}
			if(count === 1) {
				if( $('#list').scrollTop() + $('#list').height() >= 894 ){
					draw();
				}
			} else {
				if ($('#list').scrollTop() + $('#list').height() >= 890*count) {
					draw();
				}
			}
		});	
	});

	$('#sort li#print').on('click', function (event) {// 印刷品分类项
		event.preventDefault();
		$('#list').html('');
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
		var count = 1;	
		$contentLoadTriggered = false;
		$('#list').bind('scroll', function() {
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
				$.getScript('http://post.ecjtu.net/api.php/list?callback=back&limit=40&type=印刷品&page='+count);
			}
			if(count === 1) {
				if( $('#list').scrollTop() + $('#list').height() >= 894 ){
					draw();
				}
			} else {
				if ($('#list').scrollTop() + $('#list').height() >= 890*count) {
					draw();
				}
			}
		});	
	});

	$('#sort li#order').on('click', function (event) {// 汇款单分类项
		event.preventDefault();
		$('#list').html('');
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
		var count = 1;	
		$contentLoadTriggered = false;
		$('#list').bind('scroll', function() {
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
				$.getScript('http://post.ecjtu.net/api.php/list?callback=back&limit=40&type=汇款单&page='+count);
			}
			if(count === 1) {
				if( $('#list').scrollTop() + $('#list').height() >= 894 ){
					draw();
				}
			} else {
				if ($('#list').scrollTop() + $('#list').height() >= 890*count) {
					draw();
				}
			}
		});	
	});

	$('#sort li#return').on('click', function (event) {// 退件分类项
		event.preventDefault();
		$('#list').html('');
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
		var count = 1;	
		$contentLoadTriggered = false;
		$('#list').bind('scroll', function() {
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
				$.getScript('http://post.ecjtu.net/api.php/list?callback=back&limit=40&type=退件&page='+count);
			}
			if(count === 1) {
				if( $('#list').scrollTop() + $('#list').height() >= 894 ){
					draw();
				}
			} else {
				if ($('#list').scrollTop() + $('#list').height() >= 890*count) {
					draw();
				}
			}
		});	
	});
});

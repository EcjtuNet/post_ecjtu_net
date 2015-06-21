$(document).ready(function() {
	$.getJSON('http://post.ecjtu.net/api.php/list?callback=?&limit=40&page=1', function(data) {
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
				console.log(views)
				console.log('http://post.ecjtu.net/api.php/list?callback=?&limit=40&area=南区&page='+count)
			};
			$.getScript('http://post.ecjtu.net/api.php/list?callback=back&limit=40&page='+count);
		}
		if(count === 1) {
			if( $('#list').scrollTop() + $('#list').height() >= 894 ){
				initScrool = $('#list').scrollTop();
				draw();
			}
		} else {
			if ($('#list').scrollTop() + $('#list').height() >= 890*count) {
				draw();									
			}
		}
	});

	
    $('#search input').on('focus', function (event) {// 搜索框的focus事件
    	$('body').addClass('searchbg');
    	$(this).parent().addClass('searchFocus');
    });
	
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
		var scount = 1;	
		$.getJSON('http://post.ecjtu.net/api.php/list?callback=?&limit=40&area=南区&page='+scount, function(data) {
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
			function sdraw() {
				scount++;
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
					console.log(views)
					console.log('http://post.ecjtu.net/api.php/list?callback=?&limit=40&area=南区&page='+scount)
				};
				$.getScript('http://post.ecjtu.net/api.php/list?callback=back&limit=40&area=南区&page='+scount);
			}
			if(scount === 1) {
				if( $('#list').scrollTop() + $('#list').height() >= 894 ){
					sdraw();
				}
			} else {
				if ($('#list').scrollTop() + $('#list').height() >= 890*scount) {
					sdraw();										
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
		var ncount = 1;
		$contentLoadTriggered = false;
		$('#list').bind('scroll', function() {
			function ndraw() {
			ncount++;
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
				$.getScript('http://post.ecjtu.net/api.php/list?callback=back&limit=40&area=北区&page='+ncount);
			}
			if(ncount === 1) {
				if( $('#list').scrollTop() + $('#list').height() >= 894 ){
					initScrool = $('#list').scrollTop();
					ndraw();
				}
			} else {
				if ($('#list').scrollTop() + $('#list').height() >= 890*ncount) {
					ndraw();
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
		var pcount = 1;	
		$contentLoadTriggered = false;
		$('#list').bind('scroll', function() {
			function pdraw() {
				pcount++;
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
					console.log(views)
				};
				$.getScript('http://post.ecjtu.net/api.php/list?callback=back&limit=40&type=包裹&page='+pcount);
			}
			if(pcount === 1) {
				if( $('#list').scrollTop() + $('#list').height() >= 894 ){
					pdraw();
				}
			} else {
				if ($('#list').scrollTop() + $('#list').height() >= 890*pcount) {
					pdraw();

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
		var pocount = 1;	
		$contentLoadTriggered = false;
		$('#list').bind('scroll', function() {
			function podraw() {
				pocount++;
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
				$.getScript('http://post.ecjtu.net/api.php/list?callback=back&limit=40&type=挂号信&page='+pocount);
			}
			if(pocount === 1) {
				if( $('#list').scrollTop() + $('#list').height() >= 894 ){
					podraw();
				}
			} else {
				if ($('#list').scrollTop() + $('#list').height() >= 890*pocount) {
					podraw();
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
		var prcount = 1;	
		$contentLoadTriggered = false;
		$('#list').bind('scroll', function() {
			function prdraw() {
				prcount++;
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
				$.getScript('http://post.ecjtu.net/api.php/list?callback=back&limit=40&type=印刷品&page='+prcount);
			}
			if(prcount === 1) {
				if( $('#list').scrollTop() + $('#list').height() >= 894 ){
					prdraw();
				}
			} else {
				if ($('#list').scrollTop() + $('#list').height() >= 890*prcount) {
					prdraw();
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
		var ocount = 1;	
		$contentLoadTriggered = false;
		$('#list').bind('scroll', function() {
			function odraw() {
				ocount++;
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
				$.getScript('http://post.ecjtu.net/api.php/list?callback=back&limit=40&type=汇款单&page='+ocount);
			}
			if(ocount === 1) {
				if( $('#list').scrollTop() + $('#list').height() >= 894 ){
					odraw();
				}
			} else {
				if ($('#list').scrollTop() + $('#list').height() >= 890*ocount) {
					odraw();
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
		var rcount = 1;	
		$contentLoadTriggered = false;
		$('#list').bind('scroll', function() {
			function rdraw() {
				rcount++;
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
				$.getScript('http://post.ecjtu.net/api.php/list?callback=back&limit=40&type=退件&page='+rcount);
			}
			if(rcount === 1) {
				if( $('#list').scrollTop() + $('#list').height() >= 894 ){
					rdraw();
				}
			} else {
				if ($('#list').scrollTop() + $('#list').height() >= 890*rcount) {
					rdraw();
				}
			}
		});	
	});
});

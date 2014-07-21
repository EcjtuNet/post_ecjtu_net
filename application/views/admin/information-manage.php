<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<base href="<?php  echo base_url();?>"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="static/css/header.css"/>
<link rel="stylesheet" type="text/css" href="static/css/information.css"/>
<link rel="stylesheet" type="text/css" href="static/css/footer.css"/>

<script type="text/javascript" language="javascript" src="./static/js/jquery-1.7.2.js"></script>
<title>日新邮包-后台信息管理</title>
</head>
<body>
<!--后台页头部-->
<?php include("backstage-header.php");?>
<div id="information">
	<!--后台左侧导航-->
    <?php //include("backstage-sider.php"); ?>
    <div id="sider_big">
	    <div id="sider_small">
	        <div style=" margin-top:28px;">
	            <a href="index.php/admin">后台中心</a>
	            <a class="grey-background" href="index.php/admin/maginfo">信息管理</a>
<!--	            <a href="index.php/admin/chginfo">账号信息修改</a>  -->
	        </div>
	    </div>
	</div>
    <div id="content">
    	<!--信息管理页主体-->
        <?php include("information-manage-subject.php"); ?>
        <!--后台页底部-->
        <?php include("backstage-footer.php"); ?>
    </div>  
</div>
<script language="javascript" language="javascript">
$(document).ready(function(){
	$(".edit").click(function(){
		var jilu = $(this).parents(".ulList");
		var num = jilu.children(".num").html();
		var shoujianren = jilu.children(".change-list").children(".shoujianren").val();
		var xiaoqu = jilu.children(".change-list").children(".xiaoqu").val();
		var leixing = jilu.children(".change-list").children(".leixing").val();
		var datime = jilu.children(".daojian").html();
		//alert(xiaoqu);
		$.ajax({
				url: "<?php echo site_url('admin/dis'); ?>",
				
				type: 'POST',
				
				data: 
				{
					'num' : num,
					'addressee' : shoujianren,
					'area' : xiaoqu,
					'type' : leixing,
					'time' : datime,
				},
				
				dataType: 'html',
				
				timeout: 1000,
				
				async:false,
				
				error: function(){alert('Error loading PHP document');},
				
				success: function(result){
							alert('修改成功');					
					},
				
				});
				return false;
	})
})
</script> 
</body>
</html>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<base href="<?php  echo base_url();?>"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="static/css/header.css"/>
<link rel="stylesheet" type="text/css" href="static/css/information.css"/>
<link rel="stylesheet" type="text/css" href="static/css/changNum-subject.css"/>
<link rel="stylesheet" type="text/css" href="static/css/footer.css"/>
<title>日新邮包-后台中心</title>
</head>
<body>
<!--后台页头部-->
<?php include("backstage-header.php"); ?>
<div id="information">
	<!--后台左侧导航-->
    <?php // include("backstage-sider.php"); ?>
    <div id="sider_big">
	    <div id="sider_small">
	        <div style=" margin-top:28px;">
	            <a class="grey-background" href="index.php/admin">后台中心</a>
	            <a href="index.php/admin/maginfo">信息管理</a>
<!--	            <a href="index.php/admin/chginfo">账号信息修改</a> -->
	        </div>
	    </div>
	</div>  
    <div id="content">
    	<!--后台中心页主体-->
        <?php include("backstageCenter-subject.php"); ?>
		<!--后台页底部-->
        <?php include("backstage-footer.php"); ?>
    </div>
</div>    
</body>
</html>

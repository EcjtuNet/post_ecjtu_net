<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="../css/header.css"/>
<link rel="stylesheet" type="text/css" href="../css/information.css"/>
<link rel="stylesheet" type="text/css" href="../css/changNum-subject.css"/>
<link rel="stylesheet" type="text/css" href="../css/footer.css"/>
<title>日新邮包-后台账号信息修改</title>
</head>
<body>
<!--后台页头部-->
<?php include("../php/backstage-header.php"); ?>
<div id="information">
	<!--后台左侧导航-->
    <div id="sider_big">
        <div id="sider_small">
            <div style=" margin-top:28px;">
                <a href="backstageCenter.php">后台中心</a>
                <a href="information-manage.php">信息管理</a>
                <a class="grey-background" href="#">账号信息修改</a>
            </div>
        </div>
    </div>
    <div id="content">
    	<!--后台信息修改页主体-->
        <?php include("../php/changeNumber-subject.php"); ?>
		<!--后台页底部-->
        <?php include("../php/backstage-footer.php"); ?>
    </div>
</div>    
</body>
</html>

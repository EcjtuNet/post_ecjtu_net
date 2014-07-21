<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>日新邮包-后台登录</title>

<base href="<?php  echo base_url();?>"/>

<link rel="stylesheet" type="text/css" href="static/css/login-header.css"/>
<link rel="stylesheet" type="text/css" href="static/css/footer.css"/>
<link rel="stylesheet" type="text/css" href="static/css/login-subject.css"/>
</head>
<body>
<!--登录页头部-->
<?php include("login-header.php"); ?>
<div id="login_subject">
	<!--登录页主体-->
    <?php include("login-subject.php"); ?>
    <!--后台页底部-->
    <?php include("backstage-footer.php"); ?>
</div>
</body>
</html>

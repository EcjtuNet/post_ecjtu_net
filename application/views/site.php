<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="baidu-site-verification" content="xMof8vN9dS" />
<meta name="keywords" content="日新邮包 华东交大邮包查询 交大邮包 邮包查询" />  
<title>日新邮包</title>
<base href="<?php  echo base_url();?>"/>

<link rel="stylesheet" type="text/css" href="static/css/header.css" />
<link rel="stylesheet" type="text/css" href="static/css/subject.css"/>
<link rel="stylesheet" type="text/css" href="static/css/footer.css"/>

</head>
<body>
<!--网站头部-->
<?php include("header.php"); ?>
<div id="site">   
    <!--网站主体-->
    <?php include("subject.php"); ?>   
    <!--网站底部-->
    <?php include("footer.php"); ?>
    <!---error display-->
<?php if(@$error==1) echo "<script>alert('对不起，暂时没有您的信息哦~');</script>" ; ?>

</div>
</body>
</html>

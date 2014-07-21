<!--后台页头部--><base href="<?php  echo base_url();?>"/>
<div id="header">
	<div id="head-content">
        <img id="head_logo" src="static/images/logo.png" alt="日新邮包logo" />
        <div id="head_nav">
        	<div id="nav_content">
                <a ><?php echo $this->session->userdata('login_name');?>欢迎您</a>
                <a href="index.php/admin/logout">退出后台</a>
                <a href="index.php/admin/relog">重新登录</a>
                <a href="http://post.ecjtu.net">邮包首页</a>
            </div>
         </div>
     </div>
</div>
<div id="head_bottom"></div>
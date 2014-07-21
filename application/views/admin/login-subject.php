<!--登录页主体-->
<div id="login_content">
	<?php  echo form_open('login');?>
    <div id="login_contentHead">欢迎登录</div>
    <div class="username_div">
        <a class="black-16Size" style="float:left; margin-left:16px;">用户名</a>
        <input type="text" class="username_text" style="float:left; margin-left:8px;" name="name" value="<?php echo set_value('name');?>" />
        <!-- <a class="red-12Size"></a> -->
        <?php echo form_error('name');?>
    </div>
    <div class="password_div">
        <a class="black-16Size" style="float:left; margin-left:14px;">密码</a>
        <input type="password" class="password_text" style="float:left; margin-left:23px;" name="passw"  />
        <!-- <a class="red-12Size"></a> -->
        <?php echo form_error('passw'); ?>
    </div>
    <div class="gery-12Size">密码由6-16位字符组成</div>

    <div class="check_div">
        <a class="black-16Size">验证码</a>
        <input type="text" class="check_text" name="chkcode" />
        <!--<a class="red-12Size">验证码错误</a>-->
    </div>
    <div class="gery-12Size">请输入图中字符，不区分大小写</div>
    <div class="check_content">
        <div class="check_image"><img class="clr_img_boder" alt="验证码" src="static/image.php" /></div>
        <a href="index.php/login" class="blue-12Size"> 看不清，换一张</a>
    </div>
    
<div id="login_image">
        <input type="submit" class="clr_img_boder" style="background:url('static/image_backstage/images_login/enter.png');width:169px; height:39px;" alt="登录" value="" />
    </div>
    </form>
</div>

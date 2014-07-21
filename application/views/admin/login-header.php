<!--登录页头部-->
<div id="header">
	<div id="head-content">
        <img id="head_logo" src="static/images/logo.png" alt="日新邮包logo" />
        <div id="head_nav">
        	<div id="head_navContent">
                <a href="http://post.ecjtu.net">邮包首页</a>
                <a href="http://www.ecjtu.net">日新首页</a>
            </div>
            <?php  echo form_open('display/byName');?>
            <form>
            	<div id="search">
                	<input  id="searchbox" type="text" onclick="if(this.value=='请输入收件人的姓名'){this.value='';}" 
                	onblur="if (value ==''){value='请输入收件人的姓名'};" value="请输入收件人的姓名" name="input_name"/>
             		<input id="found" type="submit" value='' onmousemove="style.background='url(static/images/found.png)';" onmouseout="style.background='none';" />
             	</div>
             </form>
         </div>
     </div>    
</div>
<div id="head_bottom"></div>
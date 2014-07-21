<!--登录页头部-->
<div id="header">
	<div id="head-content">
        <img id="head_logo" src="../images/logo.png" alt="日新邮包logo" />
        <div id="head_nav">
        	<div id="head_navContent">
                <a href="#">邮包首页</a>
                <a href="#">日新首页</a>
            </div>
            <div id="search">
                <input  id="searchbox" type="text" onclick="if(this.value=='请输入收件人的姓名'){this.value='';}" 
                onblur="if (value ==''){value='请输入收件人的姓名'};" value="请输入收件人的姓名" name="query"/>
                <a href="#"><div id="found" onmousemove="style.background='url(../images/found.png)';" onmouseout="style.background='none';"></div></a>
             </div>
         </div>
     </div>    
</div>
<div id="head_bottom"></div>
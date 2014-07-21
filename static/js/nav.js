// JavaScript Document
var South,North;
South=document.getElementById("South");
North=document.getElementById("North");	

South.onmouseover=function (){
	South.style.width="120px";
	South.style.background="url(http://post.ecjtu.net/static/images/nanqu-big.png) no-repeat";
	North.style.width="53px";
	North.style.background="url(http://post.ecjtu.net/static/images/beiqu-small.png) no-repeat";
}
South.onmouseout=function (){
	South.style.width="86px";
	South.style.background="url(http://post.ecjtu.net/static/images/nanqu.png) no-repeat";
	North.style.width="86px";
	North.style.background="url(http://post.ecjtu.net/static/images/beiqu.png) no-repeat";
}
North.onmouseover=function (){
	North.style.width="120px";
	North.style.background="url(http://post.ecjtu.net/static/images/beiqu-big.png)";
	South.style.width="53px";
	South.style.background="url(http://post.ecjtu.net/static/images/nanqu-small.png)";
}
North.onmouseout=function (){
	South.style.width="86px";
	South.style.background="url(http://post.ecjtu.net/static/images/nanqu.png) no-repeat";
	North.style.width="86px";
	North.style.background="url(http://post.ecjtu.net/static/images/beiqu.png) no-repeat";
}


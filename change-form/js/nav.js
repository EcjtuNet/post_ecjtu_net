// JavaScript Document
var South,North;
South=document.getElementById("South");
North=document.getElementById("North");	

South.onmouseover=function (){
	South.style.width="120px";
	South.style.background="url(../images/nanqu-big.png) no-repeat";
	North.style.width="53px";
	North.style.background="url(../images/beiqu-small.png) no-repeat";
}
South.onmouseout=function (){
	South.style.width="86px";
	South.style.background="url(../images/nanqu.png) no-repeat";
	North.style.width="86px";
	North.style.background="url(../images/beiqu.png) no-repeat";
}
North.onmouseover=function (){
	North.style.width="120px";
	North.style.background="url(../images/beiqu-big.png)";
	South.style.width="53px";
	South.style.background="url(../images/nanqu-small.png)";
}
North.onmouseout=function (){
	South.style.width="86px";
	South.style.background="url(../images/nanqu.png) no-repeat";
	North.style.width="86px";
	North.style.background="url(../images/beiqu.png) no-repeat";
}


// JavaScript Document
//南北区选择
var South,North;
South=document.getElementById("South");
North=document.getElementById("North");
function change(){
	South.style.width="86px";
	South.style.backgroundPosition="0px -279px";
	North.style.width="86px";
	North.style.backgroundPosition="0px -346px";
}
if(South !== null){	
South.onmouseover=function (){
	South.style.width="120px";
	South.style.backgroundPosition="0px -413px";
	North.style.width="53px";
	North.style.backgroundPosition="-86px -346px";
	}
South.onmouseout=function (){change()};
}
if(North!==null){
North.onmouseover=function (){
	North.style.width="120px";
	North.style.backgroundPosition="0px -480px";
	South.style.width="53px";
	South.style.backgroundPosition="-86px -279px";
	}
North.onmouseout=function (){change()};
}
//类型选择
var Parcel,Letter,Print,Bill,Cancel;
Parcel=document.getElementById("parcel");
Letter=document.getElementById("letter");
Print=document.getElementById("print");
Bill=document.getElementById("bill");
Cancel=document.getElementById("cancel");
Parcel.onmousemove=function()
{
	Parcel.style.width="154px";
	Parcel.style.backgroundPosition="-29px 0px";
}
Parcel.onmouseout=function()
{
	Parcel.style.width="127px";
	Parcel.style.backgroundPosition="-54px 0px";
}
Letter.onmousemove=function()
{
	Letter.style.width="154px";
	Letter.style.backgroundPosition="-29px -55px";
}
Letter.onmouseout=function()
{
	Letter.style.width="127px";
	Letter.style.backgroundPosition="-54px -55px";
}
Print.onmousemove=function()
{
	Print.style.width="154px";
	Print.style.backgroundPosition="-29px -111px";
}
Print.onmouseout=function()
{
	Print.style.width="127px";
	Print.style.backgroundPosition="-54px -111px";
}
Bill.onmousemove=function()
{
	Bill.style.width="154px";
	Bill.style.backgroundPosition="-29px -167px";
}
Bill.onmouseout=function()
{
	Bill.style.width="127px";
	Bill.style.backgroundPosition="-54px -167px";
}
Cancel.onmousemove=function()
{
	Cancel.style.width="154px";
	Cancel.style.backgroundPosition="-29px -223px";
}
Cancel.onmouseout=function()
{
	Cancel.style.width="127px";
	Cancel.style.backgroundPosition="-54px -223px";
}


























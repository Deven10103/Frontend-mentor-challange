var me=document.getElementsByTagName('svg');
me[0].addEventListener("click",pop);
var he=document.getElementById('shout');
function pop(){
	if (he.className==='ope')
	{
		he.classList='pout';
		me[0].classList='pout';
		
	}
	else
	{
		he.classList='ope';
		me[0].classList='ope';
	}
}

/*--------------------------------------------------------------------------*
 *  Scroll (pagetop link)
 *--------------------------------------------------------------------------*/
function scroller(i){
	scroller_up(i,1000);
}

function scroller_up(i,y){
	y = y + (i - y)*.1;
	window.scroll(0,y);
	if (((i - y) <= .6)&&((i - y) >= -.6))
	{
		y = i;
	}else{
		setTimeout("scroller_up("+i+","+y+")",1);
	}
}
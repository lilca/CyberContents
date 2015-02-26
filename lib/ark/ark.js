function js_ark_on_resize(){
	var eles = window.document.getElementsByTagName('ark');
	for(var idx=0; idx<eles.length; idx=idx+1){
		var cur	= eles[idx];
		var ow	= cur.parentNode.clientWidth;
		var oh	= cur.parentNode.clientHeight;
		var ar	= parseFloat(cur.getAttribute('aspect'));
		if(ar == null)
			ar	= 1.0;
		if( ow/oh >= ar ){
			cur.style.width	= Math.round(ar*oh)+'px';
			cur.style.height	= oh+'px';
			cur.style.top		= 0+'px';
			cur.style.left		= (ow / 2 -cur.clientWidth / 2) +'px';
		}
		else{
			cur.style.width	= ow+'px';
			cur.style.height	= Math.round(ow/ar)+'px';
			cur.style.top		= (oh / 2 - cur.clientHeight / 2) +'px';
			cur.style.left		= 0+'px';
		}
			
	}
}
function js_ark_on_resize_custom(cur){
	if(cur.nodeName.toLowerCase() != 'ark')
		return;
	// Sizing
	var ow	= cur.parentNode.clientWidth;
	var oh	= cur.parentNode.clientHeight;
	var ar	= parseFloat(cur.getAttribute('aspect'));
	if(ar == null)
		ar	= 1.0;
	if( ow/oh >= ar ){
		cur.style.width	= Math.round(ar*oh)+'px';
		cur.style.height	= oh+'px';
		cur.style.top		= 0+'px';
		cur.style.left		= (ow / 2 -cur.clientWidth / 2) +'px';
	}
	else{
		cur.style.width	= ow+'px';
		cur.style.height	= Math.round(ow/ar)+'px';
		cur.style.top		= (oh / 2 - cur.clientHeight / 2) +'px';
		cur.style.left		= 0+'px';
	}
}
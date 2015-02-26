function js_slide_on_resize(){
	var eles = window.document.getElementsByTagName('slide');
	for(var idx=0; idx<eles.length; idx=idx+1){
		var cur	= eles[idx];
		// Sizing
		cur.style.width	= window.innerWidth + 'px';
		cur.style.height	= window.innerHeight + 'px';
	}
}
function js_slide_on_resize_custom(cur){
	if(cur.nodeName.toLowerCase() != 'slide')
		return;
	// Sizing
	cur.style.width	= window.innerWidth + 'px';
	cur.style.height	= window.innerHeight + 'px';
}

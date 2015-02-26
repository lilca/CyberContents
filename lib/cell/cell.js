function js_cell_on_resize(){
	var eles = window.document.getElementsByTagName('cell');
	for(var idx=0; idx<eles.length; idx=idx+1){
		var cur		= eles[idx];
		var margin	= cur.getAttribute('margin');
		var par		= cur.parentNode;
		if( margin != null ){
			cur.style.margin	= parseInt(margin)+'px';
			cur.style.width	= (par.clientWidth-parseInt(margin)*2)+'px';
			cur.style.height	= (par.clientHeight-parseInt(margin)*2)+'px';
		}
	}
	
}
function js_cell_on_resize_custom(cur){
	if(cur.nodeName.toLowerCase() != 'cell')
		return;
	// Sizing
	var margin	= cur.getAttribute('margin');
	var par		= cur.parentNode;
	if( margin != null ){
		cur.style.margin	= parseInt(margin)+'px';
		cur.style.width	= (par.clientWidth-parseInt(margin)*2)+'px';
		cur.style.height	= (par.clientHeight-parseInt(margin)*2)+'px';
	}
}
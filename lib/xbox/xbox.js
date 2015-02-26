function js_xbox_on_resize(){
	var eles	= window.document.getElementsByTagName("xbox");
	var restlist = [];
	var percentlist = [];
	var vallist =[];
	for(var jdx=0; jdx<eles.length; jdx=jdx+1){
		var cur = eles[jdx];
		if(cur.getAttribute('size')==null)
			continue;
		if(cur.getAttribute('size') == 'rest'){
			restlist.push(cur);
		}
		else
		if(cur.getAttribute('size').indexOf('%') != -1){
			percentlist.push(cur);
		}
		else{
			vallist.push(cur);
		}
	}
	var idx;
	for(idx=0; idx<vallist.length; idx=idx+1){
		vallist[idx].style.width = parseInt(vallist[idx].getAttribute('size'))+'px';
	}
	for(idx=0; idx<percentlist.length; idx=idx+1){
		percentlist[idx].style.width = Math.round((percentlist[idx].parentNode.scrollWidth * parseInt(percentlist[idx].getAttribute('size').replace('%',''))/100))+'px';
	}
	for(idx=0; idx<restlist.length; idx=idx+1){
		var sibling = restlist[idx].parentNode.childNodes;
		var parent_count = restlist[idx].parentNode.clientWidth;
		var count = 0;
		for(var key in sibling){
			var cur = sibling[key];
			if(cur.tagName == 'XBOX'){
				if(cur.getAttribute('size') != 'rest'){
					count = count + cur.clientWidth;
				}
			}
		}
		restlist[idx].style.width = (parent_count - count) +'px';
	}
}
var js_xbox_restlist = [];
var js_xbox_percentlist = [];
var js_xbox_vallist =[];
function js_xbox_on_resize_pre(){
	js_xbox_restlist = [];
	js_xbox_percentlist = [];
	js_xbox_vallist =[];	
}
function js_xbox_on_resize_sort(cur){
	if(cur.nodeName.toLowerCase() != 'xbox')
		return;
	// Sizing
	if(cur.getAttribute('size')==null)
		return;
	if(cur.getAttribute('size') == 'rest'){
		js_xbox_restlist.push(cur);
	}
	else
	if(cur.getAttribute('size').indexOf('%') != -1){
		js_xbox_percentlist.push(cur);
	}
	else{
		js_xbox_vallist.push(cur);
	}	
}
function js_xbox_on_resize_post(){
	var idx;
	for(idx=0; idx<js_xbox_vallist.length; idx=idx+1){
		js_xbox_vallist[idx].style.width = parseInt(js_xbox_vallist[idx].getAttribute('size'))+'px';
	}
	for(idx=0; idx<js_xbox_percentlist.length; idx=idx+1){
		js_xbox_percentlist[idx].style.width = Math.round((js_xbox_percentlist[idx].parentNode.clientWidth * parseInt(js_xbox_percentlist[idx].getAttribute('size').replace('%',''))/100))+'px';
	}
	for(idx=0; idx<js_xbox_restlist.length; idx=idx+1){
		var sibling = js_xbox_restlist[idx].parentNode.childNodes;
		var parent_count = js_xbox_restlist[idx].parentNode.clientWidth;
		var count = 0;
		for(var key in sibling){
			var cur = sibling[key];
			if(cur.tagName == 'XBOX'){
				if(cur.getAttribute('size') != 'rest'){
					count = count + cur.clientWidth;
				}
			}
		}
		var allrest	=  (parent_count - count);
		if( allrest < 0 ){
			js_xbox_restlist[idx].style.width = '0px';			
		}else{
			var rests		=  js_xbox_restlist.length;
			var value		= Math.floor( allrest  / rests ) + ( ( allrest  % rests ) > idx ? 1 : 0 );
			js_xbox_restlist[idx].style.width = value +'px';
			//js_xbox_restlist[idx].style.width = (parent_count - count) +'px';
		}
	}	
}
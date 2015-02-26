function js_ybox_on_resize(){
	var eles	= window.document.getElementsByTagName("ybox");
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
		vallist[idx].style.height = parseInt(vallist[idx].getAttribute('size'))+'px';
	}
	for(idx=0; idx<percentlist.length; idx=idx+1){
		percentlist[idx].style.height = Math.round((percentlist[idx].parentNode.clientHeight * parseInt(percentlist[idx].getAttribute('size').replace('%',''))/100))+'px';
	}
	for(idx=0; idx<restlist.length; idx=idx+1){
		var sibling = restlist[idx].parentNode.childNodes;
		var parent_count = restlist[idx].parentNode.clientHeight;
		var count = 0;
		for(var key in sibling){
			var cur = sibling[key];
			if(cur.tagName == 'YBOX'){
				if(cur.getAttribute('size') != 'rest'){
					count = count + cur.clientHeight;
				}
			}
		}
		restlist[idx].style.height = (parent_count - count) +'px';
	}
}
var js_ybox_restlist = [];
var js_ybox_percentlist = [];
var js_ybox_vallist =[];
function js_ybox_on_resize_pre(){
	js_ybox_restlist = [];
	js_ybox_percentlist = [];
	js_ybox_vallist =[];	
}
function js_ybox_on_resize_sort(cur){
	if(cur.nodeName.toLowerCase() != 'ybox')
		return;
	// Sizing
	if(cur.getAttribute('size')==null)
		return;
	if(cur.getAttribute('size') == 'rest'){
		js_ybox_restlist.push(cur);
	}
	else
	if(cur.getAttribute('size').indexOf('%') != -1){
		js_ybox_percentlist.push(cur);
	}
	else{
		js_ybox_vallist.push(cur);
	}
}
function js_ybox_on_resize_post(){
	var idx;
	for(idx=0; idx<js_ybox_vallist.length; idx=idx+1){
		js_ybox_vallist[idx].style.height = parseInt(js_ybox_vallist[idx].getAttribute('size'))+'px';
	}
	for(idx=0; idx<js_ybox_percentlist.length; idx=idx+1){
		js_ybox_percentlist[idx].style.height = Math.round((js_ybox_percentlist[idx].parentNode.clientHeight * parseInt(js_ybox_percentlist[idx].getAttribute('size').replace('%',''))/100))+'px';
	}
	for(idx=0; idx<js_ybox_restlist.length; idx=idx+1){
		var sibling = js_ybox_restlist[idx].parentNode.childNodes;
		var parent_count = js_ybox_restlist[idx].parentNode.clientHeight;
		var count = 0;
		for(var key in sibling){
			var cur = sibling[key];
			if(cur.tagName == 'YBOX'){
				if(cur.getAttribute('size') != 'rest'){
					count = count + cur.clientHeight;
				}
			}
		}
		var allrest	=  (parent_count - count);
		if( allrest < 0 ){
			js_ybox_restlist[idx].style.height = '0px';			
		}else{
			var rests		=  js_ybox_restlist.length;
			var value		= Math.floor( allrest  / rests ) + ( ( allrest  % rests ) > idx ? 1 : 0 );
			js_ybox_restlist[idx].style.height = value +'px';
			//js_ybox_restlist[idx].style.height = (parent_count - count) +'px';
		}
	}
}
	// When index.html was opend by user.
	window.onload = function(){
		js_custom_on_resize();
	}
	// When window was resized by user.
	window.onresize = function(){
		js_custom_on_resize();
	}
	// 
	function js_custom_on_resize(){
		var ele_body	= window.document.getElementsByTagName('body').item(0);
		js_custom_on_resize_sub(ele_body);
// debug
/*		var ele=window.document.getElementById("debug");
		console.log(ele.clientWidth);
		console.log(ele.clientHeight);
*/	}
	function js_custom_on_resize_sub(obj){
		var children		= obj.childNodes;
		if(children === 'undefined')
			return;
		// Pre
		js_xbox_on_resize_pre();
		js_ybox_on_resize_pre();
		// 
		for(var idx=0; idx<children.length; idx++){
			if(children.item(idx).nodeName.charAt(0) != '#'){
				var cur	= children.item(idx);
				js_slide_on_resize_custom(cur);
				js_ark_on_resize_custom(cur);
				js_cell_on_resize_custom(cur);
				js_xbox_on_resize_sort(cur);
				js_ybox_on_resize_sort(cur);
			}
		}
		// Post
		js_xbox_on_resize_post();
		js_ybox_on_resize_post();
		// Nest Generation
		for(var idx=0; idx<children.length; idx++){
			if(children.item(idx).nodeName.charAt(0) != '#')
				js_custom_on_resize_sub(children.item(idx));
		}
	}
function js_turn_switch_class(id){
	var ele = window.document.getElementById(id);
	if( ele.getAttribute('switch') == 'on' )
		ele.setAttribute('switch', '');
	else
		ele.setAttribute('switch', 'on');
}
function js_switch_on_other_off_class(id, ids){
	var ele = window.document.getElementById(id);
	ele.setAttribute('switch', 'on');
	for(var idx=0; idx<ids.length; idx=idx+1){
		ele = window.document.getElementById(ids[idx]);
		ele.setAttribute('switch', '');
	}
}
function js_invisible_off_other_on_class(id, ids){
	var ele = window.document.getElementById(id);
	ele.setAttribute('invisible', '');
	for(var idx=0; idx<ids.length; idx=idx+1){
		ele = window.document.getElementById(ids[idx]);
		ele.setAttribute('invisible', 'on');
	}
}

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

function js_navi_menu0(){
	js_switch_on_other_off_class("tab_00",["tab_01","tab_02","tab_03","tab_04"]);
	js_invisible_off_other_on_class("tabpane0",["tabpane1","tabpane2","tabpane3","tabpane4"]);
}
function js_navi_menu1(){
	js_switch_on_other_off_class("tab_01",["tab_00","tab_02","tab_03","tab_04"]);
	js_invisible_off_other_on_class("tabpane1",["tabpane0","tabpane2","tabpane3","tabpane4"]);
}
function js_navi_menu2(){
	js_switch_on_other_off_class("tab_02",["tab_00","tab_01","tab_03","tab_04"]);
	js_invisible_off_other_on_class("tabpane2",["tabpane0","tabpane1","tabpane3","tabpane4"]);
}
function js_navi_menu3(){
	js_switch_on_other_off_class("tab_03",["tab_00","tab_02","tab_01","tab_04"]);
	js_invisible_off_other_on_class("tabpane3",["tabpane0","tabpane2","tabpane1","tabpane4"]);
}
function js_navi_menu4(){
	js_switch_on_other_off_class("tab_04",["tab_00","tab_02","tab_03","tab_01"]);
	js_invisible_off_other_on_class("tabpane4",["tabpane0","tabpane2","tabpane3","tabpane1"]);
}

function js_alert_dialog_open(){
	var tar	= window.document.getElementById('alert_dialog');
	tar.setAttribute('invisible', '');
}

function js_alert_dialog_close(){
	var tar	= window.document.getElementById('alert_dialog');
	tar.setAttribute('invisible', 'on');
}



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
function js_alert_dialog_open(){
	var tar	= window.document.getElementById('alert_dialog');
	tar.setAttribute('invisible', '');
}

function js_alert_dialog_close(){
	var tar	= window.document.getElementById('alert_dialog');
	tar.setAttribute('invisible', 'on');
}

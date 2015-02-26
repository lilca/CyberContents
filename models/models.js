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


Ext.define('Monitor.view.east.East', {
	extend: 'Ext.panel.Panel',
	xtype: 'monitor-east',
	border:false,
	x:1280,
	height:1080,
	layout:{
		type:"vbox"
	},
	bodyStyle:"background:url('../resources/images/img/centergra_right.png') repeat-y left top #2a2b34;",
	items:[{
		xtype:"container",
		height:79
	},{
		xtype:"panel",
		border:false,
		bodyStyle:"background:url('../resources/images/img/centergra_right.png') repeat-y left top #2a2b34;",
		html:"<iframe id='iframeStatList' style='width:640px; height:450px; border:0px;' src='../stationList/stationList.html'></iframe>"	
	},{
		xtype:"panel",
		border:false,
		bodyStyle:"background:url('../resources/images/img/centergra_right.png') repeat-y left top #2a2b34;",
		html:"<iframe id='iframeErrorList' style='width:640px; height:450px; border:0px;' src='../errorList/errorList.html'></iframe>"
	}]
	
});
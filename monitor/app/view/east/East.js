Ext.define('Monitor.view.east.East', {
	extend: 'Ext.panel.Panel',
	xtype: 'monitor-east',
	border:true,
	x:1280,
	height:1080,
	layout:{
		type:"vbox"
	},
	items:[{
		xtype:"panel",
		border:false,
		html:"<iframe style='width:640px; height:540px; border:0px;' src='../stationList/stationList.html'></iframe>"	
	},{
		xtype:"panel",
		border:false,
		html:"<iframe style='width:640px; height:540px; border:0px;' src='../errorList/errorList.html'></iframe>"
	}]
	
});
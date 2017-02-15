Ext.define('Monitor.view.west.West', {
	extend: 'Ext.panel.Panel',
	xtype: 'monitor-west',
	y:80,
	width:330,
	height:1080,
	bodyStyle:"padding: 0px 13px; background:#2a2b34;",
	border:false,
	html:"<div id='northMap' style='position:absolute; top:152px; left:148px; color:#ffffff;'></div>" +
		 "<div id='eastMap' style='position:absolute; top:149px; left:220px; color:#ffffff;'></div>" +
		 "<div id='westMap' style='position:absolute; top:195px; left:127px; color:#ffffff;'></div>" +
		 "<div id='centerMap' style='position:absolute; top:207px; left:160px; color:#ffffff;'></div>" +
		 "<div id='southMap' style='position:absolute; top:240px; left:157px; color:#ffffff;'></div>" +
		 "<div id='suMap' style='position:absolute; top:237px; left:202px; color:#ffffff;'></div>" +
		 "<div id='dal_1_Map' style='position:absolute; top:235px; left:110px; color:#ffffff;'></div>" +
		 "<div id='dal_2_Map' style='position:absolute; top:312px; left:94px; color:#ffffff;'></div>",
	requires: ["Monitor.view.west.WestStationList"],
	items:[{
		xtype:"panel",
		border:false,
		bodyStyle:"background-color:#2a2b34;",
		layout:{
			type:"vbox"
		},
		items:[{
			xtype:"label",
			style:"margin-top:30px; padding-bottom: 2px; font-size:23px; padding-left:23px; color:#ffffff; background:url(../resources/images/img/bullet.png) no-repeat left center; font-family: notokr_bold;",
			text:"충전소 현황"
		},{
			xtype:"container",
			height:10
		},{
			xtype:"image",
			id:"imageMap",
			src:"../resources/images/img/map.png",
			width:300,
			height:420
		},{
			xtype:"container",
			height:10
		},{
			xtype:"monitor-weststationlist"
		}]
	}]
	
});
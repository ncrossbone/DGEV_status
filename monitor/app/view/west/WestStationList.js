Ext.define('Monitor.view.west.WestStationList', {
	extend: 'Ext.panel.Panel',
	xtype: 'monitor-weststationlist',
	bodyStyle:"background-color:transparent; background-size:99%;",
	border:false,
	layout:{
		type:"vbox"
	},
	width:300,
	items:[{
		xtype:"panel",
		title:"충전소 <img id='autoPlay' onclick='Monitor.global.Function.autoPlay()' src='../resources/images/img/stop.png' style='margin-left:190px; width:10%; margin-top:2px; position: absolute; cursor:pointer;'/>",
		id:"westStationList",
		bodyStyle:"background: #3c4149; border:1px solid #171d22;",
		autoScroll:true,
		height:275,
		width:300
	}]
});
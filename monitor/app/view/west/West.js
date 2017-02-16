Ext.define('Monitor.view.west.West', {
	extend: 'Ext.panel.Panel',
	xtype: 'monitor-west',
	y:80,
	width:330,
	height:1080,
	bodyStyle:"padding: 0px 13px; background:#2a2b34;",
	border:false,
	html:"<div id='northMap' style='position:absolute; top:154px; left:152px; color:#ffffff; font-size:12px;'></div>" +
		 "<div id='northMap_text' style='position:absolute; top:172px; left:145px; color:#000000; font-size:12px; letter-spacing:-1px;'>북구</div>" +
		 
		 "<div id='eastMap' style='position:absolute; top:151px; left:225px; color:#ffffff; font-size:12px;'></div>" +
		 "<div id='eastMap_text' style='position:absolute; top:168px; left:217px; color:#000000; font-size:12px; letter-spacing:-1px;'>동구</div>" +
		 
		 "<div id='westMap' style='position:absolute; top:194px; left:131px; color:#ffffff; font-size:12px;'></div>" +
		 "<div id='westMap_text' style='position:absolute; top:211px; left:123px; color:#000000; font-size:12px; letter-spacing:-1px;'>서구</div>" +
		 
		 "<div id='centerMap' style='position:absolute; top:201px; left:167px; color:#ffffff; font-size:12px;'></div>" +
		 "<div id='centerMap_text' style='position:absolute; top:216px; left:159px; color:#000000; font-size:12px; letter-spacing:-1px;'>중구</div>" +
		 
		 "<div id='southMap' style='position:absolute; top:232px; left:161px; color:#ffffff; font-size:12px;'></div>" +
		 "<div id='southMap_text' style='position:absolute; top:248px; left:154px; color:#000000; font-size:12px; letter-spacing:-1px;'>남구</div>" +
		 
		 "<div id='suMap' style='position:absolute; top:235px; left:207px; color:#ffffff; font-size:12px;'></div>" +
		 "<div id='suMap_text' style='position:absolute; top:252px; left:192px; color:#000000; font-size:12px; letter-spacing:-1px;'>수성구</div>" +
		 
		 "<div id='dal_1_Map' style='position:absolute; top:234px; left:113px; color:#ffffff; font-size:12px;'></div>" +
		 "<div id='dal_1_Map_text' style='position:absolute; top:250px; left:101px; color:#000000; font-size:12px; letter-spacing:-1px;'>달서구</div>" +
		 
		 "<div id='dal_2_Map' style='position:absolute; top:307px; left:99px; color:#ffffff; font-size:12px;'></div>" +
		 "<div id='dal_2_Map_text' style='position:absolute; top:323px; left:84px; color:#000000; font-size:12px; letter-spacing:-1px;'>달성군</div>",
		 
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
			style:"margin-top:30px; padding-bottom: 2px; font-size:23px; padding-left:23px; color:#ffffff; background:url(../resources/images/img/bullet.png) no-repeat left center; font-family: notokr-bold;",
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
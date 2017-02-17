Ext.define('Monitor.view.west.West', {
	extend: 'Ext.panel.Panel',
	xtype: 'monitor-west',
	y:79,
	width:330,
	height:1080,
	bodyStyle:"padding: 0px 11px; background:url('../resources/images/img/centergra_left.png') repeat-y 313px top #2a2b34;",
	border:false,
	html:"<div id='northMap' style='position:absolute; top:150px; left:158px; color:#ffffff; font-size:12px;'></div>" +
		 "<div id='northMap_text' style='position:absolute; top:167px; left:151px; color:#000000; font-size:12px; letter-spacing:-1px;'>북구</div>" +
		 
		 "<div id='eastMap' style='position:absolute; top:149px; left:229px; color:#ffffff; font-size:12px;'></div>" +
		 "<div id='eastMap_text' style='position:absolute; top:166px; left:222px; color:#000000; font-size:12px; letter-spacing:-1px;'>동구</div>" +
		 
		 "<div id='westMap' style='position:absolute; top:192px; left:125px; color:#ffffff; font-size:12px;'></div>" +
		 "<div id='westMap_text' style='position:absolute; top:208px; left:125px; color:#000000; font-size:12px; letter-spacing:-1px;'>서구</div>" +
		 
		 "<div id='centerMap' style='position:absolute; top:199px; left:169px; color:#ffffff; font-size:12px;'></div>" +
		 "<div id='centerMap_text' style='position:absolute; top:215px; left:162px; color:#000000; font-size:12px; letter-spacing:-1px;'>중구</div>" +
		 
		 "<div id='southMap' style='position:absolute; top:231px; left:163px; color:#ffffff; font-size:12px;'></div>" +
		 "<div id='southMap_text' style='position:absolute; top:248px; left:157px; color:#000000; font-size:12px; letter-spacing:-1px;'>남구</div>" +
		 
		 "<div id='suMap' style='position:absolute; top:235px; left:211px; color:#ffffff; font-size:12px;'></div>" +
		 "<div id='suMap_text' style='position:absolute; top:252px; left:199px; color:#000000; font-size:12px; letter-spacing:-1px;'>수성구</div>" +
		 
		 "<div id='dal_1_Map' style='position:absolute; top:232px; left:118px; color:#ffffff; font-size:12px;'></div>" +
		 "<div id='dal_1_Map_text' style='position:absolute; top:249px; left:106px; color:#000000; font-size:12px; letter-spacing:-1px;'>달서구</div>" +
		 
		 "<div id='dal_2_Map' style='position:absolute; top:313px; left:101px; color:#ffffff; font-size:12px;'></div>" +
		 "<div id='dal_2_Map_text' style='position:absolute; top:330px; left:80px; color:#000000; font-size:12px; letter-spacing:-1px;'>달성군</div>",
		 
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
			style:"margin-top:30px; padding-bottom: 1px; font-size:23px; padding-left:23px; color:#ffffff; background:url(../resources/images/img/bullet.png) no-repeat left center; font-family: notokr-bold; background-size: 18px;",
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
			height:20
		},{
			xtype:"monitor-weststationlist"
		}]
	}]
	
});
Ext.define('Monitor.view.west.West', {
	extend: 'Ext.panel.Panel',
	xtype: 'monitor-west',
	y:79,
	width:330,
	height:800,
	bodyStyle:"padding: 0px 11px; background:url('../resources/images/img/centergra_left.png') repeat-y 313px top #2a2b34;",
	border:false,
	html:"<div id='northMap' style='position:absolute; top:127px; left:159px; color:#ffffff; font-size:12px;'></div>" +
		 "<div id='northMap_text' style='position:absolute; top:144px; left:152px; color:#000000; font-size:12px; letter-spacing:-1px;'>북구</div>" +
		 
		 "<div id='eastMap' style='position:absolute; top:125px; left:229px; color:#ffffff; font-size:12px;'></div>" +
		 "<div id='eastMap_text' style='position:absolute; top:142px; left:221px; color:#000000; font-size:12px; letter-spacing:-1px;'>동구</div>" +
		 
		 "<div id='westMap' style='position:absolute; top:165px; left:127px; color:#ffffff; font-size:12px;'></div>" +
		 "<div id='westMap_text' style='position:absolute; top:182px; left:132px; color:#000000; font-size:12px; letter-spacing:-1px;'>서구</div>" +
		 
		 "<div id='centerMap' style='position:absolute; top:169px; left:170px; color:#ffffff; font-size:12px;'></div>" +
		 "<div id='centerMap_text' style='position:absolute; top:185px; left:162px; color:#000000; font-size:12px; letter-spacing:-1px;'>중구</div>" +
		 
		 "<div id='southMap' style='position:absolute; top:201px; left:164px; color:#ffffff; font-size:12px;'></div>" +
		 "<div id='southMap_text' style='position:absolute; top:217px; left:159px; color:#000000; font-size:12px; letter-spacing:-1px;'>남구</div>" +
		 
		 "<div id='suMap' style='position:absolute; top:205px; left:212px; color:#ffffff; font-size:12px;'></div>" +
		 "<div id='suMap_text' style='position:absolute; top:222px; left:199px; color:#000000; font-size:12px; letter-spacing:-1px;'>수성구</div>" +
		 
		 "<div id='dal_1_Map' style='position:absolute; top:203px; left:120px; color:#ffffff; font-size:12px;'></div>" +
		 "<div id='dal_1_Map_text' style='position:absolute; top:220px; left:121px; color:#000000; font-size:12px; letter-spacing:-1px;'>달서구</div>" +
		 
		 "<div id='dal_2_Map' style='position:absolute; top:277px; left:104px; color:#ffffff; font-size:12px;'></div>" +
		 "<div id='dal_2_Map_text' style='position:absolute; top:295px; left:89px; color:#000000; font-size:12px; letter-spacing:-1px;'>달성군</div>",
		 
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
			style:"margin-top:20px; padding-bottom: 1px; font-size:23px; padding-left:23px; color:#ffffff; background:url(../resources/images/img/bullet.png) no-repeat left center; font-family: notokr-bold; background-size: 18px;",
			text:"충전소 현황"
		},{
			xtype:"container",
			height:15
		},{
			xtype:"panel",
			border:false,
			bodyStyle:"background:url('../resources/images/img/map_bg.png') no-repeat; background-size:contain; padding:20px;",
			width:300,
			height:370,
			items:[{
				xtype:"image",
				id:"imageMap",
				src:"../resources/images/img/map.png",
			    style:"margin-top: 5px;",
				width:265
			}]
		},{
			xtype:"container",
			height:10
		},{
			xtype:"monitor-weststationlist"
		}]
	}]
	
});
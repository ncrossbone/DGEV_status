Ext.define('StList.view.grid.StationListGrid', {
	extend: 'Ext.panel.Panel',
	xtype: 'stlist-stationlistgrid',
	border:false,
	bodyStyle:"padding: 0px 13px; background: url(../resources/images/img/centergra_right.png) repeat-y left top #2a2b34;",
	items:[{
		xtype:"panel",
		border:false,
		bodyStyle:"background:#2a2b34;",
		items:[{
			xtype:"panel",
			border:false,
			id:"stationTitle",
			bodyStyle:"background:#2a2b34;",
			width:614,
			layout:{
				type:"hbox"
			},
			items:[{
				xtype:"label",
				style:"margin-top:20px; padding-bottom: 1px; font-size:23px; padding-left:23px; color:#ffffff; background:url(../resources/images/img/bullet.png) no-repeat left center; font-family: notokr-bold; background-size: 18px;",
				text:"충전소 목록",
				id:"stationListText"
			},{
				xtype:"panel",
				border:false,
				width:100,
				height:50,
				layout:{
					type:"hbox"
				},
				cls:"groupLabel",
				bodyStyle:"background:#2a2b34; text-align:right;",
				items:[{
					xtype:"image",
					src:"../resources/images/img/position_icon.png",
					cls:"labelMarker"
				},{
					xtype:"label",
					id:"GU",
					cls:"labelAddr",
					text:"대구광역시"
				}]
			}]
			
		},{
			xtype:"container",
			height:15
		},{
			xtype:"grid",
			id: "stationListGrid",
			height:262,
			width:"100%",
			columns:[{
				text:"충전소명",
				align:"center",
				dataIndex:"S_KO_STAT_NM",
				width:164
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"충전기<br/>ID",
				dataIndex:"C_CHGER_ID",
				align:"center",
				width:55
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"충전기<br/>타입",
				dataIndex:"CHGER_TYPE_CD",
				align:"center",
				width:55
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"운영<br />상태",
				dataIndex:"MAIN_STAT",
				align:"center",
				width:75
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"금일<br />충전량",
				dataIndex:"NOW_WH",
				align:"center",
				width:55
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"금일<br />충전금액",
				dataIndex:"NOW_AMT",
				align:"center",
				width:65
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"누적<br />충전량",
				dataIndex:"PRE_WH",
				align:"center",
				width:65
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"누적<br />충전금액",
				dataIndex:"CHGE_TOT_POW",
				align:"center",
				width:80
			}]
		}]
	}]
	
});
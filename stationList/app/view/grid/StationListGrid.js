Ext.define('StList.view.grid.StationListGrid', {
	extend: 'Ext.panel.Panel',
	xtype: 'stlist-stationlistgrid',
	border:false,
	bodyStyle:"padding: 0px 13px; background:#2a2b34;",
	items:[{
		xtype:"panel",
		border:false,
		bodyStyle:"background:#2a2b34;",
		items:[{
			xtype:"panel",
			border:false,
			bodyStyle:"background:#2a2b34;",
			layout:{
				type:"hbox"
			},
			items:[{
				xtype:"label",
				style:"margin-top:30px; padding-bottom: 2px; font-size:21px; padding-left:23px; color:#ffffff; background:url(../resources/images/img/bullet.png) no-repeat left center; font-family: notokr-bold;",
				text:"충전소 목록",
				id:"stationListText"
			},{
				xtype:"container",
				width:390
			},{
				xtype:"label",
				id:"GU",
				text:"대구광역시",
				style:"margin-top:30px; color:#88e0e0; padding: 5px 0px 5px 30px; font-size:15px; background:url(../resources/images/img/position_icon.png) no-repeat left center;",
			}]
			
		},{
			xtype:"container",
			height:5
		},{
			xtype:"grid",
			id: "stationListGrid",
			height:428,
			columns:[{
				text:"충전소명",
				align:"center",
				dataIndex:"S_KO_STAT_NM",
				width:110
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"충전기ID",
				dataIndex:"C_CHGER_ID",
				align:"center",
				width:"fit",
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"충전기타입",
				dataIndex:"CHGER_TYPE_CD",
				align:"center",
				width:"fit",
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"상태",
				dataIndex:"MAIN_STAT",
				align:"center",
				width:"fit",
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"금일충전량",
				dataIndex:"NOW_WH",
				align:"center",
				width:"fit",
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"금일충전금액",
				dataIndex:"NOW_AMT",
				align:"center",
				width:"fit",
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"누적충전량",
				dataIndex:"PRE_WH",
				align:"center",
				width:"fit",
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"누적충전금액",
				dataIndex:"CHGE_TOT_POW",
				align:"center",
				width:"fit",
				//style:"color:white; font-size:20px; height:100px;"
			}]
		}]
	}]
	
});
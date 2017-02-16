Ext.define('StCon.view.grid.StationConGrid', {
	extend: 'Ext.panel.Panel',
	xtype: 'stcon-stationcongrid',
	bodyStyle:"background:#2a2b34;",
	border:false,
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
				xtype:"container",
				width:15
			},{
				xtype:"label",
				style:"padding-bottom: 2px; font-size:21px; margin-top:20px; padding-left:23px; color:#ffffff; background:url(../resources/images/img/bullet.png) no-repeat left center; font-family: notokr-bold;",
				text:"충전기 운영정보",
			},{
				xtype:"container",
				width:150
			},{
				xtype:"label",
				text:"충전기 총 운영",
				style:"font-size:17px; color:#fff4b4; margin-top:20px;",
			},{
				xtype:"container",
				width:5
			},{
				xtype:"label",
				id:"ALL_CHAG",
				style:"background:url(../resources/images/img/number_bg.png) no-repeat left center; margin-top:20px; text-align:center; font-size:15px; color:#fff4b4; width:40px; height:19px;"
			},{
				xtype:"container",
				width:10
			},{
				xtype:"image",
				style:"margin-top:20px;",
				src:"../resources/images/img/line2.gif"
			},{
				xtype:"container",
				width:10
			},{
				xtype:"label",
				//text:"총 등록 차량 수 (회원 주소지 기준)",
				text:"충전중",
				style:"font-size:17px; color:#fff4b4; margin-top:20px;",
			},{
				xtype:"container",
				width:5
			},{
				xtype:"label",
				id:"CHAG",
				style:"background:url(../resources/images/img/number_bg.png) no-repeat left center; margin-top:20px; text-align:center; font-size:15px; color:#fff4b4; width:40px; height:19px;"
			},{
				xtype:"container",
				width:10
			},{
				xtype:"image",
				style:"margin-top:20px;",
				src:"../resources/images/img/line2.gif"
			},{
				xtype:"container",
				width:10
			},{
				xtype:"label",
				//text:"총 등록 차량 수 (회원 주소지 기준)",
				text:"사용가능",
				style:"font-size:17px; color:#fff4b4; margin-top:20px;",
			},{
				xtype:"container",
				width:5
			},{
				xtype:"label",
				id:"AVAIL",
				style:"background:url(../resources/images/img/number_bg.png) no-repeat left center; margin-top:20px; text-align:center; font-size:15px; color:#fff4b4; width:40px; height:19px;"
			},{
				xtype:"container",
				width:10
			},{
				xtype:"image",
				style:"margin-top:20px;",
				src:"../resources/images/img/line2.gif"
			},{
				xtype:"container",
				width:10
			},{
				xtype:"label",
				text:"장애/고장",
				style:"font-size:17px; color:#fff4b4; margin-top:20px;",
			},{
				xtype:"container",
				height:10
			},{
				xtype:"container",
				width:5
			},{
				xtype:"label",
				id:"ERROR",
				style:"background:url(../resources/images/img/number_bg.png) no-repeat left center; margin-top:20px; text-align:center; font-size:15px; color:#fff4b4; width:40px; height:19px;"
			}]
		},{
			xtype:"container",
			height:20
		},{
			xtype:"grid",
			id:"stationConGrid",
			columns:[{
				text:"구분",
				align:"center",
				dataIndex:"STAT",
				width:100
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"합계",
				
				width:"fit",
				columns:[{
					text:"급속",
					dataIndex:"SUM_RAP",
					width:"fit"
				},{
					text:"완속",
					dataIndex:"SUM_SLOW",
					width:"fit"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"중구",
				width:"fit",
				columns:[{
					text:"급속",
					dataIndex:"CENTER_RAP",
					width:"fit"
				},{
					text:"완속",
					dataIndex:"CENTER_SLOW",
					width:"fit"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			
			
			},{
				text:"동구",
				width:"fit",
				columns:[{
					text:"급속",
					dataIndex:"EAST_RAP",
					width:"fit"
				},{
					text:"완속",
					dataIndex:"EAST_SLOW",
					width:"fit"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"서구",
				columns:[{
					text:"급속",
					width:"fit",
					dataIndex:"WEST_RAP"
				},{
					text:"완속",
					dataIndex:"WEST_SLOW",
					width:"fit"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"남구",
				
				columns:[{
					text:"급속",
					width:"fit",
					dataIndex:"SOUTH_RAP"
				},{
					text:"완속",
					width:"fit",
					dataIndex:"SOUTH_SLOW"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			
			},{
				text:"북구",
				
				columns:[{
					text:"급속",
					width:"fit",
					dataIndex:"NORTH_RAP"
				},{
					text:"완속",
					width:"fit",
					dataIndex:"NORTH_SLOW"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"수성구",
				
				columns:[{
					text:"급속",
					dataIndex:"SU_RAP",
					width:"fit"
				},{
					text:"완속",
					dataIndex:"SU_SLOW",
					width:"fit"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"달서구",
				columns:[{
					text:"급속",
					dataIndex:"DAL_1_RAP",
					width:"fit"
				},{
					text:"완속",
					dataIndex:"DAL_1_SLOW",
					width:"fit"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"달성군",
				
				columns:[{
					text:"급속",
					dataIndex:"DAL_2_RAP",
					width:"fit"
				},{
					text:"완속",
					dataIndex:"DAL_2_SLOW",
					width:"fit"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			}]
		}]
	},{
		xtype:"panel",
		border:false,
		bodyStyle:"background:#2a2b34;",
		layout:{
			type:"hbox"
		},
		items:[{
			xtype:"container",
			width:15
		},{
			xtype:"label",
			style:"margin-top:20px; padding-bottom: 2px; font-size:21px; padding-left:23px; color:#ffffff; background:url(../resources/images/img/bullet.png) no-repeat left center; font-family: notokr-bold;",
			text:"충전기 충전정보",
			id:"stationListText"
		},{
			xtype:"container",
			width:320
		},{
			xtype:"label",
			text:"당일 적산 전력량",
			style:"font-size:17px; color:#fff4b4; margin-top:20px;",
		},{
			xtype:"container",
			width:5
		},{
			xtype:"label",
			id:"ALL_SUM_1",
			style:"background:url(../resources/images/img/number_bg.png) no-repeat left center; margin-top:20px; text-align:center; font-size:15px; color:#fff4b4; width:40px; height:19px;"
		},{
			xtype:"container",
			width:10
		},{
			xtype:"image",
			style:"margin-top:20px;",
			src:"../resources/images/img/line2.gif"
		},{
			xtype:"container",
			width:10
		},{
			xtype:"label",
			text:"당일 누적 금액",
			style:"font-size:17px; color:#fff4b4; margin-top:20px;",
		},{
			xtype:"container",
			height:10
		},{
			xtype:"container",
			width:5
		},{
			xtype:"label",
			id:"ALL_SUM_2",
			style:"background:url(../resources/images/img/number_bg.png) no-repeat left center; margin-top:20px; text-align:center; font-size:15px; color:#fff4b4; width:40px; height:19px;"
		}]
	},{
		xtype:"container",
		height:20
	},{

		xtype:"grid",
		id:"stationConChagGrid",
		columns:[{
			text:"구분",
			align:"center",
			dataIndex:"STAT",
			width:100
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"합계",
			
			width:"fit",
			columns:[{
				text:"급속",
				dataIndex:"SUM_RAP",
				width:"fit"
			},{
				text:"완속",
				dataIndex:"SUM_SLOW",
				width:"fit"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"중구",
			width:"fit",
			columns:[{
				text:"급속",
				dataIndex:"CENTER_RAP",
				width:"fit"
			},{
				text:"완속",
				dataIndex:"CENTER_SLOW",
				width:"fit"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		
		
		},{
			text:"동구",
			width:"fit",
			columns:[{
				text:"급속",
				dataIndex:"EAST_RAP",
				width:"fit"
			},{
				text:"완속",
				dataIndex:"EAST_SLOW",
				width:"fit"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"서구",
			columns:[{
				text:"급속",
				width:"fit",
				dataIndex:"WEST_RAP"
			},{
				text:"완속",
				dataIndex:"WEST_SLOW",
				width:"fit"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"남구",
			
			columns:[{
				text:"급속",
				width:"fit",
				dataIndex:"SOUTH_RAP"
			},{
				text:"완속",
				width:"fit",
				dataIndex:"SOUTH_SLOW"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		
		},{
			text:"북구",
			
			columns:[{
				text:"급속",
				width:"fit",
				dataIndex:"NORTH_RAP"
			},{
				text:"완속",
				width:"fit",
				dataIndex:"NORTH_SLOW"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"수성구",
			
			columns:[{
				text:"급속",
				dataIndex:"SU_RAP",
				width:"fit"
			},{
				text:"완속",
				dataIndex:"SU_SLOW",
				width:"fit"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"달서구",
			columns:[{
				text:"급속",
				dataIndex:"DAL_1_RAP",
				width:"fit"
			},{
				text:"완속",
				dataIndex:"DAL_1_SLOW",
				width:"fit"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"달성군",
			
			columns:[{
				text:"급속",
				dataIndex:"DAL_2_RAP",
				width:"fit"
			},{
				text:"완속",
				dataIndex:"DAL_2_SLOW",
				width:"fit"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		}]
	
	}]
});
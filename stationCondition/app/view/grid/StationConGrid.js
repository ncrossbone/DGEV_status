Ext.define('StCon.view.grid.StationConGrid', {
	extend: 'Ext.panel.Panel',
	xtype: 'stcon-stationcongrid',
	bodyStyle:"background:#2a2b34;",
	width:"100%",
	height:1080,
	border:false,
	items:[{
		xtype:"panel",
		border:false,
		width:"100%",
		bodyStyle:"background:#2a2b34;",
		items:[{
			xtype:"panel",
			border:false,
			width:"100%",
			height:78,
			id:"topLabel",
			bodyStyle:"background:#2a2b34; padding-top:10px",
			layout:{
				type:"hbox"
			},
			items:[{
				xtype:"container",
				width:15
			},{
				xtype:"label",
				style:"padding-bottom: 1px; font-size:21px; margin-top:20px; padding-left:23px; color:#ffffff; background:url(../resources/images/img/bullet.png) no-repeat left center; font-family: notokr-bold; background-size: 18px;",
				text:"충전기 운영정보",
			},{
				xtype:"container",
				width:850
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
				cls:"topLNum"
			},{
				xtype:"image",
				style:"margin-top:20px;",
				src:"../resources/images/img/line2.gif"
			},{
				xtype:"container",
				width:15
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
				cls:"topLNum"
			},{
				xtype:"image",
				style:"margin-top:20px;",
				src:"../resources/images/img/line2.gif"
			},{
				xtype:"container",
				width:15
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
				cls:"topLNum"
			},{
				xtype:"image",
				style:"margin-top:20px;",
				src:"../resources/images/img/line2.gif"
			},{
				xtype:"container",
				width:15
			},{
				xtype:"label",
				text:"장애/고장",
				style:"font-size:17px; color:#fff4b4; margin-top:20px; background-size: cover;",
			},{
				xtype:"container",
				height:10
			},{
				xtype:"container",
				width:5
			},{
				xtype:"label",
				id:"ERROR",
				cls:"topLNum"
			}]
		},{
			xtype:"grid",
			id:"stationConGrid",
			columns:[{
				text:"구분",
				align:"center",
				dataIndex:"STAT",
				width:244,
				height:100
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"합계",				
				width:186,
				cls:"statConSum",
				//style:"height:50px;",
				columns:[{
					text:"급속",
					dataIndex:"SUM_RAP",
					width:"50%",
					//height:50
				},{
					text:"완속",
					dataIndex:"SUM_SLOW",
					width:"50%"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"중구",
				width:186,
				columns:[{
					text:"급속",
					dataIndex:"CENTER_RAP",
					width:"50%"
				},{
					text:"완속",
					dataIndex:"CENTER_SLOW",
					width:"50%"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			
			
			},{
				text:"동구",
				width:186,
				columns:[{
					text:"급속",
					dataIndex:"EAST_RAP",
					width:"50%"
				},{
					text:"완속",
					dataIndex:"EAST_SLOW",
					width:"50%"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"서구",
				width:186,
				columns:[{
					text:"급속",
					width:"50%",
					dataIndex:"WEST_RAP"
				},{
					text:"완속",
					dataIndex:"WEST_SLOW",
					width:"50%"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"남구",
				width:186,
				columns:[{
					text:"급속",
					width:"50%",
					dataIndex:"SOUTH_RAP"
				},{
					text:"완속",
					width:"50%",
					dataIndex:"SOUTH_SLOW"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			
			},{
				text:"북구",
				width:186,
				columns:[{
					text:"급속",
					width:"50%",
					dataIndex:"NORTH_RAP"
				},{
					text:"완속",
					width:"50%",
					dataIndex:"NORTH_SLOW"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"수성구",
				width:186,
				columns:[{
					text:"급속",
					dataIndex:"SU_RAP",
					width:"50%"
				},{
					text:"완속",
					dataIndex:"SU_SLOW",
					width:"50%"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"달서구",
				width:186,
				columns:[{
					text:"급속",
					dataIndex:"DAL_1_RAP",
					width:"50%"
				},{
					text:"완속",
					dataIndex:"DAL_1_SLOW",
					width:"50%"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"달성군",
				width:186,
				columns:[{
					text:"급속",
					dataIndex:"DAL_2_RAP",
					width:"50%"
				},{
					text:"완속",
					dataIndex:"DAL_2_SLOW",
					width:"50%"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			}]
		}]
	},{
		xtype:"container",
		height:100
	},{
		xtype:"panel",
		border:false,
		height:78,
		id:"btmLabel",
		bodyStyle:"background:#2a2b34;",
		layout:{
			type:"hbox"
		},
		items:[{
			xtype:"container",
			width:15
		},{
			xtype:"label",
			style:"margin-top:20px; padding-bottom: 1px; font-size:21px; padding-left:23px; color:#ffffff; background:url(../resources/images/img/bullet.png) no-repeat left center; font-family: notokr-bold; background-size: 18px;",
			text:"충전기 충전정보",
			id:"stationListText"
		},{
			xtype:"container",
			width:1170
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
			cls:"btmNum"
		},{
			xtype:"image",
			style:"margin-top:20px;",
			src:"../resources/images/img/line2.gif"
		},{
			xtype:"container",
			width:15
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
			cls:"btmNum"
		}]
	},{

		xtype:"grid",
		id:"stationConChagGrid",
		columns:[{
			text:"구분",
			align:"center",
			dataIndex:"STAT",
			width:244,
			height:100
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"합계",
			width:186,
			columns:[{
				text:"급속",
				dataIndex:"SUM_RAP",
				width:"50%"
			},{
				text:"완속",
				dataIndex:"SUM_SLOW",
				width:"50%"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"중구",
			width:186,
			columns:[{
				text:"급속",
				dataIndex:"CENTER_RAP",
				width:"50%"
			},{
				text:"완속",
				dataIndex:"CENTER_SLOW",
				width:"50%"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		
		
		},{
			text:"동구",
			width:186,
			columns:[{
				text:"급속",
				dataIndex:"EAST_RAP",
				width:"50%"
			},{
				text:"완속",
				dataIndex:"EAST_SLOW",
				width:"50%"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"서구",
			width:186,
			columns:[{
				text:"급속",
				dataIndex:"WEST_RAP",
				width:"50%"
			},{
				text:"완속",
				dataIndex:"WEST_SLOW",
				width:"50%"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"남구",
			width:186,
			columns:[{
				text:"급속",
				dataIndex:"SOUTH_RAP",
				width:"50%"
			},{
				text:"완속",
				dataIndex:"SOUTH_SLOW",
				width:"50%"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		
		},{
			text:"북구",
			width:186,
			columns:[{
				text:"급속",
				dataIndex:"NORTH_RAP",
				width:"50%"
			},{
				text:"완속",
				dataIndex:"NORTH_SLOW",
				width:"50%"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"수성구",
			width:186,
			columns:[{
				text:"급속",
				dataIndex:"SU_RAP",
				width:"50%"
			},{
				text:"완속",
				dataIndex:"SU_SLOW",
				width:"50%"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"달서구",
			width:186,
			columns:[{
				text:"급속",
				dataIndex:"DAL_1_RAP",
				width:"50%"
			},{
				text:"완속",
				dataIndex:"DAL_1_SLOW",
				width:"50%"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"달성군",
			width:186,
			columns:[{
				text:"급속",
				dataIndex:"DAL_2_RAP",
				width:"50%"
			},{
				text:"완속",
				dataIndex:"DAL_2_SLOW",
				width:"50%"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		}]
	
	}]
});
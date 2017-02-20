Ext.define('UseCon.view.grid.UseConGrid', {
	extend: 'Ext.panel.Panel',
	xtype: 'usecon-usecongrid',
	bodyStyle:"background:#2a2b34;",
	border:false,
	width:"100%",
	height:"100%",
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
				style:"margin-top:20px; padding-bottom: 1px; font-size:21px; padding-left:23px; color:#ffffff; background:url(../resources/images/img/bullet.png) no-repeat left center; font-family: notokr-bold; background-size: 18px;",
				text:"이용현황",
				id:"stationListText"
			},{
				xtype:"container",
				width:300
			}/*,{
				xtype:"textfield",
				fieldLabel:"총 가입 회원 수",
				id:"joinCnt",
				style:"margin-top:20px;",
				value:"명",
				width:200,
				labelWidth:100,
				labelSeparator : '',
				editable:false,
				labelStyle:"font-weight: bold;",
				fieldStyle:"text-align: right;",
			},*/,{
				xtype:"label",
				text:"총 가입 회원 수",
				style:"font-size:17px; color:#fff4b4; margin-top:20px;",
			},{
				xtype:"container",
				width:5
			},{
				xtype:"label",
				id:"joinCnt",
				style:"background:url(../resources/images/img/number_bg.png) no-repeat left center; margin-top:20px; text-align:center; font-size:15px; color:#fff4b4; width:40px; height:19px; background-size: cover;"
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
				text:"총 등록 차량 수",
				style:"font-size:17px; color:#fff4b4; margin-top:20px;",
			},{
				xtype:"container",
				width:5
			},{
				xtype:"label",
				id:"carCnt",
				style:"background:url(../resources/images/img/number_bg.png) no-repeat left center; margin-top:20px; text-align:center; font-size:15px; color:#fff4b4; width:40px; height:19px; background-size: cover;"
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
				text:"회원카드신청",
				style:"font-size:17px; color:#fff4b4; margin-top:20px;",
			},{
				xtype:"container",
				height:10
			},{
				xtype:"container",
				width:5
			},{
				xtype:"label",
				id:"cardCnt",
				style:"background:url(../resources/images/img/number_bg.png) no-repeat left center; margin-top:20px; text-align:center; font-size:15px; color:#fff4b4; width:40px; height:19px; background-size: cover;"
			}]
		},{
			xtype:"container",
			height:20
		},{
			xtype:"grid",
			id:"useCondition",
			width:"100%",
			height:"100%",
			columns:[{
				text:"구분",
				align:"center",
				dataIndex:"GUBUN",
				width:"10%"
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"합계",
				width:"10%",
				columns:[{
					text:"개인",
					dataIndex:"ALL_PVT",
					width:"50%"
				},{
					text:"법인",
					dataIndex:"ALL_COM",
					width:"50%"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"중구",
				width:"10%",
				columns:[{
					text:"개인",
					dataIndex:"CENTER_PVT",
					width:"50%"
				},{
					text:"법인",
					dataIndex:"CENTER_COM",
					width:"50%"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"동구",
				width:"10%",
				columns:[{
					text:"개인",
					dataIndex:"EAST_PVT",
					width:"50%"
				},{
					text:"법인",
					dataIndex:"EAST_COM",
					width:"50%"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"서구",
				width:"10%",
				columns:[{
					text:"개인",
					width:"50%",
					dataIndex:"WEST_PVT"
				},{
					text:"법인",
					width:"50%",
					dataIndex:"WEST_COM"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"남구",
				
				columns:[{
					text:"개인",
					width:"50%",
					dataIndex:"SOUTH_PVT"
				},{
					text:"법인",
					width:"50%",
					dataIndex:"SOUTH_COM"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"북구",
				columns:[{
					text:"개인",
					width:"50%",
					dataIndex:"NORTH_PVT"
				},{
					text:"법인",
					width:"50%",
					dataIndex:"NORTH_COM"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"수성구",
				
				columns:[{
					text:"개인",
					dataIndex:"SU_PVT",
					width:"50%"
				},{
					text:"법인",
					dataIndex:"SU_COM",
					width:"50%"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"달서구",
				columns:[{
					text:"개인",
					dataIndex:"DAL_1_PVT",
					width:"50%"
				},{
					text:"법인",
					dataIndex:"DAL_1_COM",
					width:"50%"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"달성군",
				
				columns:[{
					text:"개인",
					dataIndex:"DAL_2_PVT",
					width:"50%"
				},{
					text:"법인",
					dataIndex:"DAL_2_COM",
					width:"50%"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			}]
		}]
	}/*,{
		xtype:"panel",
		items:[{
			xtype:"container",
			height:10
		},{
			xtype:"label",
			text:"충전기 충전정보(2017년 01월 30일 17:00 현재)"			
		},{
			xtype:"panel",
			border:false,
			layout:{
				type:"hbox"
			},
			items:[{
				xtype:"label",
				text:"개인회원"			
			},{
				xtype:"container",
				width:10
			},{
				xtype:"textfield",
				fieldLabel:"당일 적산 충전량",
				value:"kWh",
				width:200,
				labelWidth:100,
				labelSeparator : '',
				editable:false,
				labelStyle:"font-weight: bold;",
				fieldStyle:"text-align: right;",
			},{
				xtype:"container",
				width:20
			},{
				xtype:"textfield",
				fieldLabel:"당일 누적 충전금액",
				value:"원",
				width:250,
				labelWidth:150,
				labelSeparator : '',
				editable:false,
				labelStyle:"font-weight: bold;",
				fieldStyle:"text-align: right;",
			},{
				xtype:"container",
				height:10
			},{
				xtype:"container",
				width:10
			},{
				xtype:"label",
				text:"법인회원"			
			},{
				xtype:"textfield",
				fieldLabel:"당일 적산 충전량",
				value:"kWh",
				width:200,
				labelWidth:100,
				labelSeparator : '',
				editable:false,
				labelStyle:"font-weight: bold;",
				fieldStyle:"text-align: right;",
			},{
				xtype:"container",
				width:20
			},{
				xtype:"textfield",
				fieldLabel:"당일 누적 충전금액",
				value:"원",
				width:250,
				labelWidth:150,
				labelSeparator : '',
				editable:false,
				labelStyle:"font-weight: bold;",
				fieldStyle:"text-align: right;",
			},{
				xtype:"container",
				height:10
			}]
		}]
	},{

		xtype:"grid",
		columns:[{
			text:"구분",
			align:"center",
			dataIndex:"name",
			width:100
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"합계",
			
			width:"fit",
			columns:[{
				text:"개인",
				dataIndex:"stId",
				width:"fit"
			},{
				text:"법인",
				width:"fit"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"중구",
			width:"fit",
			columns:[{
				text:"개인",
				dataIndex:"type",
				width:"fit"
			},{
				text:"법인",
				width:"fit"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"동구",
			width:"fit",
			columns:[{
				text:"개인",
				dataIndex:"con",
				width:"fit"
			},{
				text:"법인",
				width:"fit"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"서구",
			columns:[{
				text:"개인",
				width:"fit",
				dataIndex:"nowCharge"
			},{
				text:"법인",
				width:"fit"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"남구",
			
			columns:[{
				text:"개인",
				width:"fit",
				dataIndex:"allCharge"
			},{
				text:"법인",
				width:"fit"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"북구",
			
			columns:[{
				text:"개인",
				width:"fit",
				dataIndex:"nowPrice"
			},{
				text:"법인",
				width:"fit"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"수성구",
			
			columns:[{
				text:"개인",
				dataIndex:"allPrice",
				width:"fit"
			},{
				text:"법인",
				width:"fit"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"달서구",
			columns:[{
				text:"개인",
				dataIndex:"nowPrice",
				width:"fit"
			},{
				text:"법인",
				width:"fit"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"달성군",
			
			columns:[{
				text:"개인",
				dataIndex:"allPrice",
				width:"fit"
			},{
				text:"법인",
				width:"fit"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		}],
		store: Ext.create('Ext.data.Store',{
			data:[{name:"적산 충전량",stId:"01",type:"개인",con:"충전중",nowCharge:"1234kWh",allCharge:"1234kWh",nowPrice:"1234원",allPrice:"1234원"},
			      {name:"누적 충전금액",stId:"01",type:"개인",con:"충전중",nowCharge:"1234kWh",allCharge:"1234kWh",nowPrice:"1234원",allPrice:"1234원"}]
			     
		})
	
	}*/]
});
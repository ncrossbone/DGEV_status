Ext.define('StCon.view.grid.StationConGrid', {
	extend: 'Ext.panel.Panel',
	xtype: 'stcon-stationcongrid',
	border:false,
	items:[{
		xtype:"panel",
		title:"충전기현황",
		border:false,
		items:[{
			xtype:"panel",
			items:[{
				xtype:"container",
				height:10
			},{
				xtype:"label",
				text:"충전기 운영정보(2017년 01월 30일 17:00 현재)"			
			},{
				xtype:"panel",
				border:false,
				layout:{
					type:"hbox"
				},
				items:[{
					xtype:"container",
					width:10
				},{
					xtype:"textfield",
					fieldLabel:"충전기 총 운영",
					value:"기",
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
					fieldLabel:"충전중",
					value:"기",
					width:150,
					labelWidth:40,
					labelSeparator : '',
					editable:false,
					labelStyle:"font-weight: bold;",
					fieldStyle:"text-align: right;",
				},{
					xtype:"container",
					width:20
				},{
					xtype:"textfield",
					fieldLabel:"사용가능",
					value:"기",
					width:150,
					labelWidth:60,
					labelSeparator : '',
					editable:false,
					labelStyle:"font-weight: bold;",
					fieldStyle:"text-align: right;",
				},{
					xtype:"container",
					width:20
				},{
					xtype:"textfield",
					fieldLabel:"장애/고장",
					value:"기",
					width:150,
					labelWidth:60,
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
					text:"급속",
					dataIndex:"stId",
					width:"fit"
				},{
					text:"완속",
					width:"fit"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"중구",
				width:"fit",
				columns:[{
					text:"급속",
					dataIndex:"type",
					width:"fit"
				},{
					text:"완속",
					width:"fit"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"동구",
				width:"fit",
				columns:[{
					text:"급속",
					dataIndex:"con",
					width:"fit"
				},{
					text:"완속",
					width:"fit"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"서구",
				columns:[{
					text:"급속",
					width:"fit",
					dataIndex:"nowCharge"
				},{
					text:"완속",
					width:"fit"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"남구",
				
				columns:[{
					text:"급속",
					width:"fit",
					dataIndex:"allCharge"
				},{
					text:"완속",
					width:"fit"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"북구",
				
				columns:[{
					text:"급속",
					width:"fit",
					dataIndex:"nowPrice"
				},{
					text:"완속",
					width:"fit"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"수성구",
				
				columns:[{
					text:"급속",
					dataIndex:"allPrice",
					width:"fit"
				},{
					text:"완속",
					width:"fit"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"달서구",
				columns:[{
					text:"급속",
					dataIndex:"nowPrice",
					width:"fit"
				},{
					text:"완속",
					width:"fit"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"달성군",
				
				columns:[{
					text:"급속",
					dataIndex:"allPrice",
					width:"fit"
				},{
					text:"완속",
					width:"fit"
				}]
				//style:"color:white; font-size:20px; height:100px;"
			}],
			store: Ext.create('Ext.data.Store',{
				data:[{name:"충전중",stId:"01",type:"급속",con:"충전중",nowCharge:"1234kWh",allCharge:"1234kWh",nowPrice:"1234원",allPrice:"1234원"},
				      {name:"사용가능",stId:"01",type:"급속",con:"충전중",nowCharge:"1234kWh",allCharge:"1234kWh",nowPrice:"1234원",allPrice:"1234원"},
				      {name:"운영중지",stId:"01",type:"급속",con:"충전중",nowCharge:"1234kWh",allCharge:"1234kWh",nowPrice:"1234원",allPrice:"1234원"},
				      {name:"점검중",stId:"01",type:"급속",con:"충전중",nowCharge:"1234kWh",allCharge:"1234kWh",nowPrice:"1234원",allPrice:"1234원"}]
				     
			})
		}]
	},{
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
				xtype:"container",
				width:10
			},{
				xtype:"textfield",
				fieldLabel:"당일 적산 전력량",
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
				fieldLabel:"당일 누적 금액",
				value:"원",
				width:200,
				labelWidth:100,
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
				text:"급속",
				dataIndex:"stId",
				width:"fit"
			},{
				text:"완속",
				width:"fit"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"중구",
			width:"fit",
			columns:[{
				text:"급속",
				dataIndex:"type",
				width:"fit"
			},{
				text:"완속",
				width:"fit"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"동구",
			width:"fit",
			columns:[{
				text:"급속",
				dataIndex:"con",
				width:"fit"
			},{
				text:"완속",
				width:"fit"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"서구",
			columns:[{
				text:"급속",
				width:"fit",
				dataIndex:"nowCharge"
			},{
				text:"완속",
				width:"fit"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"남구",
			
			columns:[{
				text:"급속",
				width:"fit",
				dataIndex:"allCharge"
			},{
				text:"완속",
				width:"fit"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"북구",
			
			columns:[{
				text:"급속",
				width:"fit",
				dataIndex:"nowPrice"
			},{
				text:"완속",
				width:"fit"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"수성구",
			
			columns:[{
				text:"급속",
				dataIndex:"allPrice",
				width:"fit"
			},{
				text:"완속",
				width:"fit"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"달서구",
			columns:[{
				text:"급속",
				dataIndex:"nowPrice",
				width:"fit"
			},{
				text:"완속",
				width:"fit"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		},{
			text:"달성군",
			
			columns:[{
				text:"급속",
				dataIndex:"allPrice",
				width:"fit"
			},{
				text:"완속",
				width:"fit"
			}]
			//style:"color:white; font-size:20px; height:100px;"
		}],
		store: Ext.create('Ext.data.Store',{
			data:[{name:"전력량",stId:"01",type:"급속",con:"충전중",nowCharge:"1234kWh",allCharge:"1234kWh",nowPrice:"1234원",allPrice:"1234원"},
			      {name:"충전금액",stId:"01",type:"급속",con:"충전중",nowCharge:"1234kWh",allCharge:"1234kWh",nowPrice:"1234원",allPrice:"1234원"}]
			     
		})
	
	}]
});
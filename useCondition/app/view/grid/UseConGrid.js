Ext.define('UseCon.view.grid.UseConGrid', {
	extend: 'Ext.panel.Panel',
	xtype: 'usecon-usecongrid',
	border:false,
	items:[{
		xtype:"panel",
		title:"이용현황",
		border:false,
		items:[{
			xtype:"panel",
			items:[{
				xtype:"container",
				height:10
			},{
				xtype:"label",
				text:"회원 현황(2017년 01월 30일 17:00 현재)"			
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
					fieldLabel:"총 가입 회원 수",
					value:"명",
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
					fieldLabel:"총 등록 차량 수 (회원 주소지 기준)",
					value:"대",
					width:300,
					labelWidth:200,
					labelSeparator : '',
					editable:false,
					labelStyle:"font-weight: bold;",
					fieldStyle:"text-align: right;",
				},{
					xtype:"container",
					width:20
				},{
					xtype:"textfield",
					fieldLabel:"가입대기",
					value:"명",
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
					fieldLabel:"회원카드신청",
					value:"건",
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
				width:200
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
				data:[{name:"가입회원 (가입대기)",stId:"01",type:"개인",con:"충전중",nowCharge:"1234kWh",allCharge:"1234kWh",nowPrice:"1234원",allPrice:"1234원"},
				      {name:"등록차량 (회원카드 신청대기)",stId:"01",type:"개인",con:"충전중",nowCharge:"1234kWh",allCharge:"1234kWh",nowPrice:"1234원",allPrice:"1234원"}]
				     
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
	
	}]
});
Ext.define('ErrList.view.grid.ErrorGrid', {
	extend: 'Ext.panel.Panel',
	xtype: 'errlist-errorgrid',
	border:false,
	items:[{
		xtype:"panel",
		title:"민원(장애)현황",
		border:false,
		items:[{
			xtype:"container",
			height:10
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
				fieldLabel:"접수",
				value:"건",
				width:150,
				labelWidth:30,
				labelSeparator : '',
				editable:false,
				labelStyle:"font-weight: bold;",
				fieldStyle:"text-align: right;",
			},{
				xtype:"container",
				width:20
			},{
				xtype:"textfield",
				fieldLabel:"진행중",
				value:"건",
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
				fieldLabel:"조치완료",
				value:"건",
				width:150,
				labelWidth:60,
				labelSeparator : '',
				editable:false,
				labelStyle:"font-weight: bold;",
				fieldStyle:"text-align: right;",
			}]
		},{
			xtype:"container",
			height:10
		},{
			xtype:"grid",
			columns:[{
				text:"발생일시",
				align:"center",
				dataIndex:"name",
				width:"fit",
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"충전소명",
				dataIndex:"stId",
				width:"fit",
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"충전소ID",
				dataIndex:"type",
				width:"fit",
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"장애구분",
				dataIndex:"con",
				width:"fit",
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"처리상태",
				dataIndex:"nowCharge",
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"점수자",
				dataIndex:"allCharge",
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"조치담당자",
				dataIndex:"nowPrice",
				//style:"color:white; font-size:20px; height:100px;"
			}],
			store: Ext.create('Ext.data.Store',{
				data:[{name:"달서구청",stId:"01",type:"급속",con:"충전중",nowCharge:"1234kWh",allCharge:"1234kWh",nowPrice:"1234원",allPrice:"1234원"},
				      {name:"달서구청",stId:"01",type:"급속",con:"충전중",nowCharge:"1234kWh",allCharge:"1234kWh",nowPrice:"1234원",allPrice:"1234원"},
				      {name:"달서구청",stId:"01",type:"급속",con:"충전중",nowCharge:"1234kWh",allCharge:"1234kWh",nowPrice:"1234원",allPrice:"1234원"},
				      {name:"달서구청",stId:"01",type:"급속",con:"충전중",nowCharge:"1234kWh",allCharge:"1234kWh",nowPrice:"1234원",allPrice:"1234원"},
				      {name:"달서구청",stId:"01",type:"급속",con:"충전중",nowCharge:"1234kWh",allCharge:"1234kWh",nowPrice:"1234원",allPrice:"1234원"},
				      {name:"달서구청",stId:"01",type:"급속",con:"충전중",nowCharge:"1234kWh",allCharge:"1234kWh",nowPrice:"1234원",allPrice:"1234원"},
				      {name:"달서구청",stId:"01",type:"급속",con:"충전중",nowCharge:"1234kWh",allCharge:"1234kWh",nowPrice:"1234원",allPrice:"1234원"},
				      {name:"달서구청",stId:"01",type:"급속",con:"충전중",nowCharge:"1234kWh",allCharge:"1234kWh",nowPrice:"1234원",allPrice:"1234원"},
				      {name:"달서구청",stId:"01",type:"급속",con:"충전중",nowCharge:"1234kWh",allCharge:"1234kWh",nowPrice:"1234원",allPrice:"1234원"},
				      {name:"달서구청",stId:"01",type:"급속",con:"충전중",nowCharge:"1234kWh",allCharge:"1234kWh",nowPrice:"1234원",allPrice:"1234원"},
				      {name:"달서구청",stId:"01",type:"급속",con:"충전중",nowCharge:"1234kWh",allCharge:"1234kWh",nowPrice:"1234원",allPrice:"1234원"},
				      {name:"달서구청",stId:"01",type:"급속",con:"충전중",nowCharge:"1234kWh",allCharge:"1234kWh",nowPrice:"1234원",allPrice:"1234원"},
				      {name:"달서구청",stId:"01",type:"급속",con:"충전중",nowCharge:"1234kWh",allCharge:"1234kWh",nowPrice:"1234원",allPrice:"1234원"}]

			})
		}]
	}]
});
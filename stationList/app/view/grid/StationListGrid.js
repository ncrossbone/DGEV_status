Ext.define('StList.view.grid.StationListGrid', {
	extend: 'Ext.panel.Panel',
	xtype: 'stlist-stationlistgrid',
	border:false,
	items:[{
		xtype:"panel",
		title:"충전기목록",
		border:false,
		items:[{
			xtype:"label",
			text:"달서구"
		},{
			xtype:"grid",
			columns:[{
				text:"충전소명",
				align:"center",
				dataIndex:"name",
				width:"fit",
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"충전기ID",
				dataIndex:"stId",
				width:"fit",
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"충전기타입",
				dataIndex:"type",
				width:"fit",
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"상태",
				dataIndex:"con",
				width:"fit",
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"금일충전량",
				dataIndex:"nowCharge",
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"누적충전량",
				dataIndex:"allCharge",
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"금일충전금액",
				dataIndex:"nowPrice",
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"누적충전금액",
				dataIndex:"allPrice",
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
				      {name:"달서구청",stId:"01",type:"급속",con:"충전중",nowCharge:"1234kWh",allCharge:"1234kWh",nowPrice:"1234원",allPrice:"1234원"}]
				     
			})
		}]
	}]
	
});
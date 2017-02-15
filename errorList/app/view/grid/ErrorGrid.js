Ext.define('ErrList.view.grid.ErrorGrid', {
	extend: 'Ext.panel.Panel',
	xtype: 'errlist-errorgrid',
	border:false,
	bodyStyle:"padding: 0px 13px; background:#2a2b34;",
	items:[{
		xtype:"panel",
		border:false,
		bodyStyle:"background:#2a2b34;",
		items:[{
			xtype:"panel",
			bodyStyle:"background:#2a2b34;",
			border:false,
			layout:{
				type:"hbox"
			},
			items:[{
				xtype:"label",
				style:"padding-bottom: 2px; font-size:21px; margin-top:20px; padding-left:23px; color:#ffffff; background:url(../resources/images/img/bullet.png) no-repeat left center; font-family: notokr_bold;",
				text:"장애 현황",
			},/*{
				xtype:"textfield",
				fieldLabel:"접수",
				style:"margin-top:20px;",
				value:"건",
				width:150,
				labelWidth:30,
				labelSeparator : '',
				editable:false,
				labelStyle:"font-weight: bold;",
				fieldStyle:"text-align: right;",
			}*/,{
				xtype:"container",
				width:170
			},{
				xtype:"label",
				text:"접수",
				style:"font-size:17px; color:#fff4b4; margin-top:20px;",
			},{
				xtype:"container",
				width:5
			},{
				xtype:"label",
				id:"joinCnt",
				text:5,
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
				text:"진행중",
				style:"font-size:17px; color:#fff4b4; margin-top:20px;",
			},{
				xtype:"container",
				width:5
			},{
				xtype:"label",
				id:"errorRun",
				text:"0",
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
				text:"조치완료",
				style:"font-size:17px; color:#fff4b4; margin-top:20px;",
			},{
				xtype:"container",
				width:5
			},{
				xtype:"label",
				id:"errorEnd",
				text:"0",
				style:"background:url(../resources/images/img/number_bg.png) no-repeat left center; margin-top:20px; text-align:center; font-size:15px; color:#fff4b4; width:40px; height:19px;"
			}/*,{
				xtype:"container",
				width:20
			},{
				xtype:"textfield",
				fieldLabel:"진행중",
				style:"margin-top:20px;",
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
				style:"margin-top:20px;",
				value:"건",
				width:150,
				labelWidth:60,
				labelSeparator : '',
				editable:false,
				labelStyle:"font-weight: bold;",
				fieldStyle:"text-align: right;",
			}*/]
		},{
			xtype:"container",
			height:15
		},{
			xtype:"grid",
			id:"errorGrid",
			height:380,
			columns:[{
				text:"발생일시",
				align:"center",
				width:"fit",
				dataIndex:"OCCUR_DATE"
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"충전소명",
				dataIndex:"KO_STAT_NM",
				align:"center",
				width:120
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"충전기ID",
				dataIndex:"CHGER_ID",
				align:"center",
				width:"fit",
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"장애구분",
				dataIndex:"TROUBLE_CODE",
				align:"center",
				width:"fit",
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"처리상태",
				align:"center",
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"접수자",
				align:"center",
				//style:"color:white; font-size:20px; height:100px;"
			},{
				text:"조치담당자",
				align:"center",
				dataIndex:"REPAIR_MAN",
				//style:"color:white; font-size:20px; height:100px;"
			}]
		}]
	}]
});
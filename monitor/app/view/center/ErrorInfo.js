Ext.define("Monitor.view.center.ErrorInfo", {

	extend: "Ext.window.Window",
	id:"errorInfo",
	title:"충전기 장애발생",
	style:"",
	border:false,
	width:400,
	height:400,
	items:[{
		xtype:"panel",
		border:false,
		id:"errorTitle",
		title:"<div>동대구복합환승센터</div><div>충전기 #01(급속)</div>",
		layout:{
			type:"vbox"
		},
		items:[{
			xtype:"container",
			height:"100"
		},{
			xtype:"panel",
			width:"100%",
			height:40,
			bodyStyle:"background:#f1f1f1; padding-top: 11px; border: 0px; border-bottom: 1px solid #d8d8d8 !important; border-top:1px solid #d8d8d8 !important; ",
			items:[{
				xtype:"label",
				style:"font-family:notokr-bold; margin-top:7px; color:#000; font-size:14px; padding-top:2px; background: url(../resources/images/error/pop_menu1.png) no-repeat 20px center; background-size: 19px 21px !important; padding-left:43px; letter-spacing:-1px;",
				text:"장애정보"
			}]
		},{
			xtype:"panel",
			border:false,
			width:"100%",
			layout:{
				type:"hbox"
			},
			bodyStyle:"border-bottom:1px solid #d8d8d8 !important; ",
			items:[{
				xtype:"label",
				text:"장애코드",
				width:"79px",
				style:"padding:10px 0px !important; text-align: center !important; border-right:1px solid #d8d8d8 !important; letter-spancing:-1px !important; font-size:13px !important; color: #343434 !important;"
			},{
				xtype:"label",
				id:"errorCode",
				width:"119px",
				style:"border-right:1px solid #d8d8d8 !important; text-align: center !important; padding:10px 0px !important; font-size:13px !important; color: #343434 !important; "
			},{
				xtype:"label",
				text:"장애분류",
				width:"79px",
				style:"border-right:1px solid #d8d8d8 !important; text-align: center !important; padding:10px 0px !important;  letter-spancing:-1px !important; font-size:13px !important; color: #343434 !important;"
			},{
				xtype:"label",
				text:"zzz",
				width:"119px",
				id:"errorKind",
				style:"padding:10px 0px !important; text-align: center !important; font-size:13px !important; color: #343434 !important; "
			}]
		},{
			xtype:"panel",
			border:false,
			width:"100%",
			height:100,
			layout:{
				type:"hbox"
			},
			//bodyStyle:"border-bottom:1px solid #d8d8d8 !important",
			items:[{
				xtype:"label",
				width:"79px",
				text:"상세정보",
				height:100,
			    style:"border-right:1px solid #d8d8d8 !important; padding-top:40px !important; text-align:center !important;  letter-spancing:-1px !important; font-size:13px !important; color: #343434 !important;"
			},{
				xtype:"label",
				width:"317px",
				height:100,
				id:"errorDetail",
			    style:"padding:10px 0px !important; font-size:13px !important; color: #343434 !important; padding:10px !important;  overflow-y:auto !important;"				
			}]
		},{
			xtype:"panel",
			width:"100%",
			height:40,
			layout:{
				type:"hbox"
			},
			bodyStyle:"background:#f1f1f1; padding-top: 4px; border: 0px; border-bottom: 1px solid #d8d8d8 !important; border-top:1px solid #d8d8d8 !important; ",
			items:[{
				xtype:"label",
				style:"font-family:notokr-bold; color:#000; font-size:14px; background: url(../resources/images/error/pop_menu2.png) no-repeat 20px center; background-size: 19px 17px !important; padding-left:43px; letter-spacing:-1px; margin-top:6px !important;",
				text:"원격명령"
			},{
				xtype:"container",
				width:196
			},{
				xtype:"button",
				height:30,
				style:"padding: 2px 6px !important; background: #004493 !important; border: 1px solid #002b5d !important; letter-spacing: -1px; ",
				text:"충전기 재시작"
			}]
		},{
			xtype:"panel",
			width:"100%",
			height:40,
			layout:{
				type:"hbox"
			},
			bodyStyle:"background:#f1f1f1; padding-top: 4px; border: 0px; border-bottom: 1px solid #d8d8d8 !important; ",
			items:[{
				xtype:"label",
				style:"font-family:notokr-bold; margin-top:4px; color:#000; font-size:14px; background: url(../resources/images/error/pop_menu3.png) no-repeat 20px center; background-size:19px 13px !important; padding-left:43px; letter-spacing:-1px; margin-top:6px !important;",
				text:"장애조치 지시"
			},{
				xtype:"container",
				width:15
			},{
				xtype:"button",
				text:"담당자",
				height:30,
				id:"stMem",
				style:"padding: 2px 6px; letter-spacing: -1px; background: #fff; border: 1px solid #cdcdcd;"
			},{
				xtype:"container",
				width:3
			},{
				xtype:"button",
				text:"충전기 제조사",
				height:30,
				id:"stCom",
				style:"padding: 2px 6px; letter-spacing: -1px; background: #fff; border: 1px solid #cdcdcd;"
			},{
				xtype:"container",
				width:2
			},{
				xtype:"button",
				id:"reCom",
				height:30,
				text:"유지보수 업체",
				style:"padding: 2px 6px; letter-spacing: -1px; background: #fff; border: 1px solid #cdcdcd;"
			}]
		}]
	}]
});
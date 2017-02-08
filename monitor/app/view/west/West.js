Ext.define('Monitor.view.west.West', {
	extend: 'Ext.panel.Panel',
	xtype: 'monitor-west',
	y:95,
	border:false,
	items:[{
		xtype:"panel",
		border:false,
		layout:{
			type:"vbox"
		},
		items:[{
			xtype:"label",
			text:"충전기운영현황"
		},{
			xtype:"container",
			height:400
		},{
			xtype:"panel",
			border:false,
			style:"margin-left:30px;",
			layout:{
				type:"vbox"
			},
			items:[{
				xtype:"textfield",
				fieldLabel:"중구",
				width:250,
				labelWidth:100,
				labelSeparator : '',
				editable:false,
				labelStyle:"font-weight: bold;",
				fieldStyle:"text-align: right;",
				id:"cnt01"
			},{
				xtype:"textfield",
				fieldLabel:"동구",
				width:250,
				labelWidth:100,
				labelSeparator : '',
				editable:false,
				labelStyle:"font-weight: bold;",
				fieldStyle:"text-align: right;",
				id:"cnt02"
			},{
				xtype:"textfield",
				fieldLabel:"서구",
				width:250,
				labelWidth:100,
				labelSeparator : '',
				editable:false,
				labelStyle:"font-weight: bold;",
				fieldStyle:"text-align: right;",
				id:"cnt03"
			},{
				xtype:"textfield",
				fieldLabel:"남구",
				width:250,
				labelWidth:100,
				labelSeparator : '',
				editable:false,
				labelStyle:"font-weight: bold;",
				fieldStyle:"text-align: right;",
				id:"cnt04"
			},{
				xtype:"textfield",
				fieldLabel:"북구",
				width:250,
				labelWidth:100,
				labelSeparator : '',
				editable:false,
				labelStyle:"font-weight: bold;",
				fieldStyle:"text-align: right;",
				id:"cnt05"
			},{
				xtype:"textfield",
				fieldLabel:"수성구",
				width:250,
				labelWidth:100,
				labelSeparator : '',
				editable:false,
				labelStyle:"font-weight: bold;",
				fieldStyle:"text-align: right;",
				id:"cnt06"
			},{
				xtype:"textfield",
				fieldLabel:"달서구",
				width:250,
				labelWidth:100,
				labelSeparator : '',
				editable:false,
				labelStyle:"font-weight: bold;",
				fieldStyle:"text-align: right;",
				id:"cnt07"
			},{
				xtype:"textfield",
				fieldLabel:"달성군",
				width:250,
				labelWidth:100,
				labelSeparator : '',
				editable:false,
				labelStyle:"font-weight: bold;",
				fieldStyle:"text-align: right;",
				id:"cnt08"
			},{
				xtype:"panel",
				border:false,
				layout:{
					type:"hbox"
				},
				items:[{
					xtype:"textfield",
					fieldLabel:"초 이동",
					id:"moveTime",
					width:250,
					labelWidth:100,
					labelSeparator : '',
					editable:false,
					labelStyle:"font-weight: bold;",
					fieldStyle:"text-align: right;",
					value:6
				},{
					xtype:"button",
					text:"go",
					handler:function(){
						var moveTime = parseInt(Ext.getCmp("moveTime").lastValue) * 1000;
						
						var coreMap = Ext.getCmp("_mapDiv_");
						var guCoord = [{id:"01",sido:"대구광역시",sigungu:"중구",x:128.590440974,y:35.859351334,level:6},
						               {id:"02",sido:"대구광역시",sigungu:"동구",x:128.614838999,y:35.869932733,level:6},
						               {id:"03",sido:"대구광역시",sigungu:"서구",x:128.559249737,y:35.87176248,level:6},
						               {id:"04",sido:"대구광역시",sigungu:"남구",x:128.560592637,y:35.836235737,level:6},
						               {id:"05",sido:"대구광역시",sigungu:"북구",x:128.583610605,y:35.881917846,level:6},
						               {id:"06",sido:"대구광역시",sigungu:"수성구",x:128.70657598,y:35.844135034,level:6},
						               {id:"07",sido:"대구광역시",sigungu:"달서구",x:128.542159619,y:35.851031132,level:6},
						               {id:"08",sido:"대구광역시",sigungu:"달성군",x:128.413599239,y:35.658799528,level:6},
						               {id:"99",sido:"대구광역시",sigungu:"",x:128.6018054910818,y:35.871380264652295,level:8}]
						
					    var cnt = 0;
						
						if(coreMap.autoPlay=="off"){
							coreMap.autoPlay = "on";
							coreMap.timerObj = window.setInterval(function(){
								var moveLatLon = new daum.maps.LatLng(guCoord[cnt].y,guCoord[cnt].x);
								coreMap.map.setCenter(moveLatLon);
								coreMap.map.setLevel(guCoord[cnt].level);
								//document.getElementById('sido').value = guCoord[cnt].sido;
								//document.getElementById('sigungu').value = guCoord[cnt].sigungu;
								if(cnt == guCoord.length - 1){
									cnt = 0;
								}else{
									cnt++;
								}
								
							}, moveTime);
							
						}else{
							window.clearInterval(coreMap.timerObj);
							coreMap.autoPlay = "off";
						}
					}
				}]
			}]
		}]
	}]
});
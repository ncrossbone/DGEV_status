Ext.define("Monitor.view.center.Test", {
	extend: "Ext.window.Window",
	id:"testBtn",
	title:"testSetting",
	width:200,
	height:200,
	items:[{
		xtype:"panel",
		items:[{
			xtype:"button",
			text:"장애발생",
			handler:function(){
				Monitor.global.Function.errorEvent();
			}
		},{
			xtype:"radiogroup",
			id:"selectRadio",
			items:[{
				boxLabel:"전체",
				inputValue:"all",
				checked:true
			},{
				boxLabel:"급속",
				inputValue:"rap"
			},{
				boxLabel:"완속",
				inputValue:"slow"
			}],
			listeners: {
                change: {
                    fn: function(field, newValue, oldValue, options) {
                    	var coreMap = Ext.getCmp("_mapDiv_");
                    	
                    	for(var i=0; i< coreMap.marker.length; i++){
                    		coreMap.marker[i].marker.setMap(null);
                    	}
                    	
                    	coreMap.marker = [];
                    	coreMap.markerOn(newValue.selectRadio);
                    }
                }
            }
		},/*{
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
		},*/{
			xtype:"button",
			text:"go",
			handler:function(){
				Monitor.global.Function.autoPlay();
			}
		}]
	}]
	
	
});
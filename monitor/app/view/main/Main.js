Ext.define("Monitor.view.main.Main", {

	extend: "Ext.panel.Panel",
	requires: ["Monitor.view.map.CoreMap",
	           "Monitor.view.north.North",
	           "Monitor.view.east.East",
	           "Monitor.view.west.West"],
	width:1920,
	height:800,
	xtype: "monitor-main",
	layout: {
		type: "absolute"
	},

	items: [{
		xtype: "monitor-west"
	},{
		xtype: "monitor-north"
	},{
		xtype:"monitor-east"
	},{
		xtype: "monitor-coremap"
	}],
	initComponent: function(){
		this.callParent();
		/*this.setWidth(Ext.getBody().getWidth());
		this.setHeight(Ext.getBody().getHeight());*/
		
		Monitor.global.Function.getChargeList();
		Monitor.global.Function.getSationList();
		Monitor.global.Function.getErrorList();
		Monitor.global.Function.getErrorCnt();
		Monitor.global.Function.getStationCnt();
		Monitor.global.Function.getAllCharger();
		
		
		var testBtn = Ext.create("Monitor.view.center.Test");
		testBtn.show();
		
		
		
	}
});
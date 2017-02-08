Ext.define("Monitor.view.main.Main", {

	extend: "Ext.panel.Panel",
	requires: ["Monitor.view.map.CoreMap",
	           "Monitor.view.north.North",
	           "Monitor.view.east.East",
	           "Monitor.view.west.West"],
	
	xtype: "monitor-main",
	title: "",
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
		this.setWidth(Ext.getBody().getWidth());
		this.setHeight(Ext.getBody().getHeight());
	}
});
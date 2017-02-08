Ext.define("StCon.view.main.Main", {

	extend: "Ext.panel.Panel",
	requires: ["StCon.view.grid.StationConGrid"],
	
	xtype: "stcon-main",
	title: "",
	layout: {
		type: "absolute"
	},

	items: [{
		xtype: "stcon-stationcongrid",
	}],
	initComponent: function(){
		this.callParent();
		this.setWidth(Ext.getBody().getWidth());
		this.setHeight(Ext.getBody().getHeight());
	}
});
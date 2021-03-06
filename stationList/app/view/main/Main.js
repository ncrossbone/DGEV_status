Ext.define("StList.view.main.Main", {

	extend: "Ext.panel.Panel",
	requires: ["StList.view.grid.StationListGrid"],
	border:false,
	xtype: "stlist-main",
	bodyStyle:"background:#2a2b34;",
	title: "",
	layout: {
		type: "absolute"
	},
	items: [{
		xtype: "stlist-stationlistgrid",
	}],
	initComponent: function(){
		this.callParent();
		this.setWidth(Ext.getBody().getWidth());
		this.setHeight(Ext.getBody().getHeight());
	}
});
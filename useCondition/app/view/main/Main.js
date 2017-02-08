Ext.define("UseCon.view.main.Main", {

	extend: "Ext.panel.Panel",
	requires: ["UseCon.view.grid.UseConGrid"],
	
	xtype: "usecon-main",
	title: "",
	layout: {
		type: "absolute"
	},

	items: [{
		xtype: "usecon-usecongrid",
	}],
	initComponent: function(){
		this.callParent();
		this.setWidth(Ext.getBody().getWidth());
		this.setHeight(Ext.getBody().getHeight());
	}
});
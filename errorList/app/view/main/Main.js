Ext.define("ErrList.view.main.Main", {

	extend: "Ext.panel.Panel",
	requires: ["ErrList.view.grid.ErrorGrid"],
	border:false,
	xtype: "errlist-main",
	title: "",
	layout: {
		type: "absolute"
	},

	items: [{
		xtype: "errlist-errorgrid",
	}],
	initComponent: function(){
		this.callParent();
		this.setWidth(Ext.getBody().getWidth());
		this.setHeight(Ext.getBody().getHeight());
	}
});
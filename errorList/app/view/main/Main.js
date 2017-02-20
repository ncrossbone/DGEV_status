Ext.define("ErrList.view.main.Main", {

	extend: "Ext.panel.Panel",
	requires: ["ErrList.view.grid.ErrorGrid"],
	border:false,
	xtype: "errlist-main",
	bodyStyle:"background:#2a2b34;",
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
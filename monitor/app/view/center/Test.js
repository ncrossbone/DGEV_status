Ext.define("Monitor.view.center.Test", {
	extend: "Ext.window.Window",
	id:"testBtn",
	title:"test",
	items:[{
		xtype:"panel",
		border:false,
		items:[{
			xtype:"button",
			text:"장애발생",
			handler:function(){
				Monitor.global.Function.errorEvent();
			}
		}]
	}]
	
	
});
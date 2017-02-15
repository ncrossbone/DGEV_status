Ext.application({
    name   : 'Monitor',
    requires:["Monitor.global.Function"],
    launch : function() {

    	var main = Ext.create("Monitor.view.main.Main", {
    		renderTo: Ext.getBody()
    	});

    }
});
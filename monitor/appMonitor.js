Ext.application({
    name   : 'Monitor',
           
    launch : function() {

    	var main = Ext.create("Monitor.view.main.Main", {
    		renderTo: Ext.getBody()
    	});

    }
});
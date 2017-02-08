Ext.application({
    name   : 'StCon',
           
    launch : function() {

    	var main = Ext.create("StCon.view.main.Main", {
    		renderTo: Ext.getBody()
    	});

    }
});
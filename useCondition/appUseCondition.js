Ext.application({
    name   : 'UseCon',
           
    launch : function() {

    	var main = Ext.create("UseCon.view.main.Main", {
    		renderTo: Ext.getBody()
    	});

    }
});
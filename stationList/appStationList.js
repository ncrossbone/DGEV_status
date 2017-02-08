Ext.application({
    name   : 'StList',
           
    launch : function() {

    	var main = Ext.create("StList.view.main.Main", {
    		renderTo: Ext.getBody()
    	});

    }
});
Ext.application({
    name   : 'ErrList',
           
    launch : function() {

    	var main = Ext.create("ErrList.view.main.Main", {
    		renderTo: Ext.getBody()
    	});

    }
});
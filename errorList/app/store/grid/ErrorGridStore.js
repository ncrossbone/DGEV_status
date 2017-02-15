Ext.define("ErrList.store.grid.ErrorGridStore", {
    extend : 'Ext.data.Store',
    //extend : 'Ext.data.BufferedStore', 
    /* {name: 'OUT_FLOW_SUM', type 'number'}*/
    proxy: {
		type: 'ajax',
		url: '../resources/jsp/GridErrorList.jsp',
		reader: {
			type: 'json'
		}
	}
	
});
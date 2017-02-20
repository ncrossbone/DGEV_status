Ext.define("StCon.view.main.Main", {

	extend: "Ext.panel.Panel",
	requires: ["StCon.view.grid.StationConGrid"],
	
	xtype: "stcon-main",
	title: "",
	width:1920,
	height:1080,
	layout: {
		type: "absolute"
	},

	items: [{
		xtype: "stcon-stationcongrid",
	}],
	initComponent: function(){
		this.callParent();
		
		
		this.initData();
	},
	
	initData:function(){
		
		
		$.ajax({
	    	url: "../resources/jsp/GridStatConSum.jsp",
	    	
	        type : 'GET',
	        async : false,
	        
	        contentType : 'text/xml',
	        success : function(response_) {
	        	
	        	var jsonData = JSON.parse(response_).data[0];
	        	
	        	Ext.getCmp("ALL_CHAG").setText(jsonData.ALL_CHAG);
	        	Ext.getCmp("AVAIL").setText(jsonData.AVAIL);
	        	Ext.getCmp("CHAG").setText(jsonData.CHAG);
	        	Ext.getCmp("ERROR").setText(jsonData.ERROR);
	        }
	    });
		
		
		
		$.ajax({
	    	url: "../resources/jsp/GridStatCondition.jsp",
	    	
	        type : 'GET',
	        async : false,
	        
	        contentType : 'text/xml',
	        success : function(response_) {
	        	var stationConGrid = Ext.getCmp("stationConGrid");
	        	var store = Ext.create('Ext.data.Store');
	        	
	        	var jsonData = JSON.parse(response_).data;
	        	
	        	store.setData(jsonData);
	        	stationConGrid.setStore(store);
	        }
	    });
		
		
		
		$.ajax({
	    	url: "../resources/jsp/GridStatChagCon.jsp",
	    	
	        type : 'GET',
	        async : false,
	        
	        contentType : 'text/xml',
	        success : function(response_) {
	        	var stationConChagGrid = Ext.getCmp("stationConChagGrid");
	        	var store = Ext.create('Ext.data.Store');
	        	
	        	var jsonData = JSON.parse(response_).data;
	        	
	        	Ext.getCmp("ALL_SUM_1").setText(jsonData[0].ALL_SUM);
	        	Ext.getCmp("ALL_SUM_2").setText(jsonData[1].ALL_SUM);
	        	store.setData(jsonData);
	        	stationConChagGrid.setStore(store);
	        }
	    });
		
	}
});
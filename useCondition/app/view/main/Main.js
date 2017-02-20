Ext.define("UseCon.view.main.Main", {

	extend: "Ext.panel.Panel",
	requires: ["UseCon.view.grid.UseConGrid"],
	
	xtype: "usecon-main",
	title: "",
	layout: {
		type: "absolute"
	},

	items: [{
		xtype: "usecon-usecongrid",
	}],
	initComponent: function(){
		this.callParent();
		
		
		this.initData();
	},
	initData:function(){
		
		$.ajax({
	    	url: "../resources/jsp/GridUseCondition.jsp",
	    	
	        type : 'GET',
	        async : false,
	        
	        contentType : 'text/xml',
	        success : function(response_) {
	        	
	        	var useCondition = Ext.getCmp("useCondition");
	        	var joinCnt = Ext.getCmp("joinCnt"); //명
	        	var carCnt = Ext.getCmp("carCnt"); //대
	        	var cardCnt = Ext.getCmp("cardCnt"); //건
	        	var store = Ext.create('Ext.data.Store');
	        	
	        	var jsonData = JSON.parse(response_).data;
	        	
	        	store.setData(jsonData);
	        	useCondition.setStore(store);
	        	
	        	joinCnt.setText(jsonData[0].ALL_SUM);
	        	carCnt.setText(jsonData[2].ALL_SUM);
	        	cardCnt.setText(jsonData[1].ALL_SUM);
	        	
	        }
	    });
	}
});
Ext.define('Monitor.view.north.North', {
	extend: 'Ext.panel.Panel',
	xtype: 'monitor-north',
	title:"대구 전기차 충전소 관제센터",
	id:"north",
	width:1280,
	listeners : {
        afterrender : function(panel) {
            var header = panel.header;
            header.setHeight(80);
        }
    }
});
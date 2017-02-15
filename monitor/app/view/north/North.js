Ext.define('Monitor.view.north.North', {
	extend: 'Ext.panel.Panel',
	xtype: 'monitor-north',
	title:"대구 전기차 충전소 <span class='titleYellow'>관제센터</span>",
	id:"north",
	cls:"title01",
	listeners : {
        afterrender : function(panel) {
            var header = panel.header;
            header.setHeight(80);
        }
    }
});
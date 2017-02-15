
function autoPlay(){
	//var moveTime = parseInt(Ext.getCmp("moveTime").lastValue) * 1000;
	var moveTime = 2 * 1000;
	
	
	/*var statListGridStore = parent.Ext.getCmp("test");
	console.info(statListGridStore);
	statListGridStore.load();*/
	var coreMap = Ext.getCmp("_mapDiv_");
	var global = Monitor.global.Function;
	
	//console.info(iframeStatList.Ext.getCmp("stationListGrid"));
	//console.info(iframe.fnTest());
	
	var guCoord = global.autoPlayList;
	
    var cnt = 0;
	
	if(global.autoPlay=="off"){
		global.autoPlay = "on";
		global.timerObj = window.setInterval(function(){
			var moveLatLon = new daum.maps.LatLng(guCoord[cnt].y,guCoord[cnt].x);
			coreMap.map.setCenter(moveLatLon);
			coreMap.map.setLevel(guCoord[cnt].level);
			
			var admcd = guCoord[cnt].ADM_CD;
			//document.getElementById('sido').value = guCoord[cnt].sido;
			//document.getElementById('sigungu').value = guCoord[cnt].sigungu;
			
			getWestStationList(admcd);
			getGridStationList(admcd);
			if(cnt == guCoord.length - 1){
				cnt = 0;
			}else{
				cnt++;
			}
			
		}, moveTime);
		
	}else{
		window.clearInterval(global.timerObj);
		global.autoPlay = "off";
	}
}


function getWestStationList(admcd){
	var coreMap = Ext.getCmp("_mapDiv_");
	var global = Monitor.global.Function;
	var westStationList = Ext.getCmp("westStationList");
	//console.info(coreMap.stationList);
	var listFilter = global.stationList.filter(function (el){
		
        return el.ADM_CD==admcd
    });
	
    //console.info(jsonFilter);
	var html = "";
	
	//westStationList.setHtml(guCoord[cnt].sido + " " + guCoord[cnt].sigungu);
	
	for(var i = 0; i < listFilter.length; i++){
		
		html += "<div class='fw_path'><div class='thumb'><img src='./resources/images/test/02.png'></div>" ;
		html += "<div class='state'><p><strong>" + listFilter[i].KO_STAT_NM + "</strong><em><span class='L0'></span></em></p>" ;
		html +="<p class='MgT5 borB0'><span class='condition01'>충전중</span>";
		html +="<img alt='급속충전 이미지' src='./resources/images/test/icon_fast.png' width='20px' height='20px' style='margin-left:140px;'>";
		html +="<em style='margin-top:5px;'>급속</em></p></div></div>";
	}
	
	westStationList.setHtml(html);
	
}

function getGridStationList(admcd){
	var iframeStatList = document.getElementById("iframeStatList").contentWindow.window;
	var global = Monitor.global.Function;
	var listFilter = global.chargeList.filter(function (el){
        return el.ADM_CD==admcd
    });
	
	var store = Ext.create('Ext.data.Store', {
		fields: ['S_KO_STAT_NM', 'C_STAT_ID','ADM_CD','C_CHGER_ID','CHGER_TYPE_CD','MAIN_STAT','NOW_WH','PRE_WH','NOW_AMT'],
		data:listFilter
	});
	
	iframeStatList.Ext.getCmp("stationListGrid").bindStore(store);
	
}
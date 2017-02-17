Ext.define("Monitor.global.Function", {
	singleton : true,
	isAutoPlay:false,
	isErrorAutoPlay:false,
	timerObj:null,
	errorTimer:null,
	chargeList: "",
	stationList: "",
	errorList:"",
	stationCnt:"",
	allCharger:"",
	autoCnt:0,
	moveTime:0,
	miniMapId:"",
	autoPlayList:[{id:"01",ADM_CD:"27110",sido:"대구광역시",sigungu:"중구",x:128.590440974,y:35.859351334,level:6},
	               {id:"02",ADM_CD:"27140",sido:"대구광역시",sigungu:"동구",x:128.614838999,y:35.869932733,level:6},
	               {id:"03",ADM_CD:"27170",sido:"대구광역시",sigungu:"서구",x:128.559249737,y:35.87176248,level:6},
	               {id:"04",ADM_CD:"27200",sido:"대구광역시",sigungu:"남구",x:128.560592637,y:35.836235737,level:6},
	               {id:"05",ADM_CD:"27230",sido:"대구광역시",sigungu:"북구",x:128.583610605,y:35.881917846,level:6},
	               {id:"06",ADM_CD:"27260",sido:"대구광역시",sigungu:"수성구",x:128.70657598,y:35.844135034,level:6},
	               {id:"07",ADM_CD:"27290",sido:"대구광역시",sigungu:"달서구",x:128.542159619,y:35.851031132,level:6},
	               {id:"08",ADM_CD:"27710",sido:"대구광역시",sigungu:"달성군",x:128.413599239,y:35.658799528,level:6},
	               {id:"99",ADM_CD:"27000",sido:"대구광역시",sigungu:"",x:128.6018054910818,y:35.871380264652295,level:8}],

	getSationList: function(){
		var me = this;
		$.ajax({
	    	url: "../resources/jsp/getStation.jsp",
	    	
	        type : 'GET',
	        async : false,
	        
	        contentType : 'text/xml',
	        success : function(response_) {
	        	var jsonData = JSON.parse(response_);
	        	me.stationList = jsonData.data;
	        }
	    });
	},
	
	getChargeList: function(){
		var me = this;
		$.ajax({
	    	url: "../resources/jsp/GridStationList.jsp",
	    	
	        type : 'GET',
	        async : false,
	        
	        contentType : 'text/xml',
	        success : function(response_) {
	        	
	        	var jsonData = JSON.parse(response_);
	        	me.chargeList = jsonData.data;
	        	
	        }
	    });
	},
	
	getErrorList: function(){
		var me = this;
		$.ajax({
	    	url: "../resources/jsp/GridErrorList.jsp",
	    	
	        type : 'GET',
	        async : false,
	        
	        contentType : 'text/xml',
	        success : function(response_) {
	        	
	        	var jsonData = JSON.parse(response_);
	        	me.errorList = jsonData.data;
	        	
	        }
	    });
	},
	
	getStationCnt: function(){
		var me = this;
		$.ajax({
	    	url: "../resources/jsp/StationCnt.jsp",
	    	
	        type : 'GET',
	        async : false,
	        
	        contentType : 'text/xml',
	        success : function(response_) {
	        	
	        	var jsonData = JSON.parse(response_);
	        	me.stationCnt = jsonData.data;
	        	
        		
	        	
	        	
	        }
	    });
	},
	
	getAllCharger: function(){
		var me = this;
		$.ajax({
	    	url: "../resources/jsp/ChargerList.jsp",
	    	
	        type : 'GET',
	        async : false,
	        
	        contentType : 'text/xml',
	        success : function(response_) {
	        	
	        	var jsonData = JSON.parse(response_);
	        	me.allCharger = jsonData.data;
	        	
        		
	        	
	        	
	        }
	    });
	},
	
	autoPlay: function(){
		var me = this;
		var coreMap = Ext.getCmp("_mapDiv_");
		var guCoord = me.autoPlayList;
		
	    
	    me.moveTime = 1 * 1000;
	    
		if(me.isAutoPlay==false){
			
			me.isAutoPlay = true;
			
			$("#autoPlay").attr("src","../resources/images/img/play.png");
			
			me.timerObj = window.setInterval(function(){
				var moveLatLon = new daum.maps.LatLng(guCoord[me.autoCnt].y,guCoord[me.autoCnt].x);
				coreMap.map.setCenter(moveLatLon);
				coreMap.map.setLevel(guCoord[me.autoCnt].level);
				
				var admcd = guCoord[me.autoCnt].ADM_CD;
				//document.getElementById('sido').value = guCoord[cnt].sido;
				//document.getElementById('sigungu').value = guCoord[cnt].sigungu;
				
				me.getWestStationList(admcd);
				me.getGridStationList(admcd);
				
				if(me.autoCnt == guCoord.length - 1){
					me.autoCnt = 0;
				}else{
					me.autoCnt++;
				}
				
			}, me.moveTime);
			
		}else{
			window.clearInterval(me.timerObj);
			me.isAutoPlay = false;
			$("#autoPlay").attr("src","../resources/images/img/stop.png");
		}
	},
	
	/*getWestStationList: function(admcd){
		
		var coreMap = Ext.getCmp("_mapDiv_");
		var me = this;
		var westStationList = Ext.getCmp("westStationList");
		//console.info(coreMap.stationList);
		var listFilter = me.stationList.filter(function (el){
			
	        return el.ADM_CD==admcd
	    });
		
	    //console.info(jsonFilter);
		var html = "";
		var rowCnt = 5
		var totCnt = listFilter.length;
		
		//westStationList.setHtml(guCoord[cnt].sido + " " + guCoord[cnt].sigungu);
		if(totCnt < rowCnt){
			for(var i = 0; i < listFilter.length; i++){

				html += "<div class='fw_path'><div class='thumb'><img src='../resources/images/test/02.png'></div>" ;
				html += "<div class='state'><p><strong>" + listFilter[i].S_KO_STAT_NM + "</strong><em><span class='L0'></span></em></p>" ;
				html +="<p class='MgT5 borB0'><span class='condition01' style='margin-right:10px;'>완속 : "+ listFilter[i].Y02 + "/" + listFilter[i].A02 + "</span><span class='condition02' style='margin-right:10px;'>급속 : " +listFilter[i].Y01 + "/" + listFilter[i].A01 + "</span>" +
				"<span class='condition03'>전체 : " + listFilter[i].YA + "/" + listFilter[i].AA +"</span></div>";
				//html +="<img alt='급속충전 이미지' src='./resources/images/test/icon_fast.png' width='20px' height='20px' style='margin-left:140px;'>";
				html +="</p><em></em></div></div>";
			}

			westStationList.setHtml(html);

		}else{
			
			var pgCnt = parseInt(totCnt / rowCnt);
			var timerCnt = 0;
			html = "";
			for(var i = timerCnt; i < rowCnt * (timerCnt + 1); i++){
				
				if(listFilter[i] != undefined){
					
					html += "<div class='fw_path'><div class='thumb'><img src='../resources/images/test/02.png'></div>" ;
					html += "<div class='state'><p><strong>" + listFilter[i].S_KO_STAT_NM + "</strong><em><span class='L0'></span></em></p>" ;
					html +="<p class='MgT5 borB0'><span class='condition01' style='margin-right:10px;'>완속 : "+ listFilter[i].Y02 + "/" + listFilter[i].A02 + "</span><span class='condition02' style='margin-right:10px;'>급속 : " +listFilter[i].Y01 + "/" + listFilter[i].A01 + "</span>" +
					"<span class='condition03'>전체 : " + listFilter[i].YA + "/" + listFilter[i].AA +"</span></div>";
					//html +="<img alt='급속충전 이미지' src='./resources/images/test/icon_fast.png' width='20px' height='20px' style='margin-left:140px;'>";
					html +="</p><em></em></div></div>";
				}
			}
			
			westStationList.setHtml(html);
			
			timerCnt++;
			
			var timer = window.setInterval(function(){
				
				html = "";
				if(timerCnt == pgCnt + 1){
					window.clearInterval(timer);
					return;
				}
				
				for(var i = timerCnt * rowCnt; i < rowCnt * (timerCnt + 1); i++){
					
					if(listFilter[i] != undefined){
						
						html += "<div class='fw_path'><div class='thumb'><img src='../resources/images/test/02.png'></div>" ;
						html += "<div class='state'><p><strong>" + listFilter[i].S_KO_STAT_NM + "</strong><em><span class='L0'></span></em></p>" ;
						html +="<p class='MgT5 borB0'><span class='condition01' style='margin-right:10px;'>완속 : "+ listFilter[i].Y02 + "/" + listFilter[i].A02 + "</span><span class='condition02' style='margin-right:10px;'>급속 : " +listFilter[i].Y01 + "/" + listFilter[i].A01 + "</span>" +
						"<span class='condition03'>전체 : " + listFilter[i].YA + "/" + listFilter[i].AA +"</span></div>";
						//html +="<img alt='급속충전 이미지' src='./resources/images/test/icon_fast.png' width='20px' height='20px' style='margin-left:140px;'>";
						html +="</p><em></em></div></div>";
					}
				}
				
				westStationList.setHtml(html);
				timerCnt++;
				
			}, parseInt(me.moveTime / (pgCnt + 1)));
	

		}
		
		
	},*/
	
	getWestStationList: function(admcd){
		
		
		               
		var coreMap = Ext.getCmp("_mapDiv_");
		var me = this;
		var westStationList = Ext.getCmp("westStationList");
		var imageMap = Ext.getCmp("imageMap");
		var imgSrc = "";
		var mapId ="";
		
		switch (admcd) {
		case "27110":
			//중구
			imgSrc = "../resources/images/img/map_center.png";
			mapId = "#centerMap";
			break;
		case "27140":
			//동구
			imgSrc = "../resources/images/img/map_east.png";
			mapId = "#eastMap";
			break;
		case "27170":
			//서구
			imgSrc = "../resources/images/img/map_west.png";
			mapId = "#westMap";
			break;
		case "27200":
			//남구
			imgSrc = "../resources/images/img/map_south.png";
			mapId = "#southMap";
			break;
		case "27230":
			//북구
			imgSrc = "../resources/images/img/map_north.png";
			mapId = "#northMap";
			break;
		case "27260":
			//수성구
			imgSrc = "../resources/images/img/map_su.png";
			mapId = "#suMap";
			break;
		case "27290":
			//달서구
			imgSrc = "../resources/images/img/map_dal_1.png";
			mapId = "#dal_1_Map";
			break;
		case "27710":
			//달성군
			imgSrc = "../resources/images/img/map_dal_2.png";
			mapId = "#dal_2_Map";
			break;
		case "27000":
			//전체
			imgSrc = "../resources/images/img/map.png";
			mapId = "";
			break;

		default:
			break;
		}
		
		
		imageMap.setSrc(imgSrc);
		
		if(me.miniMapId!=""){
			$(me.miniMapId).css("color", "#ffffff");
			$(me.miniMapId+"_text").css("color", "#000000");
		}
		
		me.miniMapId = mapId;
		$(mapId).css("color", "#000000");
		$(mapId+"_text").css("color", "#ffffff");
		
		
		//console.info(coreMap.stationList);
		var listFilter = me.stationList.filter(function (el){

			return el.ADM_CD==admcd
		});
		var html = "";
		
		for(var i = 0; i < listFilter.length; i++){

			html += "<div class='fw_path' onclick=openWindowCharg('"+ listFilter[i].C_STAT_ID +"');><div class='thumb'><img src='../resources/images/test/02.png'></div>" ;
			html += "<div class='state'><p class='p01'><strong>" + listFilter[i].S_KO_STAT_NM + "</strong><em><span class='L0'></span></em></p>" ;
			html +="<p style='margin-top: 7px;'><span class='condition01' style='margin-right:5px;'>완속 : "+ listFilter[i].Y02 + "/" + listFilter[i].A02 + "</span><span class='condition02' style='margin-right:5px;'>급속 : " +listFilter[i].Y01 + "/" + listFilter[i].A01 + "</span>" +
			"<span class='condition03'>전체 : " + listFilter[i].YA + "/" + listFilter[i].AA +"</span></div>";
			html +="</p><em></em></div></div>";
		}

		westStationList.setHtml(html);




	},
	
	/*getGridStationList: function(admcd){
		var me = this;
		var stationListGrid = document.getElementById("iframeStatList").contentWindow.window.Ext.getCmp("stationListGrid");
		
		
		
		var listFilter = me.chargeList.filter(function (el){
	        return el.ADM_CD==admcd
	    });
		
		var rowCnt = 10
		var totCnt = listFilter.length;
		var rowArr = [];
		var store = Ext.create('Ext.data.Store');
		if(totCnt < rowCnt){
			
			store.setData(listFilter);
			stationListGrid.bindStore(store);
			
		}else{
			var pgCnt = parseInt(totCnt / rowCnt);
			var timerCnt = 0;
			rowArr = [];
			
			for(var i = timerCnt; i < rowCnt * (timerCnt + 1); i++){

				if(listFilter[i] != undefined){
					rowArr.push(listFilter[i]);
				}
			}
			store.setData(rowArr);
			stationListGrid.bindStore(store);
			
			
			timerCnt++;
			
			var timer = window.setInterval(function(){
				
				rowArr = [];
				if(timerCnt == pgCnt + 1){
					window.clearInterval(timer);
					return;
				}
				
				for(var i = timerCnt * rowCnt; i < rowCnt * (timerCnt + 1); i++){
					
					if(listFilter[i] != undefined){
						rowArr.push(listFilter[i]);
					}
				}
				
				store.setData(rowArr);
				stationListGrid.bindStore(store);
				timerCnt++;
				
			}, parseInt(me.moveTime / (pgCnt + 1)));
			
		}
		//iframeStatList.Ext.getCmp("stationListGrid").bindStore(store);
		
	},*/
	
	getGridStationList: function(admcd){
		var me = this;
		
		var iframeStatList = document.getElementById("iframeStatList").contentWindow.window;
		var stationListGrid = iframeStatList.Ext.getCmp("stationListGrid");
		var GU = iframeStatList.Ext.getCmp("GU");


		var listFilter = me.chargeList.filter(function (el){
			return el.ADM_CD==admcd
		});
		
		
		if(listFilter.length!=0){
			GU.setText(listFilter[0].S_ADDR_1);
		}else{
			GU.setText("대구광역시");
		}
		
		var store = Ext.create('Ext.data.Store');


		store.setData(listFilter);
		stationListGrid.bindStore(store);


	},
	
	errorEvent: function(){
		var me = this;
		
		var errorListGrid = document.getElementById("iframeErrorList").contentWindow.window.Ext.getCmp("errorGrid");
    	var store = Ext.create('Ext.data.Store');
    	store.setData(me.errorList);
    	errorListGrid.bindStore(store);
    	
		var coreMap = Ext.getCmp("_mapDiv_");
		var cnt = 0;
		
		if(me.isErrorAutoPlay==false){
			me.isErrorAutoPlay = true;
			me.errorTimer = window.setInterval(function(){

				var moveLatLon = new daum.maps.LatLng(parseFloat(me.errorList[cnt].Y),parseFloat(me.errorList[cnt].X));
				coreMap.map.setCenter(moveLatLon);
				coreMap.map.setLevel(3);

				var errorInfo = Ext.getCmp("errorInfo");
				if(errorInfo==undefined){
					var createErrorInfo = Ext.create("Monitor.view.center.ErrorInfo");
					createErrorInfo.show();
				}
				
				var errorTitle = Ext.getCmp("errorTitle");
				var errorCode = Ext.getCmp("errorCode");
				var errorKind = Ext.getCmp("errorKind");
				var errorDetail = Ext.getCmp("errorDetail");
				
				errorTitle.setTitle("<div class='err_div01'><label class='err_div01_left'>" + me.errorList[cnt].KO_STAT_NM + "</label><label class='err_div01_right' onclick=openWindowCharg('"+me.errorList[cnt].STAT_ID+"')>충전소 상세보기</label></div>" +
						"<div class='err_div02'>충전기 # " + me.errorList[cnt].CHGER_ID+"</div>");
				errorCode.setText(me.errorList[cnt].TROUBLE_CODE);
				//errorKind.setValue(me.errorList[cnt].TROUBLE_CODE);
				errorDetail.setText(me.errorList[cnt].REPAIR_CONTENTS);

				if(cnt == me.errorList.length - 1){
					cnt = 0;
				}else{
					cnt++;
				}

			}, 1000);

		}else{
			window.clearInterval(me.errorTimer);
			me.isErrorAutoPlay = false;
		}
		$("#autoPlay").attr("src","../resources/images/img/stop.png");
		window.clearInterval(me.timerObj);
		me.isAutoPlay = false;
		
	}
});
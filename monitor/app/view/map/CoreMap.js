Ext.define('Monitor.view.map.CoreMap', {
	extend: 'Ext.Component',

	xtype: 'monitor-coremap',
	html:"<div style='position:absolute; right:30px; top: 100px; z-index:20000;'>" +
			"<span id='mapSelect'>" +
		 	"<a class='mapBtn on' onclick=Ext.getCmp('_mapDiv_').mapSelect(this.id); id='all'>전체</a>" +
		 	"<a class='mapBtn' onclick=Ext.getCmp('_mapDiv_').mapSelect(this.id); id='rap'>급속</a>" +
		 	"<a class='mapBtn' onclick=Ext.getCmp('_mapDiv_').mapSelect(this.id); id='slow'>완속</a>" +
		 	"<a class='mapBtn' onclick=Ext.getCmp('_mapDiv_').mapSelect(this.id); style='border-right: 1px solid #d0d0d0 !important;' id='com'>기관</a>" +
		 "</span></div>",
	id: '_mapDiv_',
	map:null,
	width: 954,
	x:326,
	height: "100%",
	border:false,
	marker:[],
	initComponent: function() {
		this.on('render', this.mapRendered, this);
		this.callParent();
		
	},
	mapRendered: function(p){
		var me = this;
		
		var timerId = window.setInterval(function(){
			me.initBaseMap();
			window.clearInterval(timerId);
		}, 1);

		
	},
	initBaseMap: function(){
		var me = this;

		var container = document.getElementById('_mapDiv_');
		var options = {
				center : new daum.maps.LatLng(35.871380264652295, 128.6018054910818),
				level : 8
		};

		me.map = new daum.maps.Map(container, options);
		
		me.markerOn();
		me.initMiniMap();
		
	},
	
	mapSelect: function(select){
		$("#mapSelect a").removeClass('on');
		$("#"+select).addClass('on');
		
		var me = this;
    	
    	for(var i=0; i< me.marker.length; i++){
    		me.marker[i].marker.setMap(null);
    	}
    	
    	me.marker = [];
    	me.markerOn(select);
	},
	markerOn: function(select){
		
		var data = Monitor.global.Function.stationList;
		var me = this;
		var positions = [];
		var x = "";
		var y = "";
		
		
		
		for(var i = 0 ; i < data.length; i++){
			var coord = data[i].S_GPS_LAT_LNG.split(",");
			x = coord[1];
			y = coord[0];
			//'Y01' -- 급속사용가능
		    //'N01' -- 급속사용불가
		    //'Y02' -- 완속사용가능
		    //'N02' -- 완속사용불가
		    //'A01' -- 급속전체
		    //'A02' -- 완속전체
		    //'YA' -- 사용가능전체
		    //'NA' -- 사용불가전체
		    //'AA' -- 전체
			positions.push({ADM_CD: data[i].ADM_CD,
				STAT_ID:data[i].C_STAT_ID,
				SGG_NM: data[i].SGG_NM,
				latlng: new daum.maps.LatLng(y, x), 
				S_KO_STAT_NM: data[i].S_KO_STAT_NM,
				Y01: data[i].Y01,
				N01: data[i].N01,
				Y02: data[i].Y02,
				N02: data[i].N02,
				A01: data[i].A01,
				A02: data[i].A02,
				YA: data[i].YA,
				NA: data[i].NA,
				AA: data[i].AA,
				});

		}
		/*var cnt01 = 0;
		var cnt02 = 0;
		var cnt03 = 0;
		var cnt04 = 0;
		var cnt05 = 0;
		var cnt06 = 0;
		var cnt07 = 0;
		var cnt08 = 0;*/

		for (var i = 0; i < positions.length; i ++) {
			// 마커 이미지의 이미지 크기 입니다
			//var imageSize = new daum.maps.Size(58, 52); 
			var imageSize = new daum.maps.Size(34, 43);
			/*var getGu = positions[i].JUSO.split(" ")[1];

			switch (getGu) {
			case "중구":
				cnt01++;
				break;
			case "동구":
				cnt02++;
				break;
			case "서구":
				cnt03++;
				break;
			case "남구":
				cnt04++;
				break;
			case "북구":
				cnt05++;
				break;
			case "수성구":
				cnt06++;
				break;
			case "달서구":
				cnt07++;
				break;
			case "달성군":
				cnt08++;
			default:
				break;
			}

			var GUBUN = "";
			var PARID = "";
			//02완속
			//c_chger_type_cd
			//나머지 급속
			// 마커 이미지를 생성합니다    
			if(positions[i].GUBUN == 1){
				GUBUN = "1";
			}else if(positions[i].GUBUN == 2){
				GUBUN = "2";
			}else if(positions[i].GUBUN == 3){
				GUBUN = "3";
			}else if(positions[i].GUBUN == 4){
				GUBUN = "4";
			}else if(positions[i].GUBUN == 5){
				GUBUN = "5";
			}

			if(positions[i].Rapid == "02"){
				PARID = "slow";
			}else{
				PARID = "fast";
			}*/
			
			var markerImage = "";
			
			
			if(select==undefined||select=="all"){
				if(positions[i].AA!="10"){
					markerImage = new daum.maps.MarkerImage("../resources/images/maker_numbering/m1_num0" + positions[i].YA + ".png", imageSize);
				}else{
					markerImage = new daum.maps.MarkerImage("../resources/images/maker_numbering/m1_num00.png", imageSize);
				}
			}else if(select=="rap"){
				
				if(positions[i].AA!="10"){
					markerImage = new daum.maps.MarkerImage("../resources/images/maker_numbering/m1_num0" + positions[i].Y01 + ".png", imageSize);
				}else{
					markerImage = new daum.maps.MarkerImage("../resources/images/maker_numbering/m1_num00.png", imageSize);
				}
			}else if(select=="slow"){
				if(positions[i].AA!="10"){
					markerImage = new daum.maps.MarkerImage("../resources/images/maker_numbering/m1_num0" + positions[i].Y02 + ".png", imageSize);
				}else{
					markerImage = new daum.maps.MarkerImage("../resources/images/maker_numbering/m1_num00.png", imageSize);
				}
			}

			// 마커를 생성합니다
			var marker = new daum.maps.Marker({
				map: me.map, // 마커를 표시할 지도
				clickable: true,
				
				position: positions[i].latlng, // 마커를 표시할 위치
				title : "", // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
				image : markerImage // 마커 이미지 
			});
			
			marker.data = positions[i].STAT_ID;
			me.marker.push({id:i,marker:marker});
			// 마커에 클릭이벤트를 등록합니다
			daum.maps.event.addListener(marker, 'click', function() {
				
				openWindowCharg(marker.data);

			});


		}
		
		/*;
		Ext.getCmp('cnt01').setValue(cnt01 + "개소");
		Ext.getCmp('cnt02').setValue(cnt02 + "개소");
		Ext.getCmp('cnt03').setValue(cnt03 + "개소");
		Ext.getCmp('cnt04').setValue(cnt04 + "개소");
		Ext.getCmp('cnt05').setValue(cnt05 + "개소");
		Ext.getCmp('cnt06').setValue(cnt06 + "개소");
		Ext.getCmp('cnt07').setValue(cnt07 + "개소");
		Ext.getCmp('cnt08').setValue(cnt08 + "개소");*/
		
		

	},
	initMiniMap:function(){
		var jsonData = Monitor.global.Function.stationCnt;
		
		
		var center = jsonData[0].CNT;
		var east = jsonData[1].CNT;
		var west = jsonData[2].CNT;
		var south = jsonData[3].CNT;
		var north = jsonData[4].CNT;
		var su = jsonData[5].CNT;
		var dal_1 = jsonData[6].CNT;
		var dal_2 = jsonData[7].CNT;
		
		

		$("#northMap").text(north);
		$("#eastMap").text(east);
		$("#westMap").text(west);
		$("#centerMap").text(center);
		$("#southMap").text(south);
		$("#suMap").text(su);
		$("#dal_1_Map").text(dal_1);
		$("#dal_2_Map").text(dal_2);
	}
});
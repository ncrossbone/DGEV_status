Ext.define('Monitor.view.map.CoreMap', {
	extend: 'Ext.Component',

	xtype: 'monitor-coremap',

	id: '_mapDiv_',
	autoPlay:"off",
	timerObj:null,
	map:null,
	width: 954,
	x:326,
	height: "100%",
	border:false,
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
		
		
		$.ajax({
	    	url: "../resources/jsp/getStation.jsp",
	    	
	        type : 'GET',
	        async : false,
	        
	        contentType : 'text/xml',
	        success : function(response_) {
	        	
	        	var jsonData = JSON.parse(response_)
	        	me.markerOn(jsonData.data);
	        }
	    });
	},
	
	markerOn: function(data){
		var me = this;
		var positions = [];
		var x = "";
		var y = "";
		
		for(var i = 0 ; i < data.length; i++){
			var coord = data[i].COORD.split(",");
			x = coord[0];
			y = coord[1];
			
			positions.push({latlng: new daum.maps.LatLng(y, x), 
							GUBUN: data[i].GUBUN,
							//GUBUN: "01",
							Rapid: data[i].Rapid,
							//Rapid: "slow",
							Slow: data[i].Slow,
							JUSO: data[i].JUSO});
			
		}
		var cnt01 = 0;
		var cnt02 = 0;
		var cnt03 = 0;
		var cnt04 = 0;
		var cnt05 = 0;
		var cnt06 = 0;
		var cnt07 = 0;
		var cnt08 = 0;
		
		for (var i = 0; i < positions.length; i ++) {
		    // 마커 이미지의 이미지 크기 입니다
		    //var imageSize = new daum.maps.Size(58, 52); 
			var imageSize = new daum.maps.Size(29, 26);
		    var getGu = positions[i].JUSO.split(" ")[1];
		    
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
		    }
		    
		    
		    var markerImage = new daum.maps.MarkerImage("../resources/images/maker/m"+GUBUN+"_s_"+PARID+".png", imageSize); 
		    
		    // 마커를 생성합니다
		    var marker = new daum.maps.Marker({
		        map: me.map, // 마커를 표시할 지도
		        clickable: true,
		        position: positions[i].latlng, // 마커를 표시할 위치
		        title : "", // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
		        image : markerImage // 마커 이미지 
		    });

			// 마커에 클릭이벤트를 등록합니다
			daum.maps.event.addListener(marker, 'click', function() {
				
			});
		   
		    
		}
		;
		Ext.getCmp('cnt01').setValue(cnt01 + "개소");
		Ext.getCmp('cnt02').setValue(cnt02 + "개소");
		Ext.getCmp('cnt03').setValue(cnt03 + "개소");
		Ext.getCmp('cnt04').setValue(cnt04 + "개소");
		Ext.getCmp('cnt05').setValue(cnt05 + "개소");
		Ext.getCmp('cnt06').setValue(cnt06 + "개소");
		Ext.getCmp('cnt07').setValue(cnt07 + "개소");
		Ext.getCmp('cnt08').setValue(cnt08 + "개소");

	}
});
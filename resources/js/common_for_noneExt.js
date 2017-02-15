var _map = null;
var _autoPlay = "off";
var _timerObj = null;
function initMap() {
	var container = document.getElementById('map');
	var options = {
			center : new daum.maps.LatLng(35.871380264652295, 128.6018054910818),
			level : 8
	};

	_map = new daum.maps.Map(container, options);
	
	
	$.ajax({
    	url: "./resources/jsp/getStation.jsp",
    	
        type : 'GET',
        async : false,
        
        contentType : 'text/xml',
        success : function(response_) {
        	
        	var jsonData = JSON.parse(response_)
        	markerOn(jsonData.data);
        }
    });
}


function markerOn(data){
	var positions = [];
	var x = "";
	var y = "";
	
	for(var i = 0 ; i < data.length; i++){
		var coord = data[i].COORD.split(",");
		x = coord[0];
		y = coord[1];
		
		positions.push({latlng: new daum.maps.LatLng(y, x), 
						//GUBUN: data[i].GUBUN,
						GUBUN: "01",
						//Rapid: data[i].Rapid,
						Rapid: "slow",
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
	    var imageSize = new daum.maps.Size(58, 52); 

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
	    
	    // 마커 이미지를 생성합니다    
	    if(positions[i].GUBUN == "01"){
	    	GUBUN = "1";
	    }else if(positions[i].GUBUN == "02"){
	    	GUBUN = "2";
	    }else if(positions[i].GUBUN == "03"){
	    	GUBUN = "3";
	    }else if(positions[i].GUBUN == "04"){
	    	GUBUN = "4";
	    }else if(positions[i].GUBUN == "05"){
	    	GUBUN = "5";
	    }
	    
	    if(positions[i].Rapid == ""){
	    	PARID = "slow";
	    }else{
	    	PARID = "fast";
	    }
	    
	    
	    
	    var markerImage = new daum.maps.MarkerImage("./resources/images/maker/m"+GUBUN+"_s_"+PARID+".png", imageSize); 
	    
	    // 마커를 생성합니다
	    var marker = new daum.maps.Marker({
	        map: _map, // 마커를 표시할 지도
	        clickable: true,
	        position: positions[i].latlng, // 마커를 표시할 위치
	        title : "", // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
	        image : markerImage // 마커 이미지 
	    });

		// 마커에 클릭이벤트를 등록합니다
		daum.maps.event.addListener(marker, 'click', function() {
			
		});
	   
	    
	}
	
	document.getElementById('cnt01').value = cnt01;
	document.getElementById('cnt02').value = cnt02;
	document.getElementById('cnt03').value = cnt03;
	document.getElementById('cnt04').value = cnt04;
	document.getElementById('cnt05').value = cnt05;
	document.getElementById('cnt06').value = cnt06;
	document.getElementById('cnt07').value = cnt07;
	document.getElementById('cnt08').value = cnt08;
}


function moveStart(){
	var moveTime = parseInt(document.getElementById('moveTime').value) * 1000;
	
	var guCoord = [{id:"01",sido:"대구광역시",sigungu:"중구",x:128.590440974,y:35.859351334,level:6},
	               {id:"02",sido:"대구광역시",sigungu:"동구",x:128.614838999,y:35.869932733,level:6},
	               {id:"03",sido:"대구광역시",sigungu:"서구",x:128.559249737,y:35.87176248,level:6},
	               {id:"04",sido:"대구광역시",sigungu:"남구",x:128.560592637,y:35.836235737,level:6},
	               {id:"05",sido:"대구광역시",sigungu:"북구",x:128.583610605,y:35.881917846,level:6},
	               {id:"06",sido:"대구광역시",sigungu:"수성구",x:128.70657598,y:35.844135034,level:6},
	               {id:"07",sido:"대구광역시",sigungu:"달서구",x:128.542159619,y:35.851031132,level:6},
	               {id:"08",sido:"대구광역시",sigungu:"달성군",x:128.413599239,y:35.658799528,level:6},
	               {id:"99",sido:"대구광역시",sigungu:"",x:128.6018054910818,y:35.871380264652295,level:8}]
	
    var cnt = 0;
	
	if(_autoPlay=="off"){
		_autoPlay = "on";
		_timerObj = window.setInterval(function(){
			var moveLatLon = new daum.maps.LatLng(guCoord[cnt].y,guCoord[cnt].x);
			_map.setCenter(moveLatLon);
			_map.setLevel(guCoord[cnt].level);
			document.getElementById('sido').value = guCoord[cnt].sido;
			document.getElementById('sigungu').value = guCoord[cnt].sigungu;
			if(cnt == guCoord.length - 1){
				cnt = 0;
			}else{
				cnt++;
			}

		}, moveTime);
		
	}else{
		window.clearInterval(_timerObj);
		_autoPlay = "off";
	}
	
}
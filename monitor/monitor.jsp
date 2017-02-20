<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>대구 전기차 충전소 관제센터</title>
<link rel="stylesheet" type="text/css" href="../ext-6.2.0/build/classic/theme-triton/resources/theme-triton-all.css">
<link rel="stylesheet" type="text/css" href="../common.css">
<script type="text/javascript" src="//apis.daum.net/maps/maps3.js?apikey=5531b8126a7d384df0cd8cd986706d4a&libraries=services"></script>
<script type="text/javascript" src="../resources/js/jquery-3.1.1.min.js"></script>
<script type="text/javascript" src="../resources/js/common.js"></script>
<script type="text/javascript" src="../ext-6.2.0/build/ext-all.js"></script>
<script type ="text/javascript" src="appMonitor.js"></script>
<style type="text/css">
#stationWindow{
	border:1px solid #171a1f !important;
}
#stationWindow_header{
	background: #171a1f !important;
}
#stationWindow_header-title-textEl{
	font-family: notokr-bold;
}
#north_header {
	border: none;
	background: url("../resources/images/img/title.jpg") no-repeat;
	background-size:100%;
}


#north_header-title {
	top: 10px !important;
}

#north_header-title-textEl {
	text-align: center;
	font-size: 31px;
	word-spacing: 1px;
	font-family: notokr-bold;
	letter-spacing:12px !important;
	line-height:37px !important;
}

#westStationList_header {
	background: url("../resources/images/img/tit_bg.png") no-repeat;
	border: none;
	background-size:100%;
}

.titleYellow {
	color: #fff4b4;
}

#westStationList_header-title-textEl {
	font-size: 20px;
	font-family: notokr-bold;
}

#westStationList-body {
	top: 50px !important;
}

#errorInfo_header{
    right: auto;
    left: 0px;
    top: 0px;
    width: 400px;
    background: #171a1f !important;
    color: #fff !important;
    padding: 15px 20px !important;
}
#errorInfo{
   border: 2px solid rgb(23, 26, 31) !important;
}

#errorTitle_header{
background: #fff !important;
padding: 0px !important;
}

#errorInfo_header-title-textEl{
	font-family: notokr-bold;
	font-size: 17px !important;
	letter-spacing: -1px;
	
}

#errorTitle_header-title-textEl{
	color: #29303b !important;
    font-size: 15px !important;
}
.err_div01{
	    border-bottom: 1px solid #d8d8d8;
	    background: #b2b7be;
	    padding:10px 20px ;
	    letter-spacing:-1px; 
	    
}
.err_div01:after { content:""; display:block; clear:both; }
.err_div01_left {
	    background: url(../resources/images/error/pop_titbg.png) no-repeat left center;
	    background-size:20px 24px!important;
	    padding-left:25px;
	    font-size: 15px;
	    color: #fff;
	    font-family: notokr-bold;
	    float:left;

}
.err_div01_right {
		background: url(../resources/images/error/pop_icon.png) no-repeat left center;
		float:right;
		color:#fff;
		font-size:13px;
	    font-family: notokr-bold;
	    background-size:16%;
	    padding-left:18px;
}

.err_div02{
		color: #000;
		font-size: 14px;
		padding:10px 20px !important;
		line-height:normal !important;
		font-family: notokr-bold;
}

#stMem-btnInnerEl{
color: #000;
}
#stCom-btnInnerEl{
color: #000;
}
#reCom-btnInnerEl{
color: #000;
}

#errorTitle-body{
border: none !important;
}
 
</style>
</head>
<body>

</body>
</html>
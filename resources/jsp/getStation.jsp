<%@ page contentType="text/html; charset=euc-kr" pageEncoding="EUC-KR" %>
<%@ include file="dbConn.jsp" %>
<%@ page import="java.util.*,java.text.*"%>
<%@page import="org.json.simple.*"%>
<%
try{

	
	sql = "SELECT distinct C_STAT_ID,S_KO_STAT_NM,S_ADDR_1,S_GPS_LAT_LNG,MAIN_STAT,C_CHGER_TYPE_CD FROM EV_V_CHARGER";
		
		
   //out.print(sql);
   stmt = con.createStatement();   
   rs = stmt.executeQuery(sql);
	JSONObject jsonObj  = new JSONObject();
	JSONArray jsonArr = new JSONArray();
	JSONObject jsonRecord = null;
	
	while(rs.next()) {
		jsonRecord = new JSONObject();
		jsonRecord.put("KO_STAT_NM"	, rs.getString("S_KO_STAT_NM"));
		jsonRecord.put("JUSO"	, rs.getString("S_ADDR_1"));
		jsonRecord.put("COORD"	, rs.getString("S_GPS_LAT_LNG"));
		jsonRecord.put("GUBUN"	, rs.getString("MAIN_STAT"));
		jsonRecord.put("Rapid"	, rs.getString("C_CHGER_TYPE_CD"));
  		jsonArr.add(jsonRecord);
	}
	
	jsonObj.put("data", jsonArr);
   
   out.print(jsonObj);
   //out.print("success");
}catch(Exception ex){
	//throw;
	System.out.println(ex);
	System.out.println(sql);
	out.print("error");
} 
%>
<%@ include file="dbClose.jsp" %>
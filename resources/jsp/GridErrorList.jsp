<%@ page contentType="text/html; charset=euc-kr" pageEncoding="EUC-KR" %>
<%@ include file="dbConn.jsp" %>
<%@ page import="java.util.*,java.text.*"%>
<%@page import="org.json.simple.*"%>
<%
try{

	sql="SELECT                                           \n\r";
	sql+="A.STAT_ID AS STAT_ID,                            \n\r";
	sql+="A.TROUBLE_OCCURRENCE_DATE AS OCCUR_DATE,         \n\r";
	sql+="B.KO_STAT_NM AS KO_STAT_NM,                      \n\r";
	sql+="A.CHGER_ID AS CHGER_ID,                          \n\r";
	sql+="A.TROUBLE_CODE AS TROUBLE_CODE,                  \n\r";
	sql+="A.REPAIR_MAN AS REPAIR_MAN,                      \n\r";
	sql+="A.CHGER_PROD_MAN AS CHGER_PROD_MAN,              \n\r";
	sql+="A.REPAIR_CONTENTS AS REPAIR_CONTENTS,            \n\r";
	sql+="SUBSTRING_INDEX(B.GPS_LAT_LNG,',',1) AS Y,       \n\r";
	sql+="SUBSTRING_INDEX(B.GPS_LAT_LNG,',',-1) AS X       \n\r";
	sql+="FROM (SELECT * FROM                              \n\r";
	sql+="EV_V_CHARGER A,                                  \n\r";
	sql+="EVCS_TROUBLE_REPAIR B                            \n\r";
	sql+="WHERE A.C_STAT_ID = B.STAT_ID                    \n\r";
	sql+="  AND A.C_CHGER_ID = B.CHGER_ID)A, EVCS_STATION B \n\r";
	sql+="WHERE A.C_STAT_ID = B.STAT_ID \n\r";
   //out.print(sql);
   stmt = con.createStatement();   
   rs = stmt.executeQuery(sql);
	JSONObject jsonObj  = new JSONObject();
	JSONArray jsonArr = new JSONArray();
	JSONObject jsonRecord = null;
	
	while(rs.next()) {
		jsonRecord = new JSONObject();
		jsonRecord.put("STAT_ID" , rs.getString("STAT_ID"));
		jsonRecord.put("OCCUR_DATE" , rs.getString("OCCUR_DATE"));
		jsonRecord.put("KO_STAT_NM" , rs.getString("KO_STAT_NM"));
		jsonRecord.put("CHGER_ID"	, rs.getString("CHGER_ID"));
		jsonRecord.put("TROUBLE_CODE"	, rs.getString("TROUBLE_CODE"));
		jsonRecord.put("REPAIR_MAN"	, rs.getString("REPAIR_MAN"));
		jsonRecord.put("CHGER_PROD_MAN"	, rs.getString("CHGER_PROD_MAN"));
		jsonRecord.put("REPAIR_CONTENTS"	, rs.getString("REPAIR_CONTENTS"));
		jsonRecord.put("Y"	, rs.getString("Y"));
		jsonRecord.put("X"	, rs.getString("X"));
		
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
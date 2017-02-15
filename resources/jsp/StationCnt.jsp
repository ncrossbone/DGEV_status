<%@ page contentType="text/html; charset=euc-kr" pageEncoding="EUC-KR" %>
<%@ include file="dbConn.jsp" %>
<%@ page import="java.util.*,java.text.*"%>
<%@page import="org.json.simple.*"%>
<%
try{
	 
   //out.print(sql);
   stmt = con.createStatement();   
   
   sql="SELECT A.STAT_ID, SUM(A.CNT) AS CNT FROM      ";
   sql+="(SELECT                                ";
   sql+=" SUBSTRING(STAT_ID,1,5) AS STAT_ID,    ";
   sql+=" 1 AS CNT                              ";
   sql+=" FROM EVCS_STATION) A                  ";
   sql+=" GROUP BY A.STAT_ID                ";
   sql+=" ORDER BY A.STAT_ID                 ";
   
   rs = stmt.executeQuery(sql);
	JSONObject jsonObj  = new JSONObject();
	JSONArray jsonArr = new JSONArray();
	JSONObject jsonRecord = null;
	
	while(rs.next()) {
		jsonRecord = new JSONObject();
		jsonRecord.put("STAT_ID"	, rs.getString("STAT_ID"));
		jsonRecord.put("CNT"	, rs.getString("CNT"));
		
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
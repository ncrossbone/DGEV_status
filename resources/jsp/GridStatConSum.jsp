<%@ page contentType="text/html; charset=euc-kr" pageEncoding="EUC-KR" %>
<%@ include file="dbConn.jsp" %>
<%@ page import="java.util.*,java.text.*"%>
<%@page import="org.json.simple.*"%>
<%
try{
	sql="SELECT IFNULL(SUM(CNT), 0) AS 'ALL_CHAG'                                                            ";
	sql+="     , IFNULL(MAX(CASE WHEN MAIN_STAT = '3' THEN CNT END), 0) AS 'CHAG'                         ";
	sql+="     , IFNULL(MAX(CASE WHEN MAIN_STAT = '2' THEN CNT END), 0) AS 'AVAIL'                       ";
	sql+="     , IFNULL(SUM(CASE WHEN MAIN_STAT <> '3' AND MAIN_STAT <> '2' THEN CNT END), 0) AS 'ERROR'";
	sql+="  FROM (                                                                                          ";
	sql+="        SELECT CHR.MAIN_STAT                                                                      ";
	sql+="             , COUNT(1) AS CNT                                                                    ";
	sql+="          FROM EV_V_CHARGER CHR                                                                   ";
	sql+="         GROUP BY MAIN_STAT                                                                       ";
	sql+="       ) AS STATCNT                                                                               ";

   //out.print(sql);
   stmt = con.createStatement();   
   rs = stmt.executeQuery(sql);
	JSONObject jsonObj  = new JSONObject();
	JSONArray jsonArr = new JSONArray();
	JSONObject jsonRecord = null;
	
	while(rs.next()) {
		jsonRecord = new JSONObject();
		jsonRecord.put("ALL_CHAG" , rs.getString("ALL_CHAG"));
		jsonRecord.put("CHAG" , rs.getString("CHAG"));
		jsonRecord.put("AVAIL" , rs.getString("AVAIL"));
		jsonRecord.put("ERROR"	, rs.getString("ERROR"));
		
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
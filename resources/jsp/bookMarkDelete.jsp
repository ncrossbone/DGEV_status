<%@ page contentType="text/html; charset=euc-kr" pageEncoding="EUC-KR" %>
<%@ include file="dbConn.jsp" %>
<%@ page import="java.util.*,java.text.*"%>
<%@page import="org.json.simple.*"%>
<%
try{
	
	String stationId = request.getParameter("STAT_ID");
	String memberId = request.getParameter("MEMBER_ID");
	String busiCd = request.getParameter("BUSI_CD");
	
	sql = "	DELETE FROM  EVCS_MOBILE_BOOKMARK ";
	sql += "   where MEMBER_ID = '"+memberId+"' and STAT_ID = '"+stationId+"' and BUSI_KIND_CD='"+busiCd+"' ";
	
	
	System.out.println(sql);
	stmt = con.createStatement();   
	rs = stmt.executeQuery(sql);
	JSONObject jsonObj  = new JSONObject();
	JSONArray jsonArr = new JSONArray();
	JSONObject jsonRecord = null;
   //out.print("success");
}catch(Exception ex){
	//throw;
	System.out.println(ex);
	System.out.println(sql);
	out.print("error");
} 
%>
<%@ include file="dbClose.jsp" %>
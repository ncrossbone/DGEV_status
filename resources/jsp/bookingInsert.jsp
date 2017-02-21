<%@ page contentType="text/html; charset=euc-kr" pageEncoding="EUC-KR" %>
<%@ include file="dbConn.jsp" %>
<%@ page import="java.util.*,java.text.*"%>
<%@page import="org.json.simple.*"%>
<%
try{
	
	String stationId = request.getParameter("STAT_ID");
	String memberId = request.getParameter("MEMBER_ID");
	String chgerId = request.getParameter("CHGER_ID");
	String resvDate = request.getParameter("RESV_DATE");
	String exprDate = request.getParameter("EXPR_DATE");
	
	sql = "	INSERT INTO EVCS_RESERVATION											";
	sql += "    	(                                             ";
	sql += "    		MEMBER_ID                                   ";
	sql += "    		,CHGER_ID                                   ";
	sql += "    		,STAT_ID                                    ";
	sql += "    		,CARD_NO                                    ";
	sql += "    		,RESV_DATE                                  ";
	sql += "    		,EXPR_DATE                                  ";
	sql += "    		,REG_DATE                                   ";
	sql += "    	)                                             ";
	sql += "    	VALUES                                        ";
	sql += "    	(                                             ";
	sql += "    		'"+memberId+"'                                 ";
	sql += "    		,"+chgerId+"                                 ";
	sql += "    		,"+stationId+"                                  ";
	sql += "    		,'aaa'                                      ";
	sql += "    		,"+resvDate+"                                ";
	sql += "    		,"+exprDate+"                                ";
	sql += "    		,DATE_FORMAT(SYSDATE(),'%Y%m%d%H%i%s')      ";
	sql += "    	)                                             ";
	
	stmt = con.createStatement();   
	rs = stmt.executeQuery(sql);
	JSONObject jsonObj  = new JSONObject();
	JSONArray jsonArr = new JSONArray();
	JSONObject jsonRecord = null;
		
	   
    out.print(jsonObj);
    
}catch(Exception ex){
	//throw;
	System.out.println(ex);
	System.out.println(sql);
	out.print("error");
} 
%>
<%@ include file="dbClose.jsp" %>
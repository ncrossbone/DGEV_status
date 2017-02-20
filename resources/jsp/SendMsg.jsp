<%@ page contentType="text/html; charset=euc-kr" pageEncoding="EUC-KR" %>
<%@ include file="dbConn.jsp" %>
<%@ page import="java.util.*,java.text.*"%>
<%@page import="org.json.simple.*"%>
<%

String pNum = request.getParameter("pNum");
String msg = request.getParameter("msg");
try{
	
	
	sql = "INSERT INTO SMSDATA_TB (SMS_MSG,DEST_INFO) values('" + msg + "','" + pNum + "')";
   stmt = con.createStatement();   
   stmt.executeUpdate(sql); 
   //rs = stmt.executeQuery(sql);
	
   //out.print("success");
}catch(Exception ex){
	//throw;
	System.out.println(ex);
	System.out.println(sql);
	out.print("error");
} 
%>
<%@ include file="dbClose.jsp" %>
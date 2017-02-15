<%@ page contentType="text/html; charset=euc-kr" pageEncoding="EUC-KR" %>
<%@ include file="dbConn.jsp" %>
<%@ page import="java.util.*,java.text.*"%>
<%@page import="org.json.simple.*"%>
<%
try{
	sql="SELECT STATTBL.STATNM AS 'STAT'                                                                         ";
	sql+="     , IFNULL(MAX(CASE WHEN SGG_NM = '�հ�' AND  CHGER_TYPE = '�޼�' THEN CNT END), 0) AS 'SUM_RAP'    ";
	sql+="     , IFNULL(MAX(CASE WHEN SGG_NM = '�հ�' AND  CHGER_TYPE = '�ϼ�' THEN CNT END), 0) AS 'SUM_SLOW'    ";
	sql+="     , IFNULL(MAX(CASE WHEN SGG_NM = '�߱�' AND  CHGER_TYPE = '�޼�' THEN CNT END), 0) AS 'CENTER_RAP'    ";
	sql+="     , IFNULL(MAX(CASE WHEN SGG_NM = '�߱�' AND  CHGER_TYPE = '�ϼ�' THEN CNT END), 0) AS 'CENTER_SLOW'    ";
	sql+="     , IFNULL(MAX(CASE WHEN SGG_NM = '����' AND  CHGER_TYPE = '�޼�' THEN CNT END), 0) AS 'EAST_RAP'    ";
	sql+="     , IFNULL(MAX(CASE WHEN SGG_NM = '����' AND  CHGER_TYPE = '�ϼ�' THEN CNT END), 0) AS 'EAST_SLOW'    ";
	sql+="     , IFNULL(MAX(CASE WHEN SGG_NM = '����' AND  CHGER_TYPE = '�޼�' THEN CNT END), 0) AS 'WEST_RAP'    ";
	sql+="     , IFNULL(MAX(CASE WHEN SGG_NM = '����' AND  CHGER_TYPE = '�ϼ�' THEN CNT END), 0) AS 'WEST_SLOW'    ";
	sql+="     , IFNULL(MAX(CASE WHEN SGG_NM = '����' AND  CHGER_TYPE = '�޼�' THEN CNT END), 0) AS 'SOUTH_RAP'    ";
	sql+="     , IFNULL(MAX(CASE WHEN SGG_NM = '����' AND  CHGER_TYPE = '�ϼ�' THEN CNT END), 0) AS 'SOUTH_SLOW'    ";
	sql+="     , IFNULL(MAX(CASE WHEN SGG_NM = '�ϱ�' AND  CHGER_TYPE = '�޼�' THEN CNT END), 0) AS 'NORTH_RAP'    ";
	sql+="     , IFNULL(MAX(CASE WHEN SGG_NM = '�ϱ�' AND  CHGER_TYPE = '�ϼ�' THEN CNT END), 0) AS 'NORTH_SLOW'    ";
	sql+="     , IFNULL(MAX(CASE WHEN SGG_NM = '������' AND  CHGER_TYPE = '�޼�' THEN CNT END), 0) AS 'SU_RAP'";
	sql+="     , IFNULL(MAX(CASE WHEN SGG_NM = '������' AND  CHGER_TYPE = '�ϼ�' THEN CNT END), 0) AS 'SU_SLOW'";
	sql+="     , IFNULL(MAX(CASE WHEN SGG_NM = '�޼���' AND  CHGER_TYPE = '�޼�' THEN CNT END), 0) AS 'DAL_1_RAP'";
	sql+="     , IFNULL(MAX(CASE WHEN SGG_NM = '�޼���' AND  CHGER_TYPE = '�ϼ�' THEN CNT END), 0) AS 'DAL_1_SLOW'";
	sql+="     , IFNULL(MAX(CASE WHEN SGG_NM = '�޼���' AND  CHGER_TYPE = '�޼�' THEN CNT END), 0) AS 'DAL_2_RAP'";
	sql+="     , IFNULL(MAX(CASE WHEN SGG_NM = '�޼���' AND  CHGER_TYPE = '�ϼ�' THEN CNT END), 0) AS 'DAL_2_SLOW'";
	sql+="  FROM (                                                                                                ";
	sql+="        SELECT ADM.SGG AS SGG_NM                                                                        ";
	sql+="             , CASE WHEN CHR.C_CHGER_TYPE_CD = '02' THEN '�ϼ�'                                         ";
	sql+="                    ELSE '�޼�' END AS CHGER_TYPE                                                       ";
	sql+="             , CHR.MAIN_STAT                                                                            ";
	sql+="             , COUNT(1) AS CNT                                                                          ";
	sql+="          FROM EV_V_CHARGER CHR                                                                         ";
	sql+="             , CM_ADM_CODE ADM                                                                          ";
	sql+="         WHERE CONCAT(SUBSTRING(C_STAT_ID, 1, 5), '00000') = ADM.ADMCODE                                ";
	sql+="         GROUP BY ADM.SGG, CASE WHEN CHR.C_CHGER_TYPE_CD = '02' THEN '�ϼ�' ELSE '�޼�' END, MAIN_STAT  ";
	sql+="        UNION                                                                                           ";
	sql+="        SELECT '�հ�' AS SGG_NM                                                                         ";
	sql+="             , CASE WHEN CHR.C_CHGER_TYPE_CD = '02' THEN '�ϼ�'                                         ";
	sql+="                    ELSE '�޼�' END AS CHGER_TYPE                                                       ";
	sql+="             , CHR.MAIN_STAT                                                                            ";
	sql+="             , COUNT(1) AS CNT                                                                          ";
	sql+="          FROM EV_V_CHARGER CHR                                                                         ";
	sql+="             , CM_ADM_CODE ADM                                                                          ";
	sql+="         WHERE CONCAT(SUBSTRING(C_STAT_ID, 1, 5), '00000') = ADM.ADMCODE                                ";
	sql+="         GROUP BY CASE WHEN CHR.C_CHGER_TYPE_CD = '02' THEN '�ϼ�' ELSE '�޼�' END, MAIN_STAT           ";
	sql+="       ) CNTTBL                                                                                         ";
	sql+=" RIGHT JOIN                                                                                             ";
	sql+="       (                                                                                                ";
	sql+="        SELECT '0' AS MAIN_STAT, '�˼�����' AS STATNM                                                   ";
	sql+="        UNION                                                                                           ";
	sql+="        SELECT '1' AS MAIN_STAT, '����̻�' AS STATNM                                                   ";
	sql+="        UNION                                                                                           ";
	sql+="        SELECT '2' AS MAIN_STAT, '�������' AS STATNM                                                   ";
	sql+="        UNION                                                                                           ";
	sql+="        SELECT '3' AS MAIN_STAT, '������' AS STATNM                                                     ";
	sql+="        UNION                                                                                           ";
	sql+="        SELECT '4' AS MAIN_STAT, '�����' AS STATNM                                                   ";
	sql+="        UNION                                                                                           ";
	sql+="        SELECT '5' AS MAIN_STAT, '������' AS STATNM                                                     ";
	sql+="       ) STATTBL                                                                                        ";
	sql+="       ON CNTTBL.MAIN_STAT = STATTBL.MAIN_STAT                                                          ";
	sql+=" GROUP BY STATTBL.MAIN_STAT;                                                                            ";

   //out.print(sql);
   stmt = con.createStatement();   
   rs = stmt.executeQuery(sql);
	JSONObject jsonObj  = new JSONObject();
	JSONArray jsonArr = new JSONArray();
	JSONObject jsonRecord = null;
	
	while(rs.next()) {
		jsonRecord = new JSONObject();
		jsonRecord.put("STAT" , rs.getString("STAT"));
		jsonRecord.put("SUM_RAP" , rs.getString("SUM_RAP"));
		jsonRecord.put("SUM_SLOW" , rs.getString("SUM_SLOW"));
		jsonRecord.put("CENTER_RAP"	, rs.getString("CENTER_RAP"));
		jsonRecord.put("CENTER_SLOW"	, rs.getString("CENTER_SLOW"));
		jsonRecord.put("EAST_RAP"	, rs.getString("EAST_RAP"));
		jsonRecord.put("EAST_SLOW"	, rs.getString("EAST_SLOW"));
		jsonRecord.put("WEST_RAP"	, rs.getString("WEST_RAP"));
		jsonRecord.put("WEST_SLOW"	, rs.getString("WEST_SLOW"));
		jsonRecord.put("SOUTH_RAP"	, rs.getString("SOUTH_RAP"));
		jsonRecord.put("SOUTH_SLOW"	, rs.getString("SOUTH_SLOW"));
		jsonRecord.put("NORTH_RAP"	, rs.getString("NORTH_RAP"));
		jsonRecord.put("NORTH_SLOW"	, rs.getString("NORTH_SLOW"));
		jsonRecord.put("SU_RAP"	, rs.getString("SU_RAP"));
		jsonRecord.put("SU_SLOW"	, rs.getString("SU_SLOW"));
		jsonRecord.put("DAL_1_RAP"	, rs.getString("DAL_1_RAP"));
		jsonRecord.put("DAL_1_SLOW"	, rs.getString("DAL_1_SLOW"));
		jsonRecord.put("DAL_2_RAP"	, rs.getString("DAL_2_RAP"));
		jsonRecord.put("DAL_2_SLOW"	, rs.getString("DAL_2_SLOW"));
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
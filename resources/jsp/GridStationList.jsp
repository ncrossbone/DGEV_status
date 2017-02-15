<%@ page contentType="text/html; charset=euc-kr" pageEncoding="EUC-KR" %>
<%@ include file="dbConn.jsp" %>
<%@ page import="java.util.*,java.text.*"%>
<%@page import="org.json.simple.*"%>
<%
try{


	sql="SELECT NOWDATE.S_KO_STAT_NM AS S_KO_STAT_NM,                                                                                             ";
	sql+="       NOWDATE.C_STAT_ID AS C_STAT_ID,                                                                                                   ";
	sql+="       SUBSTR(NOWDATE.C_STAT_ID,1,5) AS ADM_CD,                                                                                          ";
	sql+="       NOWDATE.C_CHGER_ID AS C_CHGER_ID,                                                                                                 ";
	sql+="       NOWDATE.S_ADDR_1 AS S_ADDR_1,                                                                                                 ";
	sql+="       CASE WHEN NOWDATE.C_CHGER_TYPE_CD = '02' THEN '완속' ELSE '급속' END AS CHGER_TYPE_CD,                                            ";
	sql+="       CASE WHEN NOWDATE.MAIN_STAT = '0' THEN '알수없음'                                                                                 ";
	sql+="            WHEN NOWDATE.MAIN_STAT = '1' THEN '통신이상'                                                                                 ";
	sql+="            WHEN NOWDATE.MAIN_STAT = '2' THEN '충전대기'                                                                                 ";
	sql+="            WHEN NOWDATE.MAIN_STAT = '3' THEN '충전중'                                                                                   ";
	sql+="            WHEN NOWDATE.MAIN_STAT = '4' THEN '운영중지'                                                                                 ";
	sql+="            WHEN NOWDATE.MAIN_STAT = '5' THEN '점검중'                                                                                   ";
	sql+="            ELSE '알수없음' END AS MAIN_STAT,                                                                                            ";
	sql+="       NOWDATE.CHRG_WH AS NOW_WH,                                                                                                        ";
	sql+="       PREMONTH.CHRG_WH AS PRE_WH,                                                                                                       ";
	sql+="       NOWDATE.CHRG_AMT AS NOW_AMT,                                                                                                      ";
	sql+="       NOWDATE.CHGE_TOT_POW AS CHGE_TOT_POW                                                                                              ";
	sql+="  FROM (                                                                                                                                 ";
	sql+="        SELECT AA.C_STAT_ID, AA.S_KO_STAT_NM, AA.C_CHGER_ID, AA.C_CHGER_TYPE_CD, AA.MAIN_STAT, SUBSTRING_INDEX(SUBSTRING_INDEX(AA.S_ADDR_1,' ',2),' ',-1) AS S_ADDR_1, IFNULL(AA.CHGE_TOT_POW, 0) AS CHGE_TOT_POW";
	sql+="             , IFNULL(BB.CHRG_WH, 0) AS CHRG_WH, IFNULL(BB.CHRG_AMT, 0) AS CHRG_AMT                                                      ";
	sql+="          FROM EV_V_CHARGER AA                                                                                                           ";
	sql+="          LEFT JOIN (                                                                                                                    ";
	sql+="                      SELECT A.C_STAT_ID, A.S_KO_STAT_NM, A.C_CHGER_ID, A.C_CHGER_TYPE_CD, A.MAIN_STAT, A.CHGE_TOT_POW                   ";
	sql+="                           , SUM(B.CHRG_WH) AS CHRG_WH, SUM(B.CHRG_AMT) AS CHRG_AMT                                                      ";
	sql+="                        FROM EV_V_CHARGER A                                                                                              ";
	sql+="                           , EV2_RAW_CHRGRPT B                                                                                           ";
	sql+="                       WHERE A.C_STAT_ID = B.STAT_ID                                                                                     ";
	sql+="                         AND A.C_CHGER_ID = B.CHGER_ID                                                                                   ";
	sql+="                         AND date_format(B.STOP_DATE,'%Y-%m-%d') = date_format('20170102','%Y-%m-%d')                                    ";
	sql+="                       GROUP BY C_STAT_ID, S_KO_STAT_NM, C_CHGER_ID, C_CHGER_TYPE_CD, MAIN_STAT, CHGE_TOT_POW                            ";
	sql+="                    ) BB                                                                                                                 ";
	sql+="          ON AA.C_STAT_ID = BB.C_STAT_ID AND AA.C_CHGER_ID = BB.C_CHGER_ID                                                               ";
	sql+="       ) AS NOWDATE,                                                                                                                     ";
	sql+="      (                                                                                                                                  ";
	sql+="        SELECT AA.C_STAT_ID, AA.S_KO_STAT_NM, AA.C_CHGER_ID, AA.C_CHGER_TYPE_CD, AA.MAIN_STAT, IFNULL(AA.CHGE_TOT_POW, 0) AS CHGE_TOT_POW";
	sql+="             , IFNULL(BB.CHRG_WH, 0) AS CHRG_WH, IFNULL(BB.CHRG_AMT, 0) AS CHRG_AMT                                                      ";
	sql+="          FROM EV_V_CHARGER AA                                                                                                           ";
	sql+="          LEFT JOIN (                                                                                                                    ";
	sql+="                      SELECT A.C_STAT_ID, A.S_KO_STAT_NM, A.C_CHGER_ID, A.C_CHGER_TYPE_CD, A.MAIN_STAT, A.CHGE_TOT_POW                   ";
	sql+="                           , SUM(B.CHRG_WH) AS CHRG_WH, SUM(B.CHRG_AMT) AS CHRG_AMT                                                      ";
	sql+="                        FROM EV_V_CHARGER A                                                                                              ";
	sql+="                           , EV2_RAW_CHRGRPT B                                                                                           ";
	sql+="                       WHERE A.C_STAT_ID = B.STAT_ID                                                                                     ";
	sql+="                         AND A.C_CHGER_ID = B.CHGER_ID                                                                                   ";
	sql+="                         AND date_format(B.STOP_DATE,'%Y-%m-%d') >= date_add(date_format('20170102','%Y-%m-%d'), interval -1 month)      ";
	sql+="                         AND date_format(B.STOP_DATE,'%Y-%m-%d') <= date_format('20170102','%Y-%m-%d')                                   ";
	sql+="                       GROUP BY C_STAT_ID, S_KO_STAT_NM, C_CHGER_ID, C_CHGER_TYPE_CD, MAIN_STAT, CHGE_TOT_POW                            ";
	sql+="                    ) BB                                                                                                                 ";
	sql+="          ON AA.C_STAT_ID = BB.C_STAT_ID AND AA.C_CHGER_ID = BB.C_CHGER_ID                                                               ";
	sql+="      ) AS PREMONTH                                                                                                                      ";
	sql+=" WHERE NOWDATE.C_STAT_ID = PREMONTH.C_STAT_ID                                                                                            ";
	sql+="   AND NOWDATE.C_CHGER_ID = PREMONTH.C_CHGER_ID                                                                                          ";
	sql+="   AND NOWDATE.C_CHGER_TYPE_CD = PREMONTH.C_CHGER_TYPE_CD                                                                                ";
	sql+="   AND NOWDATE.MAIN_STAT = PREMONTH.MAIN_STAT                                                                                            ";
	sql+=" ORDER BY NOWDATE.C_STAT_ID, NOWDATE.C_CHGER_ID                                                                                         ";
	 


   //out.print(sql);
   stmt = con.createStatement();   
   rs = stmt.executeQuery(sql);
	JSONObject jsonObj  = new JSONObject();
	JSONArray jsonArr = new JSONArray();
	JSONObject jsonRecord = null;
	
	while(rs.next()) {
		jsonRecord = new JSONObject();
		jsonRecord.put("S_KO_STAT_NM" , rs.getString("S_KO_STAT_NM"));
		jsonRecord.put("S_ADDR_1" , rs.getString("S_ADDR_1"));
		jsonRecord.put("C_STAT_ID" , rs.getString("C_STAT_ID"));
		jsonRecord.put("ADM_CD" , rs.getString("ADM_CD"));
		jsonRecord.put("C_CHGER_ID"	, rs.getString("C_CHGER_ID"));
		jsonRecord.put("CHGER_TYPE_CD"	, rs.getString("CHGER_TYPE_CD"));
		jsonRecord.put("MAIN_STAT"	, rs.getString("MAIN_STAT"));
		jsonRecord.put("NOW_WH"	, rs.getString("NOW_WH"));
		jsonRecord.put("PRE_WH"	, rs.getString("PRE_WH"));
		jsonRecord.put("NOW_AMT"	, rs.getString("NOW_AMT"));
		jsonRecord.put("CHGE_TOT_POW"	, rs.getString("CHGE_TOT_POW"));
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
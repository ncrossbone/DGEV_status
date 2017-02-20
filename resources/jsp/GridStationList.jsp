<%@ page contentType="text/html; charset=euc-kr" pageEncoding="EUC-KR" %>
<%@ include file="dbConn.jsp" %>
<%@ page import="java.util.*,java.text.*"%>
<%@page import="org.json.simple.*"%>
<%
try{


	sql="SELECT NOWDATE.S_KO_STAT_NM AS S_KO_STAT_NM,                                                                                                                                                                                      ";                                                                      
	sql+="     NOWDATE.C_STAT_ID AS C_STAT_ID,                                                                                                                                                                                             \n\r ";
	sql+="     SUBSTR(NOWDATE.C_STAT_ID,1,5) AS ADM_CD,                                                                                                                                                                                    \n\r ";
	sql+="     NOWDATE.C_CHGER_ID AS C_CHGER_ID,                                                                                                                                                                                           \n\r ";
	sql+="     NOWDATE.S_ADDR_1 AS S_ADDR_1,                                                                                                                                                                                               \n\r ";
	sql+="     CASE WHEN NOWDATE.C_CHGER_TYPE_CD = '02' THEN '완속' ELSE '급속' END AS CHGER_TYPE_CD,                                                                                                                                      \n\r ";
	sql+="     CASE WHEN NOWDATE.MAIN_STAT = '0' THEN '알수없음'                                                                                                                                                                           \n\r ";
	sql+="          WHEN NOWDATE.MAIN_STAT = '1' THEN '통신이상'                                                                                                                                                                           \n\r ";
	sql+="          WHEN NOWDATE.MAIN_STAT = '2' THEN '충전대기'                                                                                                                                                                           \n\r ";
	sql+="          WHEN NOWDATE.MAIN_STAT = '3' THEN '충전중'                                                                                                                                                                             \n\r ";
	sql+="          WHEN NOWDATE.MAIN_STAT = '4' THEN '운영중지'                                                                                                                                                                           \n\r ";
	sql+="          WHEN NOWDATE.MAIN_STAT = '5' THEN '점검중'                                                                                                                                                                             \n\r ";
	sql+="          ELSE '알수없음' END AS MAIN_STAT,                                                                                                                                                                                      \n\r ";
	sql+="     NOWDATE.CHRG_WH AS NOW_WH,                                                                                                                                                                                                  \n\r ";
	sql+="     PREMONTH.CHRG_WH AS PRE_WH,                                                                                                                                                                                                 \n\r ";
	sql+="     NOWDATE.CHRG_AMT AS NOW_AMT,                                                                                                                                                                                                \n\r ";
	sql+="     NOWDATE.CHGE_TOT_POW AS CHGE_TOT_POW                                                                                                                                                                                        \n\r ";
	sql+="FROM (                                                                                                                                                                                                                           \n\r ";
	sql+="      SELECT AA.C_STAT_ID, AA.S_KO_STAT_NM, AA.C_CHGER_ID, AA.C_CHGER_TYPE_CD, AA.MAIN_STAT, SUBSTRING_INDEX(SUBSTRING_INDEX(AA.S_ADDR_1,' ',2),' ',-1) AS S_ADDR_1, IFNULL(AA.CHGE_TOT_POW, 0) AS CHGE_TOT_POW                  \n\r ";
	sql+="           , IFNULL(BB.CHRG_WH, 0) AS CHRG_WH, IFNULL(BB.CHRG_AMT, 0) AS CHRG_AMT                                                                                                                                                \n\r ";
	sql+="        FROM EV_V_CHARGER AA                                                                                                                                                                                                     \n\r ";
	sql+="        LEFT JOIN (                                                                                                                                                                                                              \n\r ";
	sql+="                    SELECT A.C_STAT_ID, A.S_KO_STAT_NM, A.C_CHGER_ID, A.C_CHGER_TYPE_CD, A.MAIN_STAT, A.CHGE_TOT_POW                                                                                                             \n\r ";
	sql+="                         , SUM(B.CHRG_WH) AS CHRG_WH, SUM(B.CHRG_AMT) AS CHRG_AMT                                                                                                                                                \n\r ";
	sql+="                      FROM EV_V_CHARGER A                                                                                                                                                                                        \n\r ";
	sql+="                         , EV2_RAW_CHRGRPT B                                                                                                                                                                                     \n\r ";
	sql+="                     WHERE A.C_STAT_ID = B.STAT_ID                                                                                                                                                                               \n\r ";
	sql+="                       AND A.C_CHGER_ID = B.CHGER_ID                                                                                                                                                                             \n\r ";
	sql+="                       AND B.CHGER_START_DTIME = now()                                                                                                                                                                           \n\r ";
	sql+="                     GROUP BY C_STAT_ID, S_KO_STAT_NM, C_CHGER_ID, C_CHGER_TYPE_CD, MAIN_STAT, CHGE_TOT_POW                                                                                                                      \n\r ";
	sql+="                  ) BB                                                                                                                                                                                                           \n\r ";
	sql+="        ON AA.C_STAT_ID = BB.C_STAT_ID AND AA.C_CHGER_ID = BB.C_CHGER_ID                                                                                                                                                         \n\r ";
	sql+="     ) AS NOWDATE,                                                                                                                                                                                                               \n\r ";
	sql+="    (                                                                                                                                                                                                                            \n\r ";
	sql+="      SELECT AA.C_STAT_ID, AA.S_KO_STAT_NM, AA.C_CHGER_ID, AA.C_CHGER_TYPE_CD, AA.MAIN_STAT, IFNULL(AA.CHGE_TOT_POW, 0) AS CHGE_TOT_POW                                                                                          \n\r ";
	sql+="           , IFNULL(BB.CHRG_WH, 0) AS CHRG_WH, IFNULL(BB.CHRG_AMT, 0) AS CHRG_AMT                                                                                                                                                \n\r ";
	sql+="        FROM EV_V_CHARGER AA                                                                                                                                                                                                     \n\r ";
	sql+="        LEFT JOIN (                                                                                                                                                                                                              \n\r ";
	sql+="                    SELECT A.C_STAT_ID, A.S_KO_STAT_NM, A.C_CHGER_ID, A.C_CHGER_TYPE_CD, A.MAIN_STAT, A.CHGE_TOT_POW                                                                                                             \n\r ";
	sql+="                         , SUM(B.CHRG_WH) AS CHRG_WH, SUM(B.CHRG_AMT) AS CHRG_AMT                                                                                                                                                \n\r ";
	sql+="                      FROM EV_V_CHARGER A                                                                                                                                                                                        \n\r ";
	sql+="                         , EV2_RAW_CHRGRPT B                                                                                                                                                                                     \n\r ";
	sql+="                     WHERE A.C_STAT_ID = B.STAT_ID                                                                                                                                                                               \n\r ";
	sql+="                       AND A.C_CHGER_ID = B.CHGER_ID                                                                                                                                                                             \n\r ";
	sql+="                       AND B.CHGER_START_DTIME >= date_add(now(), interval -1 month)                                                                                                                                             \n\r ";
	sql+="                       AND B.CHGER_START_DTIME <= now()                                                                                                                                                                          \n\r ";
	sql+="                     GROUP BY C_STAT_ID, S_KO_STAT_NM, C_CHGER_ID, C_CHGER_TYPE_CD, MAIN_STAT, CHGE_TOT_POW                                                                                                                      \n\r ";
	sql+="                  ) BB                                                                                                                                                                                                           \n\r ";
	sql+="        ON AA.C_STAT_ID = BB.C_STAT_ID AND AA.C_CHGER_ID = BB.C_CHGER_ID                                                                                                                                                         \n\r ";
	sql+="    ) AS PREMONTH                                                                                                                                                                                                                \n\r ";
	sql+="WHERE NOWDATE.C_STAT_ID = PREMONTH.C_STAT_ID                                                                                                                                                                                     \n\r ";
	sql+=" AND NOWDATE.C_CHGER_ID = PREMONTH.C_CHGER_ID                                                                                                                                                                                    \n\r ";
	sql+=" AND NOWDATE.C_CHGER_TYPE_CD = PREMONTH.C_CHGER_TYPE_CD                                                                                                                                                                          \n\r ";
	sql+=" AND NOWDATE.MAIN_STAT = PREMONTH.MAIN_STAT                                                                                                                                                                                      \n\r ";
	sql+="ORDER BY NOWDATE.C_STAT_ID, NOWDATE.C_CHGER_ID                                                                                                                                                                                   \n\r ";
	 


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
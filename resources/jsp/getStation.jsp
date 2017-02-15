<%@ page contentType="text/html; charset=euc-kr" pageEncoding="EUC-KR" %>
<%@ include file="dbConn.jsp" %>
<%@ page import="java.util.*,java.text.*"%>
<%@page import="org.json.simple.*"%>
<%
try{


	sql="SELECT SUBSTR(ADMCODE,1,5) AS ADM_CD, SGG_NM, C_STAT_ID, S_KO_STAT_NM, S_GPS_LAT_LNG                        \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN CHGER_TYPE = '01' AND USE_YN = 'Y' THEN CNT END), 0) AS 'Y01' -- �޼ӻ�밡��   \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN CHGER_TYPE = '01' AND USE_YN = 'N' THEN CNT END), 0) AS 'N01' -- �޼ӻ��Ұ�   \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN CHGER_TYPE = '02' AND USE_YN = 'Y' THEN CNT END), 0) AS 'Y02' -- �ϼӻ�밡��   \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN CHGER_TYPE = '02' AND USE_YN = 'N' THEN CNT END), 0) AS 'N02' -- �ϼӻ��Ұ�   \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN CHGER_TYPE = '01' AND USE_YN = 'A' THEN CNT END), 0) AS 'A01' -- �޼���ü       \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN CHGER_TYPE = '02' AND USE_YN = 'A' THEN CNT END), 0) AS 'A02' -- �ϼ���ü       \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN CHGER_TYPE = 'A' AND USE_YN = 'Y' THEN CNT END), 0) AS 'YA' -- ��밡����ü     \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN CHGER_TYPE = 'A' AND USE_YN = 'N' THEN CNT END), 0) AS 'NA' -- ���Ұ���ü     \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN CHGER_TYPE = 'A' AND USE_YN = 'A' THEN CNT END), 0) AS 'AA' -- ��ü             \n\r";
	sql+="  FROM (                                                                                                    \n\r";
	sql+="        -- �޼� ��� ����/�Ұ�, �ϼ� ��밡��/�Ұ� ī��Ʈ                                                   \n\r";
	sql+="        SELECT ADMCODE, SGG_NM, C_STAT_ID, S_KO_STAT_NM, CHGER_TYPE, USE_YN, COUNT(1) AS CNT, S_GPS_LAT_LNG \n\r";
	sql+="          FROM (                                                                                            \n\r";
	sql+="                SELECT ADM.ADMCODE                                                                          \n\r";
	sql+="                     , ADM.SGG AS SGG_NM                                                                    \n\r";
	sql+="                     , CHR.C_STAT_ID                                                                        \n\r";
	sql+="                     , CHR.S_KO_STAT_NM                                                                     \n\r";
	sql+="                     , CASE WHEN CHR.C_CHGER_TYPE_CD = '02' THEN '02'                                       \n\r";
	sql+="                            ELSE '01' END AS CHGER_TYPE                                                     \n\r";
	sql+="                     , CASE WHEN CHR.MAIN_STAT = '2' THEN 'Y'                                               \n\r";
	sql+="                            ELSE 'N' END AS USE_YN                                                          \n\r";
	sql+="                     , CHR.S_GPS_LAT_LNG                                                                    \n\r";
	sql+="                  FROM EV_V_CHARGER CHR                                                                     \n\r";
	sql+="                     , CM_ADM_CODE ADM                                                                      \n\r";
	sql+="                 WHERE CONCAT(SUBSTRING(C_STAT_ID, 1, 5), '00000') = ADM.ADMCODE                            \n\r";
	sql+="               ) CHRCNT                                                                                     \n\r";
	sql+="         GROUP BY ADMCODE, SGG_NM, C_STAT_ID, S_KO_STAT_NM, CHGER_TYPE, USE_YN, S_GPS_LAT_LNG               \n\r";
	sql+="         UNION ALL                                                                                          \n\r";
	sql+="         -- �޼� ��ü, �ϼ� ��ü ī��Ʈ                                                                     \n\r";
	sql+="         SELECT ADMCODE, SGG_NM, C_STAT_ID, S_KO_STAT_NM, CHGER_TYPE, USE_YN, COUNT(1) AS CNT, S_GPS_LAT_LNG\n\r";
	sql+="          FROM (                                                                                            \n\r";
	sql+="                SELECT ADM.ADMCODE                                                                          \n\r";
	sql+="                     , ADM.SGG AS SGG_NM                                                                    \n\r";
	sql+="                     , CHR.C_STAT_ID                                                                        \n\r";
	sql+="                     , CHR.S_KO_STAT_NM                                                                     \n\r";
	sql+="                     , CHR.S_GPS_LAT_LNG                                                                    \n\r";
	sql+="                     , CASE WHEN CHR.C_CHGER_TYPE_CD = '02' THEN '02'                                       \n\r";
	sql+="                            ELSE '01' END AS CHGER_TYPE                                                     \n\r";
	sql+="                     , 'A' AS USE_YN                                                                        \n\r";
	sql+="                  FROM EV_V_CHARGER CHR                                                                     \n\r";
	sql+="                     , CM_ADM_CODE ADM                                                                      \n\r";
	sql+="                 WHERE CONCAT(SUBSTRING(C_STAT_ID, 1, 5), '00000') = ADM.ADMCODE                            \n\r";
	sql+="               ) CHRCNT                                                                                     \n\r";
	sql+="         GROUP BY ADMCODE, SGG_NM, C_STAT_ID, S_KO_STAT_NM, CHGER_TYPE, USE_YN, S_GPS_LAT_LNG               \n\r";
	sql+="         UNION ALL                                                                                          \n\r";
	sql+="         -- ��밡�� ��ü, ���Ұ� ��ü ī��Ʈ                                                             \n\r";
	sql+="         SELECT ADMCODE, SGG_NM, C_STAT_ID, S_KO_STAT_NM, CHGER_TYPE, USE_YN, COUNT(1) AS CNT, S_GPS_LAT_LNG\n\r";
	sql+="          FROM (                                                                                            \n\r";
	sql+="                SELECT ADM.ADMCODE                                                                          \n\r";
	sql+="                     , ADM.SGG AS SGG_NM                                                                    \n\r";
	sql+="                     , CHR.C_STAT_ID                                                                        \n\r";
	sql+="                     , CHR.S_KO_STAT_NM                                                                     \n\r";
	sql+="                     , 'A' AS CHGER_TYPE                                                                    \n\r";
	sql+="                     , CHR.S_GPS_LAT_LNG                                                                    \n\r";
	sql+="                     , CASE WHEN CHR.MAIN_STAT = '2' THEN 'Y'                                               \n\r";
	sql+="                            ELSE 'N' END AS USE_YN                                                          \n\r";
	sql+="                  FROM EV_V_CHARGER CHR                                                                     \n\r";
	sql+="                     , CM_ADM_CODE ADM                                                                      \n\r";
	sql+="                 WHERE CONCAT(SUBSTRING(C_STAT_ID, 1, 5), '00000') = ADM.ADMCODE                            \n\r";
	sql+="               ) CHRCNT                                                                                     \n\r";
	sql+="         GROUP BY ADMCODE, SGG_NM, C_STAT_ID, S_KO_STAT_NM, CHGER_TYPE, USE_YN, S_GPS_LAT_LNG               \n\r";
	sql+="         UNION ALL                                                                                          \n\r";
	sql+="         -- �����Һ� ��ü ������ ī��Ʈ (�޼�, �ϼ�, ��밡, ���Ұ� ����)                                 \n\r";
	sql+="         SELECT ADMCODE, SGG_NM, C_STAT_ID, S_KO_STAT_NM, CHGER_TYPE, USE_YN, COUNT(1) AS CNT, S_GPS_LAT_LNG\n\r";
	sql+="          FROM (                                                                                            \n\r";
	sql+="                SELECT ADM.ADMCODE                                                                          \n\r";
	sql+="                     , ADM.SGG AS SGG_NM                                                                    \n\r";
	sql+="                     , CHR.C_STAT_ID                                                                        \n\r";
	sql+="                     , CHR.S_KO_STAT_NM                                                                     \n\r";
	sql+="                     , 'A' AS CHGER_TYPE                                                                    \n\r";
	sql+="                     , 'A' AS USE_YN                                                                        \n\r";
	sql+="                     , CHR.S_GPS_LAT_LNG                                                                    \n\r";
	sql+="                  FROM EV_V_CHARGER CHR                                                                     \n\r";
	sql+="                     , CM_ADM_CODE ADM                                                                      \n\r";
	sql+="                 WHERE CONCAT(SUBSTRING(C_STAT_ID, 1, 5), '00000') = ADM.ADMCODE                            \n\r";
	sql+="               ) CHRCNT                                                                                     \n\r";
	sql+="         GROUP BY ADMCODE, SGG_NM, C_STAT_ID, S_KO_STAT_NM, CHGER_TYPE, USE_YN, S_GPS_LAT_LNG               \n\r";
	sql+="       ) RSTTBL                                                                                             \n\r";
	sql+=" GROUP BY ADMCODE, SGG_NM, C_STAT_ID, S_KO_STAT_NM, S_GPS_LAT_LNG                                        \n\r";
	 
	 
	 
	 
	 
   //out.print(sql);
   stmt = con.createStatement();   
   rs = stmt.executeQuery(sql);
	JSONObject jsonObj  = new JSONObject();
	JSONArray jsonArr = new JSONArray();
	JSONObject jsonRecord = null;
	
	while(rs.next()) {
		jsonRecord = new JSONObject();
		jsonRecord.put("ADM_CD"	, rs.getString("ADM_CD"));
		jsonRecord.put("SGG_NM"	, rs.getString("SGG_NM"));
		jsonRecord.put("S_KO_STAT_NM"	, rs.getString("S_KO_STAT_NM"));
		jsonRecord.put("S_GPS_LAT_LNG"	, rs.getString("S_GPS_LAT_LNG"));
		jsonRecord.put("Y01"	, rs.getString("Y01"));
		jsonRecord.put("N01"	, rs.getString("N01"));
		jsonRecord.put("Y02"	, rs.getString("Y02"));
		jsonRecord.put("N02"	, rs.getString("N02"));
		jsonRecord.put("A01"	, rs.getString("A01"));
		jsonRecord.put("A02"	, rs.getString("A02"));
		jsonRecord.put("YA"	, rs.getString("YA"));
		jsonRecord.put("NA"	, rs.getString("NA"));
		jsonRecord.put("AA"	, rs.getString("AA"));
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
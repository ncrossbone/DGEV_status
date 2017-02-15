<%@ page contentType="text/html; charset=euc-kr" pageEncoding="EUC-KR" %>
<%@ include file="dbConn.jsp" %>
<%@ page import="java.util.*,java.text.*"%>
<%@page import="org.json.simple.*"%>
<%
try{
	sql="SELECT GUBUN AS 'STAT'                                                                                                                              \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN SGG = '전체합계' AND  C_CHGER_TYPE_CD <> '02' THEN CHRG_VAL END), 0) AS 'ALL_SUM'                                      \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN SGG = '합계' AND  C_CHGER_TYPE_CD <> '02' THEN CHRG_VAL END), 0) AS 'SUM_RAP'                                          \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN SGG = '합계' AND  C_CHGER_TYPE_CD = '02' THEN CHRG_VAL END), 0) AS 'SUM_SLOW'                                           \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN SGG = '중구' AND  C_CHGER_TYPE_CD <> '02' THEN CHRG_VAL END), 0) AS 'CENTER_RAP'                                          \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN SGG = '중구' AND  C_CHGER_TYPE_CD = '02' THEN CHRG_VAL END), 0) AS 'CENTER_SLOW'                                           \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN SGG = '동구' AND  C_CHGER_TYPE_CD <> '02' THEN CHRG_VAL END), 0) AS 'EAST_RAP'                                          \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN SGG = '동구' AND  C_CHGER_TYPE_CD = '02' THEN CHRG_VAL END), 0) AS 'EAST_SLOW'                                           \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN SGG = '서구' AND  C_CHGER_TYPE_CD <> '02' THEN CHRG_VAL END), 0) AS 'WEST_RAP'                                          \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN SGG = '서구' AND  C_CHGER_TYPE_CD = '02' THEN CHRG_VAL END), 0) AS 'WEST_SLOW'                                           \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN SGG = '남구' AND  C_CHGER_TYPE_CD <> '02' THEN CHRG_VAL END), 0) AS 'SOUTH_RAP'                                          \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN SGG = '남구' AND  C_CHGER_TYPE_CD = '02' THEN CHRG_VAL END), 0) AS 'SOUTH_SLOW'                                           \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN SGG = '북구' AND  C_CHGER_TYPE_CD <> '02' THEN CHRG_VAL END), 0) AS 'NORTH_RAP'                                          \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN SGG = '북구' AND  C_CHGER_TYPE_CD = '02' THEN CHRG_VAL END), 0) AS 'NORTH_SLOW'                                           \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN SGG = '수성구' AND  C_CHGER_TYPE_CD <> '02' THEN CHRG_VAL END), 0) AS 'SU_RAP'                                      \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN SGG = '수성구' AND  C_CHGER_TYPE_CD = '02' THEN CHRG_VAL END), 0) AS 'SU_SLOW'                                       \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN SGG = '달서구' AND  C_CHGER_TYPE_CD <> '02' THEN CHRG_VAL END), 0) AS 'DAL_1_RAP'                                      \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN SGG = '달서구' AND  C_CHGER_TYPE_CD = '02' THEN CHRG_VAL END), 0) AS 'DAL_1_SLOW'                                       \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN SGG = '달성군' AND  C_CHGER_TYPE_CD <> '02' THEN CHRG_VAL END), 0) AS 'DAL_2_RAP'                                      \n\r";
	sql+="     , IFNULL(MAX(CASE WHEN SGG = '달성군' AND  C_CHGER_TYPE_CD = '02' THEN CHRG_VAL END), 0) AS 'DAL_2_SLOW'                                       \n\r";
	sql+="  FROM (                                                                                                                                            \n\r";
	sql+="        SELECT *                                                                                                                                    \n\r";
	sql+="          FROM (                                                                                                                                    \n\r";
	sql+="                -- 구별 당일 전력량 (급속, 완속 구분)                                                                                               \n\r";
	sql+="                SELECT '01' AS SORT, '전력량' AS GUBUN, ADM.ADMCODE, ADM.SGG, VCHR.C_CHGER_TYPE_CD, SUM(CHR.CHRG_WH) AS CHRG_VAL                    \n\r";
	sql+="                  FROM CM_ADM_CODE ADM                                                                                                              \n\r";
	sql+="                     , EV_V_CHARGER VCHR                                                                                                            \n\r";
	sql+="                     , EV2_RAW_CHRGRPT CHR                                                                                                          \n\r";
	sql+="                 WHERE ADM.ADMCODE = CONCAT(SUBSTRING(VCHR.C_STAT_ID, 1, 5), '00000')                                                               \n\r";
	sql+="                   AND ADM.ADMCODE = CONCAT(SUBSTRING(CHR.STAT_ID, 1, 5), '00000')                                                                  \n\r";
	sql+="                   AND VCHR.C_STAT_ID = CHR.STAT_ID                                                                                                 \n\r";
	sql+="                   AND VCHR.C_CHGER_ID = CHR.CHGER_ID                                                                                               \n\r";
	sql+="                   AND date_format(CHR.STOP_DATE,'%Y-%m-%d') = date_format('20170102','%Y-%m-%d') -- 현재날짜로 변경 요망                           \n\r";
	sql+="                 GROUP BY ADM.ADMCODE, ADM.SGG, VCHR.C_CHGER_TYPE_CD                                                                                \n\r";
	sql+="                 UNION ALL                                                                                                                          \n\r";
	sql+="                 -- 당일 전력량 합계 (급속, 완속 구분)                                                                                              \n\r";
	sql+="                 SELECT '01' AS SORT, '전력량' AS GUBUN, '' AS ADMCODE, '합계' AS SGG, VCHR.C_CHGER_TYPE_CD, SUM(CHR.CHRG_WH) AS CHRG_VAL           \n\r";
	sql+="                  FROM CM_ADM_CODE ADM                                                                                                              \n\r";
	sql+="                     , EV_V_CHARGER VCHR                                                                                                            \n\r";
	sql+="                     , EV2_RAW_CHRGRPT CHR                                                                                                          \n\r";
	sql+="                 WHERE ADM.ADMCODE = CONCAT(SUBSTRING(VCHR.C_STAT_ID, 1, 5), '00000')                                                               \n\r";
	sql+="                   AND ADM.ADMCODE = CONCAT(SUBSTRING(CHR.STAT_ID, 1, 5), '00000')                                                                  \n\r";
	sql+="                   AND VCHR.C_STAT_ID = CHR.STAT_ID                                                                                                 \n\r";
	sql+="                   AND VCHR.C_CHGER_ID = CHR.CHGER_ID                                                                                               \n\r";
	sql+="                   AND date_format(CHR.STOP_DATE,'%Y-%m-%d') = date_format('20170102','%Y-%m-%d') -- 현재날짜로 변경 요망                           \n\r";
	sql+="                 GROUP BY VCHR.C_CHGER_TYPE_CD                                                                                                      \n\r";
	sql+="                 UNION ALL                                                                                                                          \n\r";
	sql+="                 -- 당일 전력량 합계 (전체)                                                                                                         \n\r";
	sql+="                 SELECT '01' AS SORT, '전력량' AS GUBUN, '' AS ADMCODE, '전체합계' AS SGG, 'SUM' AS C_CHGER_TYPE_CD, SUM(CHR.CHRG_WH) AS CHRG_VAL   \n\r";
	sql+="                  FROM CM_ADM_CODE ADM                                                                                                              \n\r";
	sql+="                     , EV_V_CHARGER VCHR                                                                                                            \n\r";
	sql+="                     , EV2_RAW_CHRGRPT CHR                                                                                                          \n\r";
	sql+="                 WHERE ADM.ADMCODE = CONCAT(SUBSTRING(VCHR.C_STAT_ID, 1, 5), '00000')                                                               \n\r";
	sql+="                   AND ADM.ADMCODE = CONCAT(SUBSTRING(CHR.STAT_ID, 1, 5), '00000')                                                                  \n\r";
	sql+="                   AND VCHR.C_STAT_ID = CHR.STAT_ID                                                                                                 \n\r";
	sql+="                   AND VCHR.C_CHGER_ID = CHR.CHGER_ID                                                                                               \n\r";
	sql+="                   AND date_format(CHR.STOP_DATE,'%Y-%m-%d') = date_format('20170102','%Y-%m-%d') -- 현재날짜로 변경 요망                           \n\r";
	sql+="                 UNION ALL                                                                                                                          \n\r";
	sql+="                 -- 구별 당일 충전금액 (급속, 완속 구분)                                                                                            \n\r";
	sql+="                 SELECT '02' AS SORT, '충전금액' AS GUBUN, ADM.ADMCODE, ADM.SGG, VCHR.C_CHGER_TYPE_CD, SUM(CHR.CHRG_AMT) AS CHRG_VAL                \n\r";
	sql+="                  FROM CM_ADM_CODE ADM                                                                                                              \n\r";
	sql+="                     , EV_V_CHARGER VCHR                                                                                                            \n\r";
	sql+="                     , EV2_RAW_CHRGRPT CHR                                                                                                          \n\r";
	sql+="                 WHERE ADM.ADMCODE = CONCAT(SUBSTRING(VCHR.C_STAT_ID, 1, 5), '00000')                                                               \n\r";
	sql+="                   AND ADM.ADMCODE = CONCAT(SUBSTRING(CHR.STAT_ID, 1, 5), '00000')                                                                  \n\r";
	sql+="                   AND VCHR.C_STAT_ID = CHR.STAT_ID                                                                                                 \n\r";
	sql+="                   AND VCHR.C_CHGER_ID = CHR.CHGER_ID                                                                                               \n\r";
	sql+="                   AND date_format(CHR.STOP_DATE,'%Y-%m-%d') = date_format('20170102','%Y-%m-%d') -- 현재날짜로 변경 요망                           \n\r";
	sql+="                 GROUP BY ADM.ADMCODE, ADM.SGG, VCHR.C_CHGER_TYPE_CD                                                                                \n\r";
	sql+="                 UNION ALL                                                                                                                          \n\r";
	sql+="                 -- 당일 충전금액 합계 (급속, 완속 구분)                                                                                            \n\r";
	sql+="                 SELECT '02' AS SORT, '충전금액' AS GUBUN, '' AS ADMCODE, '합계' AS SGG, VCHR.C_CHGER_TYPE_CD, SUM(CHR.CHRG_AMT) AS CHRG_VAL        \n\r";
	sql+="                  FROM CM_ADM_CODE ADM                                                                                                              \n\r";
	sql+="                     , EV_V_CHARGER VCHR                                                                                                            \n\r";
	sql+="                     , EV2_RAW_CHRGRPT CHR                                                                                                          \n\r";
	sql+="                 WHERE ADM.ADMCODE = CONCAT(SUBSTRING(VCHR.C_STAT_ID, 1, 5), '00000')                                                               \n\r";
	sql+="                   AND ADM.ADMCODE = CONCAT(SUBSTRING(CHR.STAT_ID, 1, 5), '00000')                                                                  \n\r";
	sql+="                   AND VCHR.C_STAT_ID = CHR.STAT_ID                                                                                                 \n\r";
	sql+="                   AND VCHR.C_CHGER_ID = CHR.CHGER_ID                                                                                               \n\r";
	sql+="                   AND date_format(CHR.STOP_DATE,'%Y-%m-%d') = date_format('20170102','%Y-%m-%d') -- 현재날짜로 변경 요망                           \n\r";
	sql+="                 GROUP BY VCHR.C_CHGER_TYPE_CD                                                                                                      \n\r";
	sql+="                 UNION ALL                                                                                                                          \n\r";
	sql+="                 -- 당일 충전금액 합계 (전체)                                                                                                       \n\r";
	sql+="                 SELECT '02' AS SORT, '충전금액' AS GUBUN, '' AS ADMCODE, '전체합계' AS SGG, 'SUM' AS C_CHGER_TYPE_CD, SUM(CHR.CHRG_AMT) AS CHRG_VAL\n\r";
	sql+="                  FROM CM_ADM_CODE ADM                                                                                                              \n\r";
	sql+="                     , EV_V_CHARGER VCHR                                                                                                            \n\r";
	sql+="                     , EV2_RAW_CHRGRPT CHR                                                                                                          \n\r";
	sql+="                 WHERE ADM.ADMCODE = CONCAT(SUBSTRING(VCHR.C_STAT_ID, 1, 5), '00000')                                                               \n\r";
	sql+="                   AND ADM.ADMCODE = CONCAT(SUBSTRING(CHR.STAT_ID, 1, 5), '00000')                                                                  \n\r";
	sql+="                   AND VCHR.C_STAT_ID = CHR.STAT_ID                                                                                                 \n\r";
	sql+="                   AND VCHR.C_CHGER_ID = CHR.CHGER_ID                                                                                               \n\r";
	sql+="                   AND date_format(CHR.STOP_DATE,'%Y-%m-%d') = date_format('20170102','%Y-%m-%d') -- 현재날짜로 변경 요망                           \n\r";
	sql+="               ) CHRGVAL                                                                                                                            \n\r";
	sql+="        ORDER BY SGG, SORT                                                                                                                          \n\r";
	sql+="       ) RAWCHR                                                                                                                                     \n\r";
	sql+="GROUP BY GUBUN                                                                                                                                      \n\r";

   //out.print(sql);
   stmt = con.createStatement();   
   rs = stmt.executeQuery(sql);
	JSONObject jsonObj  = new JSONObject();
	JSONArray jsonArr = new JSONArray();
	JSONObject jsonRecord = null;
	
	while(rs.next()) {
		jsonRecord = new JSONObject();
		jsonRecord.put("STAT" , rs.getString("STAT"));
		jsonRecord.put("ALL_SUM" , rs.getString("ALL_SUM"));
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
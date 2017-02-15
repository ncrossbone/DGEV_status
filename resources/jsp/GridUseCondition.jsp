<%@ page contentType="text/html; charset=euc-kr" pageEncoding="EUC-KR" %>
<%@ include file="dbConn.jsp" %>
<%@ page import="java.util.*,java.text.*"%>
<%@page import="org.json.simple.*"%>
<%
try{


	sql="SELECT                                                                                                               \n\r";
	sql+="  CASE WHEN A.GUBUN = '1' THEN '가입회원'                                                                            \n\r";
	sql+="       WHEN A.GUBUN = '2' THEN '회원카드 신청대기'                                                                   \n\r";
	sql+="       WHEN A.GUBUN = '3' THEN '등록차량' END AS GUBUN,                                                              \n\r";
	sql+="  IFNULL(SUM_1 + SUM_2,0) AS ALL_SUM,                                                                                             \n\r";
	sql+="  IFNULL(SUM_1,0) AS ALL_PVT,                                                                                             \n\r";
	sql+="  IFNULL(SUM_2,0) AS ALL_COM,                                                                                             \n\r";
	sql+="  IFNULL(AMD27110_1,0) AS CENTER_PVT,                                                                                   \n\r";
	sql+="  IFNULL(AMD27110_2,0) AS CENTER_COM,                                                                                   \n\r";
	sql+="  IFNULL(AMD27140_1,0) AS EAST_PVT,                                                                                   \n\r";
	sql+="  IFNULL(AMD27140_2,0) AS EAST_COM,                                                                                   \n\r";
	sql+="  IFNULL(AMD27170_1,0) AS WEST_PVT,                                                                                   \n\r";
	sql+="  IFNULL(AMD27170_2,0) AS WEST_COM,                                                                                   \n\r";
	sql+="  IFNULL(AMD27200_1,0) AS SOUTH_PVT,                                                                                   \n\r";
	sql+="  IFNULL(AMD27200_2,0) AS SOUTH_COM,                                                                                   \n\r";
	sql+="  IFNULL(AMD27230_1,0) AS NORTH_PVT,                                                                                   \n\r";
	sql+="  IFNULL(AMD27230_2,0) AS NORTH_COM,                                                                                   \n\r";
	sql+="  IFNULL(AMD27260_1,0) AS SU_PVT,                                                                                   \n\r";
	sql+="  IFNULL(AMD27260_2,0) AS SU_COM,                                                                                   \n\r";
	sql+="  IFNULL(AMD27290_1,0) AS DAL_1_PVT,                                                                                   \n\r";
	sql+="  IFNULL(AMD27290_2,0) AS DAL_1_COM,                                                                                   \n\r";
	sql+="  IFNULL(AMD27710_1,0) AS DAL_2_PVT,                                                                                   \n\r";
	sql+="  IFNULL(AMD27710_2,0) AS DAL_2_COM,                                                                                   \n\r";
	sql+="  IFNULL(ETC_1,0) AS ETC_PVT,                                                                                             \n\r";
	sql+="  IFNULL(ETC_2,0) AS ETC_COM                                                                                             \n\r";
	sql+="FROM                                                                                                                 \n\r";
	sql+="  (                                                                                                                  \n\r";
	sql+="  SELECT '1' AS GUBUN                                                                                                \n\r";
	sql+="  UNION                                                                                                              \n\r";
	sql+="  SELECT '2' AS GUBUN                                                                                                \n\r";
	sql+="  UNION                                                                                                              \n\r";
	sql+="  SELECT '3' AS GUBUN                                                                                                \n\r";
	sql+="  ) A                                                                                                                \n\r";
	sql+="  LEFT JOIN                                                                                                          \n\r";
	sql+="  (                                                                                                                  \n\r";
	sql+="  SELECT                                                                                                             \n\r";
	sql+="    1 AS GUBUN,                                                                                                      \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=1 THEN COUNT(MEMBER_TYPE) ELSE 0 END SUM_1,                                                \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=2 THEN COUNT(MEMBER_TYPE) ELSE 0 END SUM_2,                                                \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=1 AND GU='중구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27110_1,                             \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=2 AND GU='중구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27110_2,                             \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=1 AND GU='동구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27140_1,                             \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=2 AND GU='동구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27140_2,                             \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=1 AND GU='서구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27170_1,                             \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=2 AND GU='서구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27170_2,                             \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=1 AND GU='남구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27200_1,                             \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=2 AND GU='남구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27200_2,                             \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=1 AND GU='북구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27230_1,                             \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=2 AND GU='북구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27230_2,                             \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=1 AND GU='수성구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27260_1,                           \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=2 AND GU='수성구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27260_2,                           \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=1 AND GU='달서구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27290_1,                           \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=2 AND GU='달서구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27290_2,                           \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=1 AND GU='달성군' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27710_1,                           \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=2 AND GU='달성군' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27710_2,                           \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=1 AND GU='기타' THEN COUNT(MEMBER_TYPE) ELSE 0 END ETC_1,                                  \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=2 AND GU='기타' THEN COUNT(MEMBER_TYPE) ELSE 0 END ETC_2                                   \n\r";
	sql+="  FROM                                                                                                               \n\r";
	sql+="    (                                                                                                                \n\r";
	sql+="    SELECT                                                                                                           \n\r";
	sql+="      MEMBER_TYPE,                                                                                                   \n\r";
	sql+="      CASE WHEN SI=0 THEN '기타' ELSE GU END GU                                                                      \n\r";
	sql+="    FROM                                                                                                             \n\r";
	sql+="      (                                                                                                              \n\r";
	sql+="      select IFNULL(MEMBER_TYPE,1) MEMBER_TYPE,                                                                      \n\r";
	sql+="      CASE WHEN SUBSTR(H_ADDR_1,1,INSTR(H_ADDR_1,' ')-1)='대구광역시' THEN 1 ELSE 0 END  SI,                         \n\r";
	sql+="      IFNULL(SUBSTR(H_ADDR_1,INSTR(H_ADDR_1,' ')+1,INSTR(SUBSTR(H_ADDR_1,INSTR(H_ADDR_1,' ')+1),' ')),'기타') AS GU  \n\r";
	sql+="      From EVCS_MEMBER WHERE MEMBER_STAT='2'                                                                         \n\r";
	sql+="      ) A                                                                                                            \n\r";
	sql+="    ) A                                                                                                              \n\r";
	sql+="  GROUP BY MEMBER_TYPE,GU                                                                                            \n\r";
	sql+="  UNION                                                                                                              \n\r";
	sql+="  SELECT                                                                                                             \n\r";
	sql+="    GUBUN,                                                                                                           \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=1 THEN COUNT(MEMBER_TYPE) ELSE 0 END SUM_1,                                                \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=2 THEN COUNT(MEMBER_TYPE) ELSE 0 END SUM_2,                                                \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=1 AND GU='중구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27110_1,                             \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=2 AND GU='중구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27110_2,                             \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=1 AND GU='동구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27140_1,                             \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=2 AND GU='동구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27140_2,                             \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=1 AND GU='서구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27170_1,                             \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=2 AND GU='서구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27170_2,                             \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=1 AND GU='남구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27200_1,                             \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=2 AND GU='남구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27200_2,                             \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=1 AND GU='북구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27230_1,                             \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=2 AND GU='북구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27230_2,                             \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=1 AND GU='수성구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27260_1,                           \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=2 AND GU='수성구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27260_2,                           \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=1 AND GU='달서구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27290_1,                           \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=2 AND GU='달서구' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27290_2,                           \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=1 AND GU='달성군' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27710_1,                           \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=2 AND GU='달성군' THEN COUNT(MEMBER_TYPE) ELSE 0 END AMD27710_2,                           \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=1 AND GU='기타' THEN COUNT(MEMBER_TYPE) ELSE 0 END ETC_1,                                  \n\r";
	sql+="    CASE WHEN MEMBER_TYPE=2 AND GU='기타' THEN COUNT(MEMBER_TYPE) ELSE 0 END ETC_2                                   \n\r";
	sql+="  FROM                                                                                                               \n\r";
	sql+="    (                                                                                                                \n\r";
	sql+="    SELECT                                                                                                           \n\r";
	sql+="      GUBUN,MEMBER_TYPE,                                                                                             \n\r";
	sql+="      CASE WHEN SI=0 THEN '기타' ELSE GU END GU                                                                      \n\r";
	sql+="    FROM                                                                                                             \n\r";
	sql+="      (                                                                                                              \n\r";
	sql+="      SELECT                                                                                                         \n\r";
	sql+="        CASE WHEN ISSUE_STAT_CD='0005' THEN 2 ELSE 3 END GUBUN,                                                      \n\r";
	sql+="        IFNULL(MEMBER_TYPE,1) MEMBER_TYPE,                                                                           \n\r";
	sql+="        CASE WHEN SUBSTR(H_ADDR_1,1,INSTR(H_ADDR_1,' ')-1)='대구광역시' THEN 1 ELSE 0 END  SI,                       \n\r";
	sql+="        IFNULL(SUBSTR(H_ADDR_1,INSTR(H_ADDR_1,' ')+1,INSTR(SUBSTR(H_ADDR_1,INSTR(H_ADDR_1,' ')+1),' ')),'기타') AS GU\n\r";
	sql+="      FROM EVCS_CARD_REQUEST A                                                                                       \n\r";
	sql+="      LEFT JOIN                                                                                                      \n\r";
	sql+="      EVCS_MEMBER B                                                                                                  \n\r";
	sql+="      ON A.MEMBER_ID=B.MEMBER_ID                                                                                     \n\r";
	sql+="      ) A                                                                                                            \n\r";
	sql+="    ) A                                                                                                              \n\r";
	sql+="  GROUP BY GUBUN,MEMBER_TYPE,GU                                                                                      \n\r";
	sql+="  ) B                                                                                                                \n\r";
	sql+="  ON A.GUBUN=B.GUBUN                                                                                                 \n\r";
	 


   //out.print(sql);
   stmt = con.createStatement();   
   rs = stmt.executeQuery(sql);
	JSONObject jsonObj  = new JSONObject();
	JSONArray jsonArr = new JSONArray();
	JSONObject jsonRecord = null;
	
	
	while(rs.next()) {
		jsonRecord = new JSONObject();
		jsonRecord.put("GUBUN" , rs.getString("GUBUN"));
		jsonRecord.put("ALL_SUM" , rs.getString("ALL_SUM"));
		jsonRecord.put("ALL_PVT" , rs.getString("ALL_PVT"));
		jsonRecord.put("ALL_COM" , rs.getString("ALL_COM"));
		jsonRecord.put("CENTER_PVT" , rs.getString("CENTER_PVT"));
		jsonRecord.put("CENTER_COM" , rs.getString("CENTER_COM"));
		jsonRecord.put("EAST_PVT" , rs.getString("EAST_PVT"));
		jsonRecord.put("EAST_COM" , rs.getString("EAST_COM"));
		jsonRecord.put("WEST_PVT" , rs.getString("WEST_PVT"));
		jsonRecord.put("WEST_COM" , rs.getString("WEST_COM"));
		jsonRecord.put("SOUTH_PVT" , rs.getString("SOUTH_PVT"));
		jsonRecord.put("SOUTH_COM" , rs.getString("SOUTH_COM"));
		jsonRecord.put("NORTH_PVT" , rs.getString("NORTH_PVT"));
		jsonRecord.put("NORTH_COM" , rs.getString("NORTH_COM"));
		jsonRecord.put("SU_PVT" , rs.getString("SU_PVT"));
		jsonRecord.put("SU_COM" , rs.getString("SU_COM"));
		jsonRecord.put("DAL_1_PVT" , rs.getString("DAL_1_PVT"));
		jsonRecord.put("DAL_1_COM" , rs.getString("DAL_1_COM"));
		jsonRecord.put("DAL_2_PVT" , rs.getString("DAL_2_PVT"));
		jsonRecord.put("DAL_2_COM" , rs.getString("DAL_2_COM"));
		jsonRecord.put("ETC_PVT" , rs.getString("ETC_PVT"));
		jsonRecord.put("ETC_COM" , rs.getString("ETC_COM"));
		
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
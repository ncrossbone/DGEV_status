<%@ page contentType="text/html; charset=euc-kr" pageEncoding="EUC-KR" %>
<%@ include file="dbConn.jsp" %>
<%@ page import="java.util.*,java.text.*"%>
<%@page import="org.json.simple.*"%>
<%
try{

	sql="SELECT                                                           \n\r";
	sql+="    AA.STAT_ID,                                                  \n\r";
	sql+="    AA.OCCUR_DATE,                                               \n\r";
	sql+="    AA.KO_STAT_NM,                                               \n\r";
	sql+="    AA.CHGER_ID,                                                 \n\r";
	sql+="    AA.TROUBLE_CODE,                                             \n\r";
	sql+="    AA.REPAIR_MAN,                                               \n\r";
	sql+="    AA.CHGER_PROD_MAN,                                           \n\r";
	sql+="    AA.REPAIR_CONTENTS,                                          \n\r";
	sql+="    AA.ERR_DATE,                                                 \n\r";
	sql+="    AA.TROUBLE_REPORTER_NAME,                                    \n\r";
	sql+="    AA.FLAG_NM,                                                  \n\r";
	sql+="    AA.FLAG,                                                     \n\r";
	sql+="    AA.Y,                                                        \n\r";
	sql+="    AA.X,                                                        \n\r";
	sql+="    IFNULL(BB.PHONE_NO,'00000000000') AS PHONE_NO,               \n\r";
	sql+="    IFNULL(BB.MANAGE_TEL,'00000000000') AS MANAGE_TEL            \n\r";
	sql+="FROM (SELECT                                                     \n\r";
	sql+="    A.STAT_ID AS STAT_ID,                                        \n\r";
	sql+="    A.TROUBLE_OCCURRENCE_DATE AS OCCUR_DATE,                     \n\r";
	sql+="    B.KO_STAT_NM AS KO_STAT_NM,                                  \n\r";
	sql+="    A.CHGER_ID AS CHGER_ID,                                      \n\r";
	sql+="    A.TROUBLE_CODE AS TROUBLE_CODE,                              \n\r";
	sql+="    A.REPAIR_MAN AS REPAIR_MAN,                                  \n\r";
	sql+="    A.CHGER_PROD_MAN AS CHGER_PROD_MAN,                          \n\r";
	sql+="    A.REPAIR_CONTENTS AS REPAIR_CONTENTS,                        \n\r";
	sql+="    A.TROUBLE_OCCURRENCE_DATE AS ERR_DATE,                       \n\r";
	sql+="    A.TROUBLE_REPORTER_NAME AS TROUBLE_REPORTER_NAME,            \n\r";
	sql+="    CASE WHEN A.FLAG = '1' THEN '점검내역'                       \n\r";
	sql+="         WHEN A.FLAG = '2' THEN '장애조치'                       \n\r";
	sql+="         WHEN A.FLAG = '3' THEN '예약점검'                       \n\r";
	sql+="         WHEN A.FLAG = '4' THEN '예약점검완료'                   \n\r";
	sql+="         ELSE '알수없음'                                         \n\r";
	sql+="         END AS FLAG_NM,                                         \n\r";
	sql+="    A.FLAG AS FLAG,                                              \n\r";
	sql+="    SUBSTRING_INDEX(B.GPS_LAT_LNG,',',1) AS Y,                   \n\r";
	sql+="    SUBSTRING_INDEX(B.GPS_LAT_LNG,',',-1) AS X                   \n\r";
	sql+="FROM (SELECT * FROM                                              \n\r";
	sql+="          EV_V_CHARGER A,                                        \n\r";
	sql+="          EVCS_TROUBLE_REPAIR B                                  \n\r";
	sql+="      WHERE A.C_STAT_ID = B.STAT_ID                              \n\r";
	sql+="        AND A.C_CHGER_ID = B.CHGER_ID)A, EVCS_STATION B          \n\r";
	sql+="WHERE A.C_STAT_ID = B.STAT_ID) AA,                               \n\r";
	sql+="                  EVCS_STATION BB                                \n\r";
	sql+="WHERE AA.STAT_ID = BB.STAT_ID;                                   \n\r";
   //out.print(sql);
   stmt = con.createStatement();   
   rs = stmt.executeQuery(sql);
	JSONObject jsonObj  = new JSONObject();
	JSONArray jsonArr = new JSONArray();
	JSONObject jsonRecord = null;
	
	while(rs.next()) {
		jsonRecord = new JSONObject();
		jsonRecord.put("STAT_ID" , rs.getString("STAT_ID"));
		jsonRecord.put("OCCUR_DATE" , rs.getString("OCCUR_DATE"));
		jsonRecord.put("KO_STAT_NM" , rs.getString("KO_STAT_NM"));
		jsonRecord.put("CHGER_ID" , rs.getString("CHGER_ID"));
		jsonRecord.put("TROUBLE_CODE" , rs.getString("TROUBLE_CODE"));
		jsonRecord.put("REPAIR_MAN"	, rs.getString("REPAIR_MAN"));
		jsonRecord.put("CHGER_PROD_MAN"	, rs.getString("CHGER_PROD_MAN"));
		jsonRecord.put("REPAIR_CONTENTS"	, rs.getString("REPAIR_CONTENTS"));
		jsonRecord.put("ERR_DATE"	, rs.getString("ERR_DATE"));
		jsonRecord.put("TROUBLE_REPORTER_NAME"	, rs.getString("TROUBLE_REPORTER_NAME"));
		jsonRecord.put("FLAG_NM"	, rs.getString("FLAG_NM"));
		jsonRecord.put("FLAG"	, rs.getString("FLAG"));
		jsonRecord.put("Y"	, rs.getString("Y"));
		jsonRecord.put("X"	, rs.getString("X"));
		jsonRecord.put("PHONE_NO"	, rs.getString("PHONE_NO"));
		jsonRecord.put("MANAGE_TEL"	, rs.getString("MANAGE_TEL"));
		
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
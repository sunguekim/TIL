<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
	<%
		out.println("hello!!!");
	%>
	<form action="logout.jsp" method="POST">
	<input type="submit" value="로그아웃">
	</form>
</body>
</html>
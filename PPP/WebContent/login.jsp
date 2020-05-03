 <%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{text-align: center; background-color: #ffffff;}
    </style>
</head>
<body>
    <h2>로그인 화면</h2>
    <form action="loginAction.jsp" method="POST">
        <input type="text" name="userID" maxlength="20" placeholder="아이디">
        <input type="password" name="userPassword" placeholder="비밀번호">
         <input type="submit" value="로그인">
    </form>
   <h4><a href="join.jsp">회원가입</a></h4>
    
</body>
</html>
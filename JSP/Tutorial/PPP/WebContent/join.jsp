<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
	<h2>로그인 화면</h2>
    <form method="post" action="joinAction.jsp">
        <h3 style="text-align: center;">회원가입</h3><br>
        <input type="text" class="form-control" placeholder="아이디" name="userID" maxlength="20"><br>
        <input type="password" class="form-control" placeholder="비밀번호" name="userPassword" maxlength="20"><br>
        <input type="text" class="form-control" placeholder="이름" name="userName" maxlength="20"><br>
        <label class="btn btn-primary active"> <input type="radio" name="userGender" autocomplete="off" value="남자"
                checked>남자
        </label> <label class="btn btn-primary"> <input type="radio" name="userGender" autocomplete="off" value="여자">여자
        </label><br>
        <input type="text" class="form-control" placeholder="이메일" name="userEmail" maxlength="50"><br>
        <input type="submit" class="btn btn-primary form-control" value="회원가입">
    </form>
</body>
</html>
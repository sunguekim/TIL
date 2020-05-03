package user;


import java.sql.*;
public class UserDAO {
	private Connection conn;
	private PreparedStatement pstmt;
	private ResultSet rs;

	public UserDAO() {
		try {
			String dbURL = "jdbc:mysql://localhost:3306/member";
			String dbID  = "root";
			String dbPassword = "9710";
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection(dbURL,dbID,dbPassword);
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	
	public int login(String userID,String userPassword) {
		String SQL = "SELECT userPassword FROM user WHERE userID = ?"; //매개변수로 들어온 userID를 ?에 넣어준다.
		try {
			pstmt = conn.prepareStatement(SQL); //SQL Injection 해킹기법 방지용
			pstmt.setString(1, userID);
			rs = pstmt.executeQuery();

			if(rs.next()) {
				if(rs.getString(1).equals(userPassword)) {
					return 1; //로그인 성공
				}
				else {
					return 0; //비밀번호 불일치
				}
			}

			return -1; //아이디가 없음

		} catch(Exception e) {
			e.printStackTrace();
		}
		return -2; //데이터베이스 오류
	}

	public int join(User user) {
		String SQL="INSERT INTO USER VALUES(?,?,?,?,?,?)";
		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1, user.getUserID());
			pstmt.setString(2, user.getUserPassword());
			pstmt.setString(3, user.getUserName());
			pstmt.setString(4, user.getUserGender());
			pstmt.setString(5, user.getUserEmail());
			pstmt.setString(6, user.getPHONE());
			return pstmt.executeUpdate();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return -1;
	}
}

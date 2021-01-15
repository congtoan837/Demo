package poly.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Random;

import poly.model.Staff;
import poly.model.User;

public class UserDao {

	private Connection conn;
    private ResultSet rs;
    private PreparedStatement stmt;
    
	public User login(String username, String password) {
        try {
            ConnectDB a = new ConnectDB();
            conn = a.getConnection();
            String sql = "SELECT * FROM Users WHERE Username = ? AND Password= ?";
            stmt = conn.prepareStatement(sql);
            stmt.setString(1, username);
            stmt.setString(2, password);
            rs = stmt.executeQuery();
            
            if (rs.next()) {
                UserDao userDao = new UserDao();
                User u = userDao.getUser(rs.getString(1));
                return u;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }return null;
    }
	
	public User getUser(String user) {
        try {
            ConnectDB a = new ConnectDB();
            conn = a.getConnection();

            String sql = "SELECT * FROM Users WHERE Username = ?";
            stmt = conn.prepareStatement(sql);
            stmt.setString(1, user);
            rs = stmt.executeQuery();

            User u = new User();
            while (rs.next()) {
                u.setUsername(rs.getString(1));
                u.setPassword(rs.getString(2));
                u.setFullname(rs.getString(3));                
            }
            return u;
        } catch (SQLException e) {
            System.out.println(e);
        }
        return null;
    }
	
}

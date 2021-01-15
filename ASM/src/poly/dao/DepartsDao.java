package poly.dao;

import poly.dao.ConnectDB;
import poly.model.Depart;
import poly.model.Staff;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class DepartsDao {
	
	private Connection conn;
    private ResultSet rs;
    private PreparedStatement stmt;
    
	public ArrayList<Depart> getDsPhongBan() {
        try {
            ConnectDB a = new ConnectDB();
            conn = a.getConnection();
            
            String sql = "SELECT * FROM Departs";
            stmt = conn.prepareStatement(sql);
            rs = stmt.executeQuery();
            ArrayList<Depart> list = new ArrayList<>();
            
            while (rs.next()) {
                Depart depart = new Depart();
                depart.setId(rs.getString(1));
                depart.setName(rs.getString(2));
                list.add(depart);
            }
            return list;
        } catch (SQLException e) {
        }return null;
    }

	public void Insert(Depart dp) {
        try {
            ConnectDB a = new ConnectDB();
            conn = a.getConnection();
            String sql = "INSERT INTO Departs VALUES(?,?)";
            stmt = conn.prepareStatement(sql);
            stmt.setString(1, dp.getId());
            stmt.setString(2, dp.getName());                          
            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
	
	public void Delete(String id) {
		try {
            ConnectDB a = new ConnectDB();
            conn = a.getConnection();
            String sql = "DELETE FROM Departs WHERE Id=?";
            stmt = conn.prepareStatement(sql);
            stmt.setString(1, id);
            stmt.executeUpdate();
        } catch (SQLException  e) {
            e.printStackTrace();
        }
	}
}

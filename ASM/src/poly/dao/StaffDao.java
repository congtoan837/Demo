package poly.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;

import poly.model.Staff;

public class StaffDao {
	
	private Connection conn;
    private ResultSet rs;
    private PreparedStatement stmt;
	
	public ArrayList<Staff> getDsNhanVien() {
        try {
            ConnectDB a = new ConnectDB();
            conn = a.getConnection();

            String sql = "SELECT Staffs.Id, Staffs.Name, Staffs.Gender, Staffs.Birthday, Staffs.Photo, Staffs.Email, Staffs.Phone, Staffs.Salary, Staffs.Notes, Staffs.DepartId FROM Departs INNER JOIN Staffs ON Departs.Id = Staffs.DepartId";
            stmt = conn.prepareStatement(sql);
            rs = stmt.executeQuery();
            ArrayList<Staff> list = new ArrayList<>();

            while (rs.next()) {
            	Staff st = new Staff();
            	st.setId(rs.getString(1));
            	st.setName(rs.getString(2));
            	st.setGender(rs.getString(3));
            	st.setBirthday(rs.getString(4));
            	st.setPhoto(rs.getString(5));
            	st.setEmail(rs.getString(6));
            	st.setPhone(rs.getString(7));
            	st.setSalary(rs.getFloat(8));               
                st.setNote(rs.getString(9));
                st.setDepartId(rs.getString(10));
                list.add(st);
            }
            return list;
        } catch (SQLException e) {
            System.out.println(e);
        }
        return null;
    }
	
	public void Insert(Staff st) {
        try {
            ConnectDB a = new ConnectDB();
            conn = a.getConnection();
            String sql = "INSERT INTO Staffs VALUES(?,?,?,?,?,?,?,?,?)";
            stmt = conn.prepareStatement(sql);
            stmt.setString(1, st.getName());
            stmt.setString(2, st.getGender());
            stmt.setString(3, st.getBirthday());
            stmt.setString(4, st.getPhoto());
            stmt.setString(5, st.getEmail());
            stmt.setString(6, st.getPhone());
            stmt.setFloat(7, st.getSalary());
            stmt.setString(8, st.getNote());
            stmt.setString(9, st.getDepartId());                    
            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

	public void Delete(int id) {
		try {
            ConnectDB a = new ConnectDB();
            conn = a.getConnection();
            String sql = "DELETE FROM Staffs WHERE Id=?";
            stmt = conn.prepareStatement(sql);
            stmt.setInt(1, id);
            stmt.executeUpdate();
        } catch (SQLException  e) {
            e.printStackTrace();
        }
	}
	
	public void Update(Staff st) {
		try {
			ConnectDB a = new ConnectDB();
            conn = a.getConnection();
            String sql = "UPDATE Staffs SET Name = ?, Gender = ?, Birthday = ?, Photo = ?, Email = ?, Phone = ?, Salary = ?, Notes = ?, DepartId = ? WHERE Id = ?";
            stmt = conn.prepareStatement(sql);
            stmt.setString(1, st.getName());
            stmt.setString(2, st.getGender());
            stmt.setString(3, st.getBirthday());
            stmt.setString(4, st.getPhoto());
            stmt.setString(5, st.getEmail());
            stmt.setString(6, st.getPhone());
            stmt.setFloat(7, st.getSalary());
            stmt.setString(8, st.getNote());
            stmt.setString(9, st.getDepartId());    
            stmt.setString(10, st.getId());
            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
	}
	
	
}

package poly.dao;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConnectDB {
    public static Connection getConnection(){
        Connection conn = null;
        try {
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            conn = DriverManager.getConnection("jdbc:sqlserver://localhost:1433;databaseName=Personel", "sa", "songlong");
            System.out.println("Kết nối tới Database thành công");
        } catch (Exception e) {
            System.out.println("Kết nối tới Database thất bại vì " + e);
        }
        return conn;
    }
 
}

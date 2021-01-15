package poly.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import poly.dao.UserDao;
import poly.model.User;

@Controller
public class AccountController {

	@RequestMapping(value = {"/","/login"}, method = RequestMethod.GET)
    public String userLogin(ModelMap model) {
        model.put("user", new User());
        return "Login";
    }
	
	@RequestMapping(value = {"/LoginCheck"}, method = RequestMethod.POST)
    public String userCheck(HttpSession session, 
            @RequestParam("username") String username, 
            @RequestParam("password") String password) {      
		try {
            UserDao dao = new UserDao();
            User u = dao.login(username.toLowerCase(), password);
            session.setAttribute("user", u.getUsername());
            session.setAttribute("pass", u.getPassword());   
            session.setAttribute("name", u.getFullname());
            return "index";
        } catch (Exception e) {
            return "Login";
        }
    }
	
	@RequestMapping("/home")
    public String Home() {
		
        return "index";
    }
	
	@RequestMapping("/logout")
    public String userlogout(HttpSession session) {
		session.invalidate();
        return "Login";
    }
}

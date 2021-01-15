package poly.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

import poly.dao.DepartsDao;
import poly.dao.RecordDao;
import poly.dao.StaffDao;


import poly.model.Staff;
import poly.model.Depart;
import poly.model.Record;


@Controller
@RequestMapping("/staff/")
public class StaffController {

	DepartsDao departDao = new DepartsDao();
    StaffDao staffDao = new StaffDao();
    RecordDao recordDao = new RecordDao();
	
	@RequestMapping("List")
    public String List(ModelMap model) {
		List<Depart> list_Depart = departDao.getDsPhongBan();
        List<Staff> list_Staff = staffDao.getDsNhanVien();
        model.addAttribute("list_pb", list_Depart);
        model.addAttribute("list_nv", list_Staff);
        Staff st = new Staff();        
        model.addAttribute("nv_edit", st);
        return "staff/liststaff";
    }   
	
	@RequestMapping("Add")
    public String Add(ModelMap model) {
		model.put("staff", new Staff());
        return "staff/addstaff";
    }
	
	@RequestMapping(value = "Insert", method = RequestMethod.POST)
    public String insert(@ModelAttribute Staff st, ModelMap model) {
        staffDao.Insert(st);
        return "staff/addstaff";
    }
	
	@RequestMapping(value = "Delete/{id}")
    public String Delete(@PathVariable(value = "id") int id, ModelMap model) {
        staffDao.Delete(id);
        List<Depart> list_Depart = departDao.getDsPhongBan();
        List<Staff> list_Staff = staffDao.getDsNhanVien();
        model.addAttribute("list_pb", list_Depart);
        model.addAttribute("list_nv", list_Staff);
        Staff st = new Staff();        
        model.addAttribute("nv_edit", st);
        return "staff/liststaff";
    }
	
	@RequestMapping("Edit")
    public String Edit(ModelMap model) {
		model.put("staff", new Staff());
        return "staff/addstaff";
    }
	
	@RequestMapping(value = "Update", method = RequestMethod.POST)
    public String Update(@ModelAttribute Staff st, ModelMap model) {
        staffDao.Update(st);
        return "staff/addstaff";
    }
}

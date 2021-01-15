package poly.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

import poly.dao.DepartsDao;

import poly.model.Depart;
import poly.model.Staff;



@Controller
@RequestMapping("/depart/")
public class DepartController {

	DepartsDao departDao = new DepartsDao();
	
    @RequestMapping("List")
    public String List(ModelMap model) {
		List<Depart> list_Depart = departDao.getDsPhongBan();
        model.addAttribute("list_pb", list_Depart);
        Depart pb = new Depart();        
        model.addAttribute("pb_edit", pb);
        return "depart/listdepart";
    }  
	
	@RequestMapping("Add")
    public String Add() {
        
        return "depart/adddepart";
    }
	
	@RequestMapping(value = "Insert", method = RequestMethod.POST)
    public String insert(@ModelAttribute Depart dp, ModelMap model) {
        departDao.Insert(dp);
        return "depart/adddepart";
    }
	
	@RequestMapping(value = "Delete/{id}")
    public String Delete(@PathVariable(value = "id") String id, ModelMap model) {
        departDao.Delete(id);
        List<Depart> list_Depart = departDao.getDsPhongBan();
        model.addAttribute("list_pb", list_Depart);
        Depart dp = new Depart();        
        return "depart/listdepart";
    }
}

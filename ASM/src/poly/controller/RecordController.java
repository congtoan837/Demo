package poly.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

import poly.dao.DepartsDao;
import poly.dao.RecordDao;
import poly.dao.StaffDao;


import poly.model.Staff;
import poly.model.Depart;
import poly.model.Record;


@Controller
@RequestMapping("/record/")
public class RecordController {

	DepartsDao departDao = new DepartsDao();
    StaffDao staffDao = new StaffDao();
    RecordDao recordDao = new RecordDao();
	
	@RequestMapping("List")
    public String List() {
		
        return "record/listrecord";
    }   
	
	@RequestMapping("Add")
    public String Add() {
        
        return "record/addrecord";
    }
	
	@RequestMapping(value = {"/Insert"}, method = RequestMethod.POST)
    public String insert(ModelMap model, Staff st) {
        try {
            staffDao.Insert(st);
        } catch (Exception e) {
        }
        return "staff/addstaff";
    }
}

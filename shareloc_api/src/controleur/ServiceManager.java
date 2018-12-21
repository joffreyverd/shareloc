package controleur;
import java.util.List;

import dao.DAOCollocation;
import dao.DAOService;
import model.Collocation;
import model.Service;

public class ServiceManager {
	static DAOService daoService = new DAOService();

	public static List<Service> getServices() {
		List<Service> lv = daoService.findAll();		
		return lv;
	}
	
	public static Service getService(String num) {
		Service v = daoService.find(num);		
		return v;
	}
	
	public static Boolean createService(String name, String description,int points) {
		if(daoService.create(new Service(name,description,points)) != null ) return true;
		return false;
	}
}
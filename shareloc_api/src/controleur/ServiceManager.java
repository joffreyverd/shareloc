package controleur;
import java.util.List;

import dao.DAOService;
import model.Service;

public class ServiceManager {
	static DAOService daoService = new DAOService();

	public static List<Service> getService() {
		List<Service> lv = daoService.findAll();		
		return lv;
	}
	
	public static Service getService(String num) {
		Service v = daoService.find(num);		
		return v;
	}
}
package api.controleur;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Query;

import api.dao.DAOCollocation;
import api.dao.DAOService;
import api.model.CollocUser;
import api.model.Collocation;
import api.model.Service;

public class ServiceManager {
	static DAOService daoService = new DAOService();

	public static List<Service> getServices() {
		List<Service> lv = daoService.findAll();		
		return lv;
	}
	
	public static Service getService(int idService) {
		Service v = daoService.find(idService);		
		return v;
	}
	
//	public static List<CollocUser> getAllCollocUser(int idUser) {
//		Query q = daoCollocUser.getEntityManager().createNamedQuery("CollocUser.getByUserId").setParameter("id", idUser);
//        List<CollocUser> cu = new ArrayList<>();
//		try
//        {
//			cu = (List<CollocUser>) q.getResultList();
//        }
//        catch(Exception e)
//        {}
//        
//        if(cu != null)
//            return (List<CollocUser>) cu;
//        else
//            return null;
//	}
	
	public static Boolean createService(String name, String description,int points) {
		if(daoService.create(new Service(name,description,points)) != null ) return true;
		return false;
	}
	
	public static Boolean deleteService(int idService) {
		Service s = daoService.find(idService);
		if(s != null) {
			try{
				daoService.remove(s);
				return true;
			}catch(Exception e) {
				return false;
			}
		} else return false;
	}
}
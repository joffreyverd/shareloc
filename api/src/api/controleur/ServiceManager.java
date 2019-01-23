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
	
	public static List<Service> getAllServiceCreateColloc(int idColloc) {
		Query q = daoService.getEntityManager().createNamedQuery("Service.getByStatusCreate").setParameter("id", idColloc);
        List<Service> s = new ArrayList<>();
		try
        {
			s = (List<Service>) q.getResultList();
        }
        catch(Exception e)
        {}
        
        if(s != null)
            return (List<Service>) s;
        else
            return null;
	}
	
	public static List<Service> getAllServiceValidColloc(int idColloc) {
		Query q = daoService.getEntityManager().createNamedQuery("Service.getByStatusAccepted").setParameter("id", idColloc);
        List<Service> s = new ArrayList<>();
		try
        {
			s = (List<Service>) q.getResultList();
        }
        catch(Exception e)
        {}
        
        if(s != null)
            return (List<Service>) s;
        else
            return null;
	}
	
	public static List<Service> getAllServiceValid() {
		Query q = daoService.getEntityManager().createNamedQuery("Service.getByAccepted");
        List<Service> s = new ArrayList<>();
		try
        {
			s = (List<Service>) q.getResultList();
        }
        catch(Exception e)
        {}
        
        if(s != null)
            return (List<Service>) s;
        else
            return null;
	}
	
	public static Boolean createService(int idColloc, String name, String description,int points) {
		if(daoService.create(new Service(idColloc, name,description,points)) != null ) return true;
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
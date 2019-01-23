package api.controleur;

import java.util.ArrayList;
import java.util.List;

import api.dao.DAOCollocation;
import api.model.CollocUser;
import api.model.Collocation;
import api.model.User;

public class CollocationManager {
	
	static DAOCollocation daoColloc = new DAOCollocation();

	public static List<Collocation> getCollocs() {
		List<Collocation> lc = daoColloc.findAll();		
		return lc;
	}
	
	public static Collocation getColloc(int id) {
		Collocation c = daoColloc.find(id);		
		return c;
	}
	
	public static List<Collocation> getListColloc(List<CollocUser> lcu){
		List<Collocation> lc = new ArrayList<>();
		
		for (CollocUser cu : lcu) {
			Collocation c = daoColloc.find(cu.getId().getIdCollocation());
			if(c != null) lc.add(c);
		}
		if(lc != null) return lc;
		return null;
	}
	
	public static Boolean createCollocation(String name) {
		if(daoColloc.create(new Collocation(name)) != null ) return true;
		return false;
	}
	
	public static Boolean modifyCollocation(int id,String name) {
		Collocation c = daoColloc.find(id);
		if(c == null) return false;
		
		c.setNameCollocation(name);
		daoColloc.edit(c);
		return true;
	}
	
	public static Boolean deleteCollocation(int idCollocation) {
		Collocation c = daoColloc.find(idCollocation);
		if(c != null) {
			try{
				daoColloc.remove(c);
				return true;
			}catch(Exception e) {
				return false;
			}
		} else return false;
	}
}

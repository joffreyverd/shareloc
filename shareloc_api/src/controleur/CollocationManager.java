package controleur;

import java.util.List;

import dao.DAOCollocation;
import model.Collocation;

public class CollocationManager {
	
	static DAOCollocation daoColloc = new DAOCollocation();

	public static List<Collocation> getCollocs() {
		List<Collocation> lc = daoColloc.findAll();		
		return lc;
	}
	
	public static Collocation getColloc(String num) {
		Collocation c = daoColloc.find(num);		
		return c;
	}
	
	public static Boolean createCollocation(String name) {
		if(daoColloc.create(new Collocation(name)) != null ) return true;
		return false;
	}
}

package controleur;

import java.util.List;

import dao.DAOCollocation;
import model.Collocation;

public class CollocationManager {
	
	static DAOCollocation daoColloc = new DAOCollocation();

	public static List<Collocation> getColloc() {
		List<Collocation> lc = daoColloc.findAll();		
		return lc;
	}
	
	public static Collocation getColloc(String num) {
		Collocation c = daoColloc.find(num);		
		return c;
	}
	
	public static Boolean createCollocation(String name) {
		Collocation c = daoColloc.find(name);
		if(c != null) {
			daoColloc.create(new Collocation(name));
			return true;
		}
		return false;
	}
}

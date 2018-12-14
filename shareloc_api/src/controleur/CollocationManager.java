package controleur;

import java.util.List;

import dao.DAOCollocation;
import model.Collocation;

public class CollocationManager {
	
	static DAOCollocation daoColloc = new DAOCollocation();

	public static List<Collocation> getColloc() {
		List<Collocation> lv = daoColloc.findAll();		
		return lv;
	}
	
	public static Collocation getColloc(String num) {
		Collocation v = daoColloc.find(num);		
		return v;
	}
}

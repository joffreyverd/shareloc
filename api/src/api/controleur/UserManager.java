package api.controleur;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Query;

import api.dao.DAOUser;
import api.model.AchievedService;
import api.model.CollocUser;
import api.model.Collocation;
import api.model.Service;
import api.model.User;

public class UserManager {
	static DAOUser daoUser = new DAOUser();

	public static List<User> getUsers() {
		List<User> lv = daoUser.findAll();
		return lv;
	}

	public static User getUser(String login) {		
		if (login==null)
			return null;
		
		User u= daoUser.find(login);
		return u;
	}
	
	public static List<User> getListUser(List<CollocUser> luc){
		List<User> lu = new ArrayList<>();
		
		for (CollocUser cu : luc) {
			User u = daoUser.find(cu.getId().getIdUser());
			if(u != null) lu.add(u);
		}
		if(lu != null) return lu;
		return null;
	}
	
	public static User getUserByLogin(Object login) {
        Query q = daoUser.getEntityManager().createNamedQuery("User.getUserByLogin").setParameter("login", login);
        User u = null;
        try
        {
            u = (User) q.getSingleResult();
        }
        catch(Exception e)
        {}
        
        if(u != null)
            return (User) u;
        else
            return null;
    }
	
	public static User login(String login, String password) {		
		User u= getUserByLogin(login);
		if(u!=null && u.getPasswordUser().equals(password))
			return u;
		return null;
	}
	
	public static boolean createUser(String login, String password, String name, String email) {
		User u = getUserByLogin(login);
		if (u == null) {
			daoUser.create(new User(login, password, name, email));
			return true;
		}
		return false;
	}
	
//	public static boolean modifyUser(String login, String email) {
//		User u = getUserByLogin(login);
//		if(u != null) {
//			daoUser.edit(u.setLoginUser(login));
//			daoUser.edit(u.setEmailUser(email));
//			return true;
//		}
//		return false;
//	}
	
//	public static boolean modifyPassword(String login, String password) {
//		User u = getUserByLogin(login);
//		if(u != null) {
//			daoUser.edit(u.setPasswordUser(password));
//			return true;
//		}
//		return false;
//	}
	
	public static int getPoints(int idUser) {
		List<AchievedService> las = AchievedServiceManager.getAllAchievedServiceValidUser(idUser);
		int points = 0;
		if(las == null) return 0;
		for(int i = 0; i < las.size();i++) {
			points += ServiceManager.getService(las.get(i).getIdService()).getScoreService();
		}
		return points;
	}
		
	public static boolean deleteUser(int idUser) {
		User u = daoUser.find(idUser);
		if(u != null) {
			try{
				daoUser.remove(u);
				return true;
			}catch(Exception e) {
				return false;
			}
		} else return false;
	}
}
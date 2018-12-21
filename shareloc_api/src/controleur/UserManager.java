package controleur;

import java.util.List;

import javax.persistence.Query;

import dao.DAOUser;
import model.User;

public class UserManager {
	static DAOUser daoUser = new DAOUser();

	public static List<User> getUsers() {
		List<User> lv = daoUser.findAll();
		return lv;
	}

	public static User getUser(String login) {		
		if (login==null)
			return null;
		
		User u=daoUser.find(login);
		return u;
	}
	
	public static User login(String login, String password) {		
		User u=daoUser.find(login);
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
	
	public static User getUserByLogin(Object login) {
        Query query = DAOUser.getEntityManager().createNamedQuery("User.getUserByLogin").setParameter("login", login);
        User user = null;
        try
        {
            user = (User) query.getSingleResult();
        }
        catch(Exception e)
        {}

        if(user != null)
            return (User) user;
        else
            return null;
    }

}
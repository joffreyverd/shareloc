package api.controleur;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Query;

import api.dao.DAOCollocUser;
import api.model.CollocUser;
import api.model.User;

public class CollocUserManager {
	static DAOCollocUser daoCollocUser = new DAOCollocUser();

	//recupère les collocations d'un user
	public static List<CollocUser> getAllCollocUser(int idUser) {
		Query q = daoCollocUser.getEntityManager().createNamedQuery("CollocUser.getByUserId").setParameter("id", idUser);
        List<CollocUser> cu = new ArrayList<>();
		try
        {
			cu = (List<CollocUser>) q.getResultList();
        }
        catch(Exception e)
        {}
        
        if(cu != null)
            return (List<CollocUser>) cu;
        else
            return null;
	}
	
	//Recupère les users d'une collocation
	public static List<CollocUser> getAllUserColloc(int idColloc) {
		Query q = daoCollocUser.getEntityManager().createNamedQuery("CollocUser.getByCollocId").setParameter("id", idColloc);
        List<CollocUser> uc = new ArrayList<>();
		try
        {
			uc = (List<CollocUser>) q.getResultList();
        }
        catch(Exception e)
        {}
        
        if(uc != null)
            return (List<CollocUser>) uc;
        else
            return null;
	}	
	
	public static Boolean insertUserInColloc(String login, int idColloc) {
		User u = UserManager.getUserByLogin(login);
		if(u != null) {
			System.out.println(u);
			if(daoCollocUser.create(new CollocUser(u.getIdUser(),idColloc)) != null ) return true;
			else return false;
		}		
		return false;
	}
}

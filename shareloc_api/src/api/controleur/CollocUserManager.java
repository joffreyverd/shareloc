package api.controleur;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Query;

import api.dao.DAOCollocUser;
import api.dao.DAOCollocUserId;
import api.model.CollocUser;
import api.model.CollocUserId;
import api.model.Collocation;

public class CollocUserManager {
	static DAOCollocUser daoCollocUser = new DAOCollocUser();
	static DAOCollocUserId daoCollocUserId = new DAOCollocUserId();

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
	
	public static Boolean insertUserInColloc(int idUser, int idColloc) {
		if(daoCollocUserId.create(new CollocUserId(idUser,idColloc)) != null ) return true;
		return false;
	}
}

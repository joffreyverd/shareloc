package api.controleur;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Query;

import api.dao.DAOAchievedService;
import api.dao.DAOService;
import api.dao.DAOVoteService;
import api.dao.DAOVoteAchievedService;
import api.model.AchievedService;
import api.model.Service;
import api.model.VoteAchievedService;
import api.model.VoteService;

public class VoteManager {
	static DAOVoteService daoVoteService = new DAOVoteService();
	static DAOVoteAchievedService daoVoteAchievedService = new DAOVoteAchievedService();
	static DAOService daoService = new DAOService();
	static DAOAchievedService daoAchievedService = new DAOAchievedService();
	
	public static int getCountVoteService(int idService) {
		Query q = daoVoteService.getEntityManager().createNamedQuery("VoteService.countNbrVote").setParameter("idService", idService);
        int nbrVote = 0;
		try
        {
			nbrVote = (int) q.getFirstResult();
        }
        catch(Exception e)
        {}
        
		return (int) nbrVote;
	}
	
	public static int getCountVoteServiceAccept(int idService) {
		Query q = daoVoteService.getEntityManager().createNamedQuery("VoteService.countNbrVoteAccepted").setParameter("idService", idService);
        int nbrVote = 0;
		try
        {
			nbrVote = (int) q.getFirstResult();
        }
        catch(Exception e)
        {}
        
		return (int) nbrVote;
	}
	
	public static Boolean createServiceVote(int vote, int idColloc, int idService, int idUser) {
		if(daoVoteService.create(new VoteService(vote, idColloc, idService, idUser)) != null ) {
			if(getCountVoteService(idService) == CollocUserManager.getCountUser(idColloc)) {
				if(getCountVoteServiceAccept(idService) == CollocUserManager.getCountUser(idColloc)) {
					try {
						Service s = ServiceManager.getService(idService);
						s.setServiceStatus(1);
						daoService.edit(s);
						return true;
					}catch(Exception e) {
						return false;
					}
				}else {
					try {
						Service s = ServiceManager.getService(idService);
						s.setServiceStatus(2);
						daoService.edit(s);
						return true;
					}catch(Exception e) {
						return false;
					}
				}
			}
			return true;
		}
		return false;
	}
	
	public static int getCountVoteAchievedService(int idAchievedService) {
		Query q = daoVoteAchievedService.getEntityManager().createNamedQuery("VoteAchievedService.countNbrVote").setParameter("idAchievedService", idAchievedService);
        int nbrVote = 0;
		try
        {
			nbrVote = (int) q.getFirstResult();
        }
        catch(Exception e)
        {}
        
		return (int) nbrVote;
	}
	
	public static int getCountVoteAchievedServiceAccept(int idAchievedService) {
		Query q = daoVoteAchievedService.getEntityManager().createNamedQuery("VoteAchievedService.countNbrVoteAccepted").setParameter("idAchievedService", idAchievedService);
        int nbrVote = 0;
		try
        {
			nbrVote = (int) q.getFirstResult();
        }
        catch(Exception e)
        {}
        
		return (int) nbrVote;
	}
	
	public static Boolean createAchievedServiceVote(int vote, int idColloc, int idAchievedService, int idUser) {
		if(daoVoteAchievedService.create(new VoteAchievedService(vote, idColloc, idAchievedService, idUser)) != null ) {
			if(getCountVoteAchievedService(idAchievedService) == CollocUserManager.getCountUser(idColloc)) {
				if(getCountVoteAchievedServiceAccept(idAchievedService) == CollocUserManager.getCountUser(idColloc)) {
					try {
						AchievedService s = AchievedServiceManager.getAchievedService(idAchievedService);
						s.setAchievedServiceStatut(1);
						daoAchievedService.edit(s);
						return true;
					}catch(Exception e) {}
				}else {
					try {
						AchievedService s = AchievedServiceManager.getAchievedService(idAchievedService);
						s.setAchievedServiceStatut(2);
						daoAchievedService.edit(s);
						return true;
					}catch(Exception e) {}
				}
			}
			return true;
		}
		return false;
	}
}
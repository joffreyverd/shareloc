package api.controleur;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import api.dao.DAOAchievedService;
import api.model.AchievedService;

public class AchievedServiceManager {
	static DAOAchievedService daoAchievedService = new DAOAchievedService();

	public static Date getDate() {
	    Date date = new Date();
		return date;
	}
	
	public static List<AchievedService> getAchievedService() {
		List<AchievedService> lc = daoAchievedService.findAll();		
		return lc;
	}
	
	public static AchievedService getAchievedService(int idAchievedService) {
		AchievedService as = daoAchievedService.find(idAchievedService);		
		return as;
	}
	
	public static Boolean createAchievedService(int status, int idColloc, int idUser, int idService) {
		if(daoAchievedService.create(new AchievedService(getDate(), status, idColloc, idUser, idService)) != null) return true;
		return false;
	}
	
	public static Boolean deleteAchievedService(int idAchievedService) {
		AchievedService as = daoAchievedService.find(idAchievedService);
		if(as != null) {
			try{
				daoAchievedService.remove(as);
				return true;
			}catch(Exception e) {
				return false;
			}
		} else return false;
	}
}

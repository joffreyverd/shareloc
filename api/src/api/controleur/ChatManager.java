package api.controleur;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Query;

import api.dao.DAOChat;
import api.model.AchievedService;
import api.model.Chat;

public class ChatManager {
	
	static DAOChat daoChat = new DAOChat();
	
	public static Boolean createMessage(int idUser, int idColloc, String message) {
		if(daoChat.create(new Chat(idUser, idColloc, message)) != null ) return true;
		return false;
	}
	
	public static List<Chat> getMessage(int idColloc){
		Query q = daoChat.getEntityManager().createNamedQuery("Chat.getMessageByIdColloc").setParameter("idColloc", idColloc);
        List<Chat> lc = new ArrayList<>();
		try
        {
			lc = (List<Chat>) q.getResultList();
        }
        catch(Exception e)
        {}
        
        if(lc != null)
            return (List<Chat>) lc;
        else
            return null;
	}
}

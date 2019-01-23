package api.model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the COLLOC_USER database table.
 * 
 */
@Entity
@Table(name="CHAT")
@NamedQueries({
})
public class Chat implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_chat")
	private int idChat;
	
	@Column(name="id_collocation")
	private int idCollocation;

	@Column(name="id_user_who_send")
	private int idUser;
	
	@Column(name="message_chat")
	private String message;

	public Chat(int idUser, int idColloc, String message) {
		this.idUser = idUser;
		this.idCollocation = idColloc; 
		this.message = message;
	}
	
	public Chat() {
	}
}
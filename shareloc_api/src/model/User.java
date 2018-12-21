package model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the USER database table.
 * 
 */
@Entity
@NamedQueries({
@NamedQuery(name="User.findAll", query="SELECT u FROM User u"),
@NamedQuery(name="User.getUserByLogin", query="SELECT u FROM User u WHERE u.loginUser = :login"),
@NamedQuery(name="User.getUserById", query="SELECT u FROM User u WHERE u.idUser = :id"),
@NamedQuery(name="User.getUserByEmail", query="SELECT u FROM User u WHERE u.emailUser = :email"),
@NamedQuery(name="User.searchUserByLogin", query="SELECT u FROM User u WHERE u.loginUser LIKE :login")
})
public class User implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name="email_user")
	private String emailUser;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_user")
	private int idUser;

	@Column(name="login_user")
	private String loginUser;

	@Column(name="name_user")
	private String nameUser;

	@Column(name="password_user")
	private String passwordUser;

	public User(String login, String password, String name, String email) {
		super();
		this.loginUser = login;
		this.passwordUser = password;
		this.nameUser = name;
		this.emailUser = email;
	}
	
	public User() {
		
	}

	public String getEmailUser() {
		return this.emailUser;
	}

	public void setEmailUser(String emailUser) {
		this.emailUser = emailUser;
	}

	public int getIdUser() {
		return this.idUser;
	}

	public void setIdUser(int idUser) {
		this.idUser = idUser;
	}

	public String getLoginUser() {
		return this.loginUser;
	}

	public void setLoginUser(String loginUser) {
		this.loginUser = loginUser;
	}

	public String getNameUser() {
		return this.nameUser;
	}

	public void setNameUser(String nameUser) {
		this.nameUser = nameUser;
	}

	public String getPasswordUser() {
		return this.passwordUser;
	}

	public void setPasswordUser(String passwordUser) {
		this.passwordUser = passwordUser;
	}

}
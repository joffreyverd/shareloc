package api.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

/*
 * The persistent class for the COLLOC_USER database table
 */
@Embeddable
public class CollocUserId implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Column(name="id_collocation")
	private int idCollocation;

	@Column(name="id_user")
	private int idUser;
	
	public CollocUserId( int idUser, int idColloc) {
		this.idCollocation = idColloc;
		this.idUser = idUser;
	}

	public CollocUserId() {
	
	}
	
	public void setIdCollocation(int idCollocation) {
		this.idCollocation = idCollocation;
	}

	public void setIdUser(int idUser) {
		this.idUser = idUser;
	}

	public int getIdCollocation() {
		return idCollocation;
	}

	public int getIdUser() {
		return idUser;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + idCollocation;
		result = prime * result + idUser;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CollocUserId other = (CollocUserId) obj;
		if (idCollocation != other.idCollocation)
			return false;
		if (idUser != other.idUser)
			return false;
		return true;
	}
	
}

package model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 * The persistent class for the VOTE_SERVICE database table.
 */
@Embeddable
public class VoteServiceId implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Column(name="id_collocation")
	private int idCollocation;

	@Column(name="id_service")
	private int idService;

	@Column(name="id_user")
	private int idUser;
	
	public VoteServiceId() {
		
	}
	
	public VoteServiceId(int colloc, int service, int user) {
		this.idCollocation = colloc;
		this.idService = service;
		this.idUser = user;
	}

	public int getIdCollocation() {
		return idCollocation;
	}

	public int getIdService() {
		return idService;
	}

	public int getIdUser() {
		return idUser;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + idCollocation;
		result = prime * result + idService;
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
		VoteServiceId other = (VoteServiceId) obj;
		if (idCollocation != other.idCollocation)
			return false;
		if (idService != other.idService)
			return false;
		if (idUser != other.idUser)
			return false;
		return true;
	}
}

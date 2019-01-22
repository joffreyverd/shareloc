package api.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 * The persistent class for the VOTE_ACHIEVED_SERVICE database table.
 */
@Embeddable
public class VoteAchievedServiceId implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Column(name="id_collocation")
	private int idCollocation;

	@Column(name="id_achieved_service")
	private int idAchievedService;

	@Column(name="id_user")
	private int idUser;
	
	public VoteAchievedServiceId() {
		
	}
	
	public VoteAchievedServiceId(int colloc, int service, int user) {
		this.idCollocation = colloc;
		this.idAchievedService = service;
		this.idUser = user;
	}

	public int getIdCollocation() {
		return idCollocation;
	}

	public int getIdService() {
		return idAchievedService;
	}

	public int getIdUser() {
		return idUser;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + idCollocation;
		result = prime * result + idAchievedService;
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
		VoteAchievedServiceId other = (VoteAchievedServiceId) obj;
		if (idCollocation != other.idCollocation)
			return false;
		if (idAchievedService != other.idAchievedService)
			return false;
		if (idUser != other.idUser)
			return false;
		return true;
	}
}

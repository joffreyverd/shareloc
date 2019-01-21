package api.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

/*
 * Class which permit to represent keys in the beneficiary table
 */
@Embeddable
public class BeneficiaryId implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Column(name="id_achieved_service")
	private int idAchievedService;
	
	@Column(name="id_user")
	private int idUser;
	
	public BeneficiaryId() {
		
	}
	
	public BeneficiaryId(int service, int user) {
		this.idAchievedService = service;
		this.idUser = user;	
	}
	
	public int getIdAchievedService() {
		return idAchievedService;
	}

	public int getIdUser() {
		return idUser;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
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
		BeneficiaryId other = (BeneficiaryId) obj;
		if (idAchievedService != other.idAchievedService)
			return false;
		if (idUser != other.idUser)
			return false;
		return true;
	}
}
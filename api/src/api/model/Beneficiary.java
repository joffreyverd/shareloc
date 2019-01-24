package api.model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the BENEFICIARY database table.
 * 
 */
@Entity
@Table(name="BENEFICIARY")
@NamedQuery(name="Beneficiary.findAll", query="SELECT b FROM Beneficiary b")
public class Beneficiary implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private BeneficiaryId id;
	
	@Column(name="achieved_service_validated")
	private int achievedServiceValidated;

	public Beneficiary() {
	}

	public int getAchievedServiceValidated() {
		return this.achievedServiceValidated;
	}

	public void setAchievedServiceValidated(int achievedServiceValidated) {
		this.achievedServiceValidated = achievedServiceValidated;
	}

	public BeneficiaryId getId() {
		return id;
	}

	public void setId(BeneficiaryId id) {
		this.id = id;
	}
}
package api.model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;


/**
 * The persistent class for the ACHIEVED_SERVICE database table.
 * 
 */
@Entity
@Table(name="ACHIEVED_SERVICE")
@NamedQueries({
@NamedQuery(name="AchievedService.findAll", query="SELECT a FROM AchievedService a"),
@NamedQuery(name="AchievedService.getByCollocAndStatusAccepted", query="SELECT a FROM AchievedService a WHERE a.achievedServiceStatut= 1 AND a.idCollocation = :idColloc"),
@NamedQuery(name="AchievedService.getByUserAndStatusAccepted", query="SELECT a FROM AchievedService a WHERE a.achievedServiceStatut=1 AND a.idUser = :idUser")
})
public class AchievedService implements Serializable {
	private static final long serialVersionUID = 1L;

	@Temporal(TemporalType.DATE)
	@Column(name="achieved_service_date")
	private Date achievedServiceDate;

	@Column(name="achieved_service_statut")
	private int achievedServiceStatut;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_achieved_service")
	private int idAchievedService;

	@Column(name="id_collocation")
	private int idCollocation;

	@Column(name="id_service")
	private int idService;

	@Column(name="id_user")
	private int idUser;

	private String picture;

	public AchievedService() {
	}
	
	public AchievedService(Date date,int status, int idColloc, int idUser, int idService) {
		this.achievedServiceDate = date;
		this.achievedServiceStatut = status;
		this.idCollocation = idColloc;
		this.idService = idService;
		this.idUser = idUser;
	}

	public Date getAchievedServiceDate() {
		return this.achievedServiceDate;
	}

	public void setAchievedServiceDate(Date achievedServiceDate) {
		this.achievedServiceDate = achievedServiceDate;
	}

	public int getAchievedServiceStatut() {
		return this.achievedServiceStatut;
	}

	public void setAchievedServiceStatut(int achievedServiceStatut) {
		this.achievedServiceStatut = achievedServiceStatut;
	}

	public int getIdAchievedService() {
		return this.idAchievedService;
	}

	public void setIdAchievedService(int idAchievedService) {
		this.idAchievedService = idAchievedService;
	}

	public int getIdCollocation() {
		return this.idCollocation;
	}

	public void setIdCollocation(int idCollocation) {
		this.idCollocation = idCollocation;
	}

	public int getIdService() {
		return this.idService;
	}

	public void setIdService(int idService) {
		this.idService = idService;
	}

	public int getIdUser() {
		return this.idUser;
	}

	public void setIdUser(int idUser) {
		this.idUser = idUser;
	}

	public String getPicture() {
		return this.picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

}
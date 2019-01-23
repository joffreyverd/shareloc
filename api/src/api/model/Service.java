package api.model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the SERVICE database table.
 * 
 */
@Entity
@Table(name="SERVICE")
@NamedQueries({
@NamedQuery(name="Service.findAll", query="SELECT s FROM Service s"),
@NamedQuery(name="Service.getByServiceId", query="SELECT s FROM Service s WHERE s.idService= :id"),
@NamedQuery(name="Service.getByAccepted", query="SELECT s FROM Service s WHERE s.serviceStatus= 1"),
@NamedQuery(name="Service.getByStatusCreate", query="SELECT s FROM Service s WHERE s.serviceStatus= 0 AND s.idCollocation = :id"),
@NamedQuery(name="Service.getByStatusAccepted", query="SELECT s FROM Service s WHERE s.serviceStatus= 1 AND s.idCollocation = :id")
})
public class Service implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_service")
	private int idService;

	@Column(name="id_collocation")
	private int idCollocation;
	
	@Column(name="name_service")
	private String nameService;

	@Column(name="score_service")
	private int scoreService;

	@Column(name="service_description")
	private String serviceDescription;

	@Column(name="service_status")
	private int serviceStatus;

	public Service() {
	}

	public Service(int idColloc, String name, String description, int points) {
		this.idCollocation = idColloc;
		this.nameService = name;
		this.serviceDescription = description;
		this.scoreService = points;
	}

	public int getIdService() {
		return this.idService;
	}

	public void setIdService(int idService) {
		this.idService = idService;
	}

	public String getNameService() {
		return this.nameService;
	}

	public void setNameService(String nameService) {
		this.nameService = nameService;
	}

	public int getScoreService() {
		return this.scoreService;
	}

	public void setScoreService(int scoreService) {
		this.scoreService = scoreService;
	}

	public String getServiceDescription() {
		return this.serviceDescription;
	}

	public void setServiceDescription(String serviceDescription) {
		this.serviceDescription = serviceDescription;
	}

	public int getServiceStatus() {
		return this.serviceStatus;
	}

	public void setServiceStatus(int serviceStatus) {
		this.serviceStatus = serviceStatus;
	}

}
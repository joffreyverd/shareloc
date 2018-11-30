package model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the VOTE_SERVICE database table.
 */
@Entity
@Table(name="VOTE_SERVICE")
@NamedQuery(name="VoteService.findAll", query="SELECT v FROM VoteService v")
public class VoteService implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name="admin_service")
	private int adminService;
	
	@EmbeddedId
	private VoteServiceId id;

	public VoteService() {
	}

	public int getAdminService() {
		return this.adminService;
	}

	public void setAdminService(int adminService) {
		this.adminService = adminService;
	}
}
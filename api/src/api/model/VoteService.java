package api.model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the VOTE_SERVICE database table.
 */
@Entity
@Table(name="VOTE_SERVICE")
@NamedQueries({
	@NamedQuery(name="VoteService.findAll", query="SELECT v FROM VoteService v"),
	@NamedQuery(name="VoteService.countNbrVote", query="SELECT count(v) FROM VoteService v WHERE v.id.idService = :idService"),
	@NamedQuery(name="VoteService.countNbrVoteAccepted", query="SELECT count(v) FROM VoteService v WHERE v.id.idService = :idService AND v.vote = 1")
})
public class VoteService implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name="admin_service")
	private int adminService;
	
	@Column(name="vote")
	private int vote;
	
	@EmbeddedId
	private VoteServiceId id;

	public VoteService(){
		
	}
	
	public VoteService(int vote, int idColloc, int idService, int idUser) {
	this.id = new VoteServiceId(idColloc, idService, idUser);
	this.vote = vote;
	}

	public int getAdminService() {
		return this.adminService;
	}

	public void setAdminService(int adminService) {
		this.adminService = adminService;
	}
}
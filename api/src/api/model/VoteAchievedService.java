package api.model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the VOTE_SERVICE database table.
 */
@Entity
@Table(name="VOTE_ACHIEVED_SERVICE")
@NamedQueries({
	@NamedQuery(name="VoteAchievedService.findAll", query="SELECT v FROM VoteAchievedService v"),
	@NamedQuery(name="VoteAchievedService.countNbrVote", query="SELECT count(v) FROM VoteAchievedService v WHERE v.id.idAchievedService = :idAchievedService"),
	@NamedQuery(name="VoteAchievedService.countNbrVoteAccepted", query="SELECT count(v) FROM VoteAchievedService v WHERE v.id.idAchievedService = :idAchievedService AND v.vote = 1")
})
public class VoteAchievedService implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Column(name="vote")
	private int vote;
	
	@EmbeddedId
	private VoteAchievedServiceId id;

	public VoteAchievedService(){
		
	}
	
	public VoteAchievedService(int vote, int idColloc, int idService, int idUser) {
	this.id = new VoteAchievedServiceId(idColloc, idService, idUser);
	this.vote = vote;
	}
}
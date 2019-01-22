package api.path;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import api.controleur.UserManager;
import api.controleur.VoteManager;
import api.model.VoteService;
import api.security.SigninNeeded;

@Path("/Vote")
public class VotePath {
	@SigninNeeded
	@GET
	@Path("/getNumberVoteService/{idService}")
	@Produces(MediaType.APPLICATION_JSON)
	public int getPoints(@PathParam("idService") int idService) {
		return VoteManager.
	}
	@SigninNeeded
	@GET
	@Path("/getNumberVoteServiceAccepted/{idService}")
	@Produces(MediaType.APPLICATION_JSON)
	public int getPoints(@PathParam("idService") int idService) {
		return UserManager.getPoints(idUser);
	}
	@SigninNeeded
	@GET
	@Path("/getNumberVoteAchievedService/{idAchievedService}")
	@Produces(MediaType.APPLICATION_JSON)
	public int getPoints(@PathParam("idAchievedService") int idAchievedService) {
		return UserManager.getPoints(idUser);
	}
	@SigninNeeded
	@GET
	@Path("/getNumberVoteAchievedServiceAccepted/{idAchievedService}")
	@Produces(MediaType.APPLICATION_JSON)
	public int getPoints(@PathParam("idAchievedService") int idAchievedService) {
		return UserManager.getPoints(idUser);
	}
}

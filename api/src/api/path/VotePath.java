package api.path;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.jose4j.json.internal.json_simple.JSONObject;

import api.controleur.CollocationManager;
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
	public int numberVoteService(@PathParam("idService") int idService) {
		return VoteManager.getCountVoteService(idService);
	}
	
	@SigninNeeded
	@GET
	@Path("/getNumberVoteServiceAccepted/{idService}")
	@Produces(MediaType.APPLICATION_JSON)
	public int numberVoteServiceAccept(@PathParam("idService") int idService) {
		return VoteManager.getCountVoteServiceAccept(idService);
	}
	
	@SigninNeeded
	@GET
	@Path("/getNumberVoteAchievedService/{idAchievedService}")
	@Produces(MediaType.APPLICATION_JSON)
	public int numberVoteAchievedService(@PathParam("idAchievedService") int idAchievedService) {
		return VoteManager.getCountVoteAchievedService(idAchievedService);
	}
	
	@SigninNeeded
	@GET
	@Path("/getNumberVoteAchievedServiceAccepted/{idAchievedService}")
	@Produces(MediaType.APPLICATION_JSON)
	public int numberVoteAchievedServiceAccept(@PathParam("idAchievedService") int idAchievedService) {
		return VoteManager.getCountVoteAchievedServiceAccept(idAchievedService);
	}
	
	@SigninNeeded
	@POST
	@Path("/voteService")
	@Produces(MediaType.APPLICATION_JSON)
	public Response VoteService(JSONObject params) {
		if(VoteManager.createServiceVote(Integer.parseInt(params.get("vote").toString()), Integer.parseInt(params.get("idColloc").toString()), Integer.parseInt(params.get("idService").toString()), Integer.parseInt(params.get("idUser").toString())))
			return Response.status(Status.CREATED).build();
		return Response.status(Status.CONFLICT).build();
	}
	
	@SigninNeeded
	@POST
	@Path("/voteAchievedService")
	@Produces(MediaType.APPLICATION_JSON)
	public Response VoteAchievedService(JSONObject params) {
		if(VoteManager.createServiceVote(Integer.parseInt(params.get("vote").toString()), Integer.parseInt(params.get("idColloc").toString()), Integer.parseInt(params.get("idAchievedService").toString()), Integer.parseInt(params.get("idUser").toString())))
			return Response.status(Status.CREATED).build();
		return Response.status(Status.CONFLICT).build();
	}
}
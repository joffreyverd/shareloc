package api.path;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.jose4j.json.internal.json_simple.JSONObject;

import api.controleur.AchievedServiceManager;
import api.controleur.CollocationManager;
import api.controleur.ServiceManager;
import api.model.AchievedService;
import api.model.Collocation;
import api.model.Service;
import api.security.SigninNeeded;

@Path("/AchievedService")
public class AchievedServicePath {
	@SigninNeeded
	@POST
	@Path("/createAchievedService")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createAchievedService(JSONObject params) {
		if(AchievedServiceManager.createAchievedService(Integer.parseInt(params.get("status").toString()), Integer.parseInt(params.get("idColloc").toString()), Integer.parseInt(params.get("idUser").toString()), Integer.parseInt(params.get("idService").toString())))
			return Response.status(Status.CREATED).build();
		return Response.status(Status.CONFLICT).build();
	}
	
	@SigninNeeded
	@GET
	@Path("/getAchievedService/{idAchievedService}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAchievedService(@PathParam("idAchievedService") int idAchievedService) {
		AchievedService as = AchievedServiceManager.getAchievedService(idAchievedService);
		if (as != null) {
			return Response.ok().entity(as).build();
		}
		else return null;
	}
	
	@SigninNeeded
	@GET
	@Path("/getServiceCreate/{idColloc}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllAchievedServiceCreateColloc(@PathParam("idColloc") int idColloc) {
		List<AchievedService> las = AchievedServiceManager.getAllAchievedServiceCreateColloc(idColloc);
		if (las != null) {
			return Response.ok().entity(las).build();
		}
		else return null;
	}
	
	@SigninNeeded
	@GET
	@Path("/getAchievedServiceAcceptedUser/{idUser}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllAchievedServiceValidUser(@PathParam("idUser") int idUser) {
		List<AchievedService> las = AchievedServiceManager.getAllAchievedServiceValidUser(idUser);
		if (las != null) {
			return Response.ok().entity(las).build();
		}
		else return null;
	}
	
	@SigninNeeded
	@GET
	@Path("/getAchievedServiceAcceptedColloc/{idColloc}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllAchievedServiceValidColloc(@PathParam("idColloc") int idColloc) {
		List<AchievedService> las = AchievedServiceManager.getAllAchievedServiceValidColloc(idColloc);
		if (las != null) {
			return Response.ok().entity(las).build();
		}
		else return null;
	}
	
	@SigninNeeded
	@DELETE
	@Path("/deleteAchievedService/{idAchievedService}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response deleteAchievedService(@PathParam("idAchievedService") int idAchievedService) {
		try {
			AchievedServiceManager.deleteAchievedService(idAchievedService);
			return Response.status(Status.ACCEPTED).build();
		} catch (Exception e) {
			return Response.status(Status.NOT_FOUND).build();
		}
	}
}

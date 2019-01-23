package api.path;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.jose4j.json.internal.json_simple.JSONObject;

import api.controleur.AchievedServiceManager;
import api.controleur.ChatManager;
import api.controleur.CollocationManager;
import api.model.AchievedService;
import api.model.Chat;
import api.security.SigninNeeded;

@Path("/Chat")
public class ChatPath {
	@SigninNeeded
	@POST
	@Path("/postMessage")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createMessage(JSONObject params) {
		if(ChatManager.createMessage(Integer.parseInt(params.get("idUser").toString()), Integer.parseInt(params.get("idColloc").toString()), params.get("message").toString()))
			return Response.status(Status.CREATED).build();
		return Response.status(Status.CONFLICT).build();
	}
	
	@SigninNeeded
	@GET
	@Path("/getMessage/{idColloc}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getMessage(@PathParam("idColloc") int idColloc) {
		List<Chat> lc = ChatManager.getMessage(idColloc);
		if (lc != null) {
			return Response.ok().entity(lc).build();
		}
		else return null;
	}
}

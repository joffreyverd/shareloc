package api.path;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.jose4j.json.internal.json_simple.JSONObject;

import api.controleur.CollocationManager;
import api.controleur.UserManager;
import api.model.User;
import api.security.JWTokenUtility;
import api.security.SigninNeeded;

import java.util.List;

import javax.management.relation.RelationNotFoundException;
import javax.resource.ResourceException;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/User")
public class UserPath {
//	@SigninNeeded
//	@PUT
//	@Path("/updateUser/{idUser}")
//	@Consumes(MediaType.APPLICATION_JSON)
//	@Produces(MediaType.APPLICATION_JSON)
//	public Response updateUser(@PathParam("id") int id, JSONObject params) {
//		if(UserManager.modifyUser(id ,params.get("name").toString()))
//			return Response.status(Status.ACCEPTED).build();
//		return Response.status(Status.CONFLICT).build();
//	}
	
	@SigninNeeded
	@DELETE
	@Path("/deleteUser/{idUser}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response deleteById(@PathParam("idUser") int idUser) {
		try {
			UserManager.deleteUser(idUser);
			return Response.status(Status.ACCEPTED).build();
		} catch (Exception e) {
			return Response.status(Status.NOT_FOUND).build();
		}
	}
}
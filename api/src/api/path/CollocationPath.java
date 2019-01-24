package api.path;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.jose4j.json.internal.json_simple.JSONObject;

import api.controleur.CollocationManager;
import api.model.Collocation;
import api.security.SigninNeeded;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;

@Path("/Collocation")
public class CollocationPath {
	
	@SigninNeeded
	@POST
	@Path("/createColloc")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createCollocation(JSONObject params) {
		if(CollocationManager.createCollocation(params.get("name").toString()))
			return Response.status(Status.CREATED).build();
		return Response.status(Status.CONFLICT).build();
	}
	
	@SigninNeeded
	@PUT
	@Path("/updateColloc/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response updateCollocation(@PathParam("id") int id, JSONObject params) {
		if(CollocationManager.modifyCollocation(id ,params.get("name").toString()))
			return Response.status(Status.ACCEPTED).build();
		return Response.status(Status.CONFLICT).build();
	}
	
	@SigninNeeded
	@GET
	@Path("/getColloc/{idColloc}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getCollocForUser(@PathParam("idColloc") int idColloc) {
		Collocation c = CollocationManager.getColloc(idColloc);
		if (c != null) {
			return Response.ok().entity(c).build();
		}
		else return null;
	}
	
	@SigninNeeded
	@DELETE
	@Path("/deleteColloc/{idColloc}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response deleteCollocation(@PathParam("idColloc") int idColloc) {
		try {
			CollocationManager.deleteCollocation(idColloc);
			return Response.status(Status.ACCEPTED).build();
		} catch (Exception e) {
			return Response.status(Status.NOT_FOUND).build();
		}
	}	
}
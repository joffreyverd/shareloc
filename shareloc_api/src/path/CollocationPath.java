package path;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.jose4j.json.internal.json_simple.JSONObject;

import controleur.CollocationManager;
import controleur.UserManager;
import model.Collocation;
import model.User;
import security.JWTokenUtility;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

@Path("/collocation")
public class CollocationPath {
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAll() {
		List<Collocation> lc = CollocationManager.getCollocs();
		
		if (lc != null) {
			return Response.ok().entity(lc).build();
		}

		return Response.status(Status.NO_CONTENT).build();
	}
	
	@POST
	@Path("/createColloc")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createCollocation(JSONObject params) {
		if(CollocationManager.createCollocation(params.get("name").toString()))
			return Response.status(Status.CREATED).build();
		return Response.status(Status.CONFLICT).build();
	}
	
}
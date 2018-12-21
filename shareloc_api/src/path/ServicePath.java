package path;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.jose4j.json.internal.json_simple.JSONObject;

import controleur.ServiceManager;
import controleur.UserManager;
import model.Service;
import model.User;
import security.JWTokenUtility;
import security.SigninNeeded;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/service")
public class ServicePath {
	@SigninNeeded
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAll() {
		List<Service> se = ServiceManager.getServices();
		
		if (se != null) {
			return Response.ok().entity(se).build();
		}

		return Response.status(Status.NO_CONTENT).build();
	}
	
	@SigninNeeded
	@POST
	@Path("/createService")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createService(JSONObject params) {
		if(ServiceManager.createService(params.get("name").toString(), params.get("description").toString() ,(int)params.get("points")))
			return Response.status(Status.CREATED).build();
		return Response.status(Status.CONFLICT).build();
	}
	
}
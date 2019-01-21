package api.path;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.jose4j.json.internal.json_simple.JSONObject;

import api.controleur.ServiceManager;
import api.model.Service;
import api.security.SigninNeeded;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
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
	@GET
	@Path("/getService/{idService}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getCollocForUser(@PathParam("idService") int idService) {
		Service s = ServiceManager.getService(idService);
		if (s != null) {
			return Response.ok().entity(s).build();
		}
		else return null;
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
	
	@SigninNeeded
	@DELETE
	@Path("/deleteService/{idService}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response deleteById(@PathParam("idService") int idService) {
		try {
			ServiceManager.deleteService(idService);
			return Response.status(Status.ACCEPTED).build();
		} catch (Exception e) {
			return Response.status(Status.NOT_FOUND).build();
		}
	}
	
}
package path;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import controleur.CollocationManager;
import model.Collocation;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/collocation")
public class CollocationPath {
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAll() {
		List<Collocation> lc = CollocationManager.getColloc();
		
		if (lc != null) {
			return Response.ok().entity(lc).build();
		}

		return Response.status(Status.NO_CONTENT).build();
	}
}